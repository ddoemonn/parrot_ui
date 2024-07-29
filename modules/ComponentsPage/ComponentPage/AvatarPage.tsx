import { StarIcon } from '@radix-ui/react-icons';

import Avatar from '@/components/Avatar';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';

const avatarCode = `
interface AvatarProps {
  src?: string;
  alt?: string;
  children?: React.ReactNode;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, children, className }) => {
  const baseClasses = 'flex items-center justify-center';

  return (
    <div className={\`\${baseClasses} \${className} w-16 h-16\`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={\`\${className} w-full h-full object-cover\`}
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-white">
          {children ? (
            <span className="w-full h-full flex items-center justify-center">{children}</span>
          ) : (
            <span className="text-2xl w-full text-center font-bold">?</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Avatar;
`;

const avatarUsage = `<div className="flex justify-between w-full">
      <Avatar
        src="https://img.freepik.com/premium-photo/3d-rendering-half-body-bearded-male-character-wearing-eyeglasses-red-flannel_477250-77.jpg?w=1380"
        alt="it's me"
      />

      <Avatar className="rounded-xl bg-gray-200" />

      <Avatar className="bg-cyan-500 rounded-lg">MK</Avatar>

      <Avatar className="bg-blue-500 rounded-xl">
        <StarIcon
          color="yellow"
          width={35}
          height={35}
        />
      </Avatar>
    </div>
`;

export default function AlertPage() {
  return (
    <ComponentDetail
      usage={avatarUsage}
      code={avatarCode}
      component={
        <div className="flex justify-center gap-10 w-full">
          <Avatar
            src="https://img.freepik.com/premium-photo/3d-rendering-half-body-bearded-male-character-wearing-eyeglasses-red-flannel_477250-77.jpg?w=1380"
            alt="it's me"
            radius="xl"
          />

          <Avatar
            radius="full"
            className="bg-red-700"
          />

          <Avatar
            className="bg-blue-500 text-xl"
            radius="xl"
          >
            MK
          </Avatar>

          <Avatar
            className="bg-indigo-500"
            radius="full"
          >
            <StarIcon
              color="blue"
              width={35}
              height={35}
            />
          </Avatar>
        </div>
      }
      detail="An image element with a fallback for representing the user."
      name="Avatar"
    />
  );
}
