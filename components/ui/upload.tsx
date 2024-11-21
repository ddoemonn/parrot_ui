'use client';

import React, { useRef, useState } from 'react';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload as UploadIcon, X, File, Image as ImageIcon } from 'lucide-react';

export interface UploadProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
  onUpload?: (files: File[]) => void;
  onError?: (error: string) => void;
  disabled?: boolean;
  className?: string;
  variant?: 'default' | 'compact';
  preview?: boolean;
}

export function Upload({
  accept,
  multiple = false,
  maxSize,
  onUpload,
  onError,
  disabled = false,
  className,
  variant = 'default',
  preview = true,
}: UploadProps) {
  const { theme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;

    const validFiles: File[] = [];
    const newPreviews: string[] = [];

    Array.from(newFiles).forEach(file => {
      if (maxSize && file.size > maxSize) {
        onError?.(`File ${file.name} exceeds maximum size of ${maxSize / 1000000}MB`);
        return;
      }

      validFiles.push(file);

      if (preview && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          newPreviews.push(e.target?.result as string);
          setPreviews(prev => [...prev, e.target?.result as string]);
        };
        reader.readAsDataURL(file);
      }
    });

    if (validFiles.length) {
      setFiles(prev => multiple ? [...prev, ...validFiles] : [validFiles[0]]);
      onUpload?.(validFiles);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (!disabled) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className={cn('relative', className)}>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={(e) => handleFiles(e.target.files)}
        className="hidden"
        disabled={disabled}
      />

      {/* Drop Zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        onClick={() => !disabled && inputRef.current?.click()}
        className={cn(
          'cursor-pointer transition-all duration-200 border-2 border-dashed rounded-lg',
          dragActive ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50',
          disabled && 'opacity-50 cursor-not-allowed',
          variant === 'compact' ? 'p-4' : 'p-8',
          'flex flex-col items-center justify-center gap-2'
        )}
        style={{ borderColor: dragActive ? theme.colors.primary : undefined }}
      >
        <UploadIcon 
          className={cn(
            'text-muted transition-colors',
            dragActive && 'text-primary'
          )}
          style={{ color: dragActive ? theme.colors.primary : undefined }}
        />
        {variant === 'default' && (
          <>
            <p className="text-center font-medium">
              Drop files here or click to upload
            </p>
            <p className="text-sm text-muted">
              {accept ? `Accepts: ${accept}` : 'All file types supported'}
              {maxSize && ` • Max size: ${maxSize / 1000000}MB`}
            </p>
          </>
        )}
      </div>

      {/* File Previews */}
      <AnimatePresence>
        {files.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-4 space-y-2"
          >
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center gap-3 p-2 rounded-lg bg-white/5"
              >
                {preview && previews[index] ? (
                  <img
                    src={previews[index]}
                    alt={file.name}
                    className="w-10 h-10 rounded object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center">
                    {file.type.startsWith('image/') ? (
                      <ImageIcon className="w-5 h-5 text-muted" />
                    ) : (
                      <File className="w-5 h-5 text-muted" />
                    )}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted">
                    {(file.size / 1000).toFixed(1)}KB
                  </p>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-muted" />
                </button>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}