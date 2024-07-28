import AlertDialog from '@/components/AlertDialog';

export default function AlertDialogPage() {
  return (
    <div className="p-6">
      <AlertDialog
        triggerButtonLabel="Open Alert Dialog"
        title="Confirm Action"
        message="Are you sure you want to proceed with this action? This change cannot be undone, and it may affect your data or settings."
        cancelLabel="No, Cancel"
        confirmLabel="Yes, Confirm"
        onCancel={() => alert('Action canceled!')}
        onConfirm={() => alert('Action confirmed!')}
      />
    </div>
  );
}
