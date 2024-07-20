import { useState } from 'react';

import Button from './Button';

interface AlertDialogProps {
  title: string;
  message: string;
  cancelLabel?: string;
  confirmLabel?: string;
  triggerButtonLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  title,
  message,
  cancelLabel = 'Cancel',
  confirmLabel = 'Confirm',
  triggerButtonLabel,
  onCancel,
  onConfirm,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCancel = () => {
    onCancel();
    setIsDialogOpen(false);
  };
  const handleConfirm = () => {
    onConfirm();
    setIsDialogOpen(false);
  };

  return (
    <>
      <Button
        label={triggerButtonLabel}
        onClick={handleOpenDialog}
      />
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
            <h1 className="text-xl mb-4">{title}</h1>
            <p className="text-md mb-4">{message}</p>
            <div className="flex justify-end gap-4">
              <Button
                label={cancelLabel}
                onClick={handleCancel}
                variant="secondary"
              />
              <Button
                label={confirmLabel}
                onClick={handleConfirm}
                variant="primary"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AlertDialog;
