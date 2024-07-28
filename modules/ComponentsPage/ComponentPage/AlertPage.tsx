import { InfoCircledIcon } from '@radix-ui/react-icons';

import Alert from '@/components/Alert';

export default function AlertPage() {
  const icon = (
    <InfoCircledIcon
      width={18}
      height={18}
    />
  );
  return (
    <div className="w-1/2 p-20">
      <Alert
        variant="filled"
        color="red"
        title="Alert title"
        icon={icon}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.
      </Alert>
    </div>
  );
}
