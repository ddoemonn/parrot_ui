import { useState } from 'react';

import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger } from '@/components/AlertDialog';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const alertDialogCode = `import { useState } from 'react';

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

`;

const alertDialogUsage = `<AlertDialog
        triggerButtonLabel="Open Alert Dialog"
        title="Confirm Action"
        message="Are you sure you want to proceed with this action? This change cannot be undone, and it may affect your data or settings."
        cancelLabel="No, Cancel"
        confirmLabel="Yes, Confirm"
        onCancel={() => alert('Action canceled!')}
        onConfirm={() => alert('Action confirmed!')}
      />
`;

export default function AlertDialogPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);
  const handleConfirm = () => {
    // handle confirm action
    setIsDialogOpen(false);
  };
  const handleCancel = () => {
    // handle cancel action
    setIsDialogOpen(false);
  };
  return (
    <ComponentDetail
      usage={alertDialogUsage}
      code={alertDialogCode}
      component={
        <AlertDialog>
          <AlertDialogTrigger
            className="bg-indigo-600 text-white rounded-xl"
            onClick={handleOpenDialog}
          >
            Open Dialog
          </AlertDialogTrigger>
          <AlertDialogContent
            className="w-96"
            isOpen={isDialogOpen}
            onClose={handleCloseDialog}
          >
            <AlertDialogHeader>Delete Account</AlertDialogHeader>
            <p className="text-md">Are you sure you want to delete your account? This action cannot be undone and you will lose all your data.</p>

            <AlertDialogFooter
              buttonCancelClassName="bg-red-600 text-white"
              buttonConfirmClassName="bg-blue-600 text-white"
              onCancel={handleCancel}
              onConfirm={handleConfirm}
            />
          </AlertDialogContent>
        </AlertDialog>
      }
      detail="A modal dialog that interrupts the user with important content and expects a response."
      name="Alert Dialog"
    />
  );
}
