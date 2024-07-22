import React, { useState } from 'react';

import Dialog from '@/components/Dialog';

const DialogExample: React.FC = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <button
        onClick={openDialog}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Open Dialog
      </button>
      <Dialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        title="My Dialog"
      >
        <p>This is a sample dialog content. You can put any content here.</p>
      </Dialog>
    </div>
  );
};

export default DialogExample;
