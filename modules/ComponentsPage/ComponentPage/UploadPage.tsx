import Upload from '@/components/Upload';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const uploadCode = `import React, { useState, DragEvent, ChangeEvent } from 'react';

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
      className={\`w-full p-6 border-2 border-dashed \${dragging ? 'border-blue-500' : 'border-gray-300'} rounded-md transition-colors duration-300 ease-in-out\`}
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
`;

const uploadUsage = `import React, { useState } from 'react';

import Upload from '@/components/Upload';

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFilesSelected = (fileList: FileList) => {
    setFiles(Array.from(fileList));
  };

  return (
    <div className="p-8">
      <Upload onFilesSelected={handleFilesSelected} />
      <div className="mt-4">
        {files.length > 0 && (
          <ul>
            {files.map((file, index) => (
              <li
                key={index}
                className="py-2"
              >
                {file.name} - {Math.round(file.size / 1024)} KB
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
`;

export default function UploadPage() {
  return (
    <ComponentDetail
      usage={uploadUsage}
      code={uploadCode}
      component={
        <div className="p-8">
          <Upload onFilesSelected={files => console.log(files)} />
        </div>
      }
      name="Upload"
      detail="The Upload component provides a file upload interface that supports drag-and-drop as well as file selection via a file dialog. It highlights the border when dragging files over the drop area and handles file selection events to allow users to upload multiple files."
    />
  );
}
