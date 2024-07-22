// components/Upload.tsx
import React, { useState, DragEvent, ChangeEvent } from 'react';

interface UploadProps {
  onFilesSelected: (files: FileList) => void;
}

const Upload: React.FC<UploadProps> = ({ onFilesSelected }) => {
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files.length > 0) {
      onFilesSelected(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onFilesSelected(e.target.files);
    }
  };

  return (
    <div
      className={`w-full p-6 border-2 border-dashed ${dragging ? 'border-blue-500' : 'border-gray-300'} rounded-md transition-colors duration-300 ease-in-out`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        multiple
        className="hidden"
        id="file-input"
        onChange={handleFileChange}
      />
      <label
        htmlFor="file-input"
        className="flex flex-col items-center justify-center cursor-pointer h-full"
      >
        <p className="text-gray-500">Drag & drop files here or click to select</p>
        <p className="text-blue-500 mt-2">Select files</p>
      </label>
    </div>
  );
};

export default Upload;
