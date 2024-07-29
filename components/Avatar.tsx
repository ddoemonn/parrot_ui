interface AvatarProps {
  src?: string;
  alt?: string;
  className?: string;
  radius?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children?: React.ReactNode;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, radius = 'md', children, className }) => {
  const baseClasses = 'flex items-center justify-center border border-gray-300';
  const radiusClasses =
    radius === 'full' ? 'rounded-full' : radius === 'sm' ? 'rounded-sm' : radius === 'md' ? 'rounded-md' : radius === 'lg' ? 'rounded-lg' : 'rounded-xl';

  return (
    <div className={`${baseClasses} ${className} ${radiusClasses} w-16 h-16`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={` ${radiusClasses} w-full h-full object-cover`}
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
