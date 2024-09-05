import { ReactElement, ReactNode } from 'react';

import { Cross2Icon } from '@radix-ui/react-icons';

import Button from './Button';

interface AlertDialogProps {
  children: ReactElement<AlertDialogTriggerProps | AlertDialogContentProps | AlertDialogHeaderProps | AlertDialogFooterProps>[];
}

interface AlertDialogTriggerProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

interface AlertDialogContentProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

interface AlertDialogHeaderProps {
  children: ReactNode;
}

interface AlertDialogFooterProps {
  onCancel: () => void;
  onConfirm: () => void;
  cancelLabel?: string;
  confirmLabel?: string;
  buttonConfirmClassName?: string;
  buttonCancelClassName?: string;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({ children }) => {
  return <div id="alert-dialog">{children}</div>;
};

export const AlertDialogTrigger: React.FC<AlertDialogTriggerProps> = ({ children, onClick, className }) => {
  return (
    <Button
      id="alert-dialog-trigger"
      onClick={onClick}
      className={className}
    >
      {children}
    </Button>
  );
};

export const AlertDialogContent: React.FC<AlertDialogContentProps> = ({ isOpen, onClose, children, className }) => {
  return (
    isOpen && (
      <div
        id="alert-dialog-content"
        className="fixed text-md inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={onClose}
      >
        <div className={`${className} relative bg-white flex flex-col items-end py-6 px-6 rounded-lg shadow-lg max-w-xl mt-0`}>
          <div className="inline-flex">
            <Button
              onClick={onClose}
              className="!p-0 !mr-0 absolute right-5"
            >
              <Cross2Icon
                width={20}
                height={20}
              />
            </Button>
          </div>
          <div className="flex-1 w-full">{children}</div>
        </div>
      </div>
    )
  );
};

export const AlertDialogHeader: React.FC<AlertDialogHeaderProps> = ({ children }) => {
  return (
    <h1
      id="alert-dialog-header"
      className="text-xl font-semibold mb-4"
    >
      {children}
    </h1>
  );
};

export const AlertDialogFooter: React.FC<AlertDialogFooterProps> = ({
  onCancel,
  onConfirm,
  cancelLabel = 'Cancel',
  confirmLabel = 'Confirm',
  buttonCancelClassName,
  buttonConfirmClassName,
}) => {
  return (
    <div
      id="alert-dialog-footer"
      className="flex justify-end gap-4 mt-5"
    >
      <Button
        className={buttonCancelClassName}
        onClick={onCancel}
      >
        {cancelLabel}
      </Button>
      <Button
        className={buttonConfirmClassName}
        onClick={onConfirm}
      >
        {confirmLabel}
      </Button>
    </div>
  );
};
