import Button from '@/components/Button';
import Tooltip from '@/components/Tooltip';

const TooltipExample: React.FC = () => {
  return (
    <div className="p-10">
      <Tooltip text="This is a tooltip!">
        <Button
          label="Hover me"
          variant="secondary"
        />
      </Tooltip>
    </div>
  );
};

export default TooltipExample;
