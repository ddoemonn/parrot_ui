import Badge from '@/components/Badge';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const badgeCode = `interface BadgeProps {
  variant?: 'light' | 'filled' | 'outline';
  color?: 'red' | 'blue' | 'green' | 'yellow';
  radius?: 'sm' | 'md' | 'lg' | 'full';
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ variant = 'light', color = 'blue', radius = 'md', children }) => {
  const baseStyles = 'inline-block px-3 py-1 text-sm font-medium max-h-10 flex items-center';

  const variantStyles = {
    light: \`bg-\${color}-100 text-\${color}-800\`,
    filled: \`bg-\${color}-600 text-white\`,
    outline: \`border border-\${color}-600 text-\${color}-600\`,
  };

  const radiusStyles = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  const combinedStyles = \`\${baseStyles} \${variantStyles[variant]} \${radiusStyles[radius]} transition-colors duration-300\`;

  return <span className={combinedStyles}>{children}</span>;
};

export default Badge;

const bgBlue100 = 'bg-blue-100';
const bgGreen100 = 'bg-green-100';
const bgRed100 = 'bg-red-100';

const borderBlue600 = 'border-blue-600';
const borderGreen600 = 'border-green-600';
const borderRed600 = 'border-red-600';

const textBlue600 = 'text-blue-600';
const textGreen600 = 'text-green-600';
const textRed600 = 'text-red-600';

const textBlue800 = 'text-blue-800';
const textGreen800 = 'text-green-800';
const textRed800 = 'text-red-800';

const bgBlue600 = 'bg-blue-600';
const bgGreen600 = 'bg-green-600';
const bgRed600 = 'bg-red-600';
`;

const badgeUsage = `<div className="flex gap-10 w-full items-center mx-auto justify-center">
          <Badge
            variant="light"
            color="red"
            radius="lg"
          >
            Light Badge
          </Badge>
          <Badge
            variant="filled"
            color="blue"
            radius="md"
          >
            Filled Badge
          </Badge>
          <Badge
            variant="outline"
            color="green"
            radius="lg"
          >
            Outline Badge
          </Badge>
        </div>
`;

export default function BadgePage() {
  return (
    <ComponentDetail
      usage={badgeUsage}
      code={badgeCode}
      component={
        <div className="flex gap-10 w-full items-center mx-auto justify-center">
          <Badge
            variant="light"
            color="red"
            radius="lg"
          >
            Light Badge
          </Badge>
          <Badge
            variant="filled"
            color="blue"
            radius="md"
          >
            Filled Badge
          </Badge>
          <Badge
            variant="outline"
            color="green"
            radius="lg"
          >
            Outline Badge
          </Badge>
        </div>
      }
      detail="Displays a badge or a component that looks like a badge."
      name="Badge"
    />
  );
}
