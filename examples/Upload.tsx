// pages/index.tsx
import React, { useState } from 'react';

import Upload from '@/components/Upload';

const UploadExample: React.FC = () => {
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
};

export default UploadExample;
