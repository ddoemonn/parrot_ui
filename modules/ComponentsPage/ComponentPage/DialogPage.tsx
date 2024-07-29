// DialogPage.tsx
import React, { useState } from 'react';

import Dialog from '@/components/Dialog';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const dialogCode = `import React, { useState } from 'react';

import Dialog from '@/components/Dialog';

export default function DialogPage() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  return (
    <div className="flex flex-col items-center justify-center">
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
}
`;

const dialogUsage = `  <div className="flex flex-col items-center justify-center">
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
`;

export default function DialogPage() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  return (
    <ComponentDetail
      usage={dialogUsage}
      code={dialogCode}
      component={
        <div className="flex flex-col items-center justify-center">
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
      }
      name="Dialog"
      detail="The Dialog component is used to display a modal dialog with a title, content, and actions. It supports opening and closing functionality."
    />
  );
}
