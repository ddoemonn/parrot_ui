import CopyButton from '@/components/CopyButton';

const CopyButtonExample: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Copy Button Example</h1>
      <CopyButton text="This is the text to be copied!" />
    </div>
  );
};

export default CopyButtonExample;
