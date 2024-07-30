interface AvatarProps {
  src?: string;
  alt?: string;
  className?: string;
  radius?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children?: React.ReactNode;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, radius = 'md', children, className }) => {
  const radiusClasses =
    radius === 'full' ? 'rounded-full' : radius === 'sm' ? 'rounded-sm' : radius === 'md' ? 'rounded-md' : radius === 'lg' ? 'rounded-lg' : 'rounded-xl';

  return (
    <div className={` ${className} ${radiusClasses} flex items-center justify-center border border-gray-300 w-16 h-16`}>
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
            <img
              src="/empty_avatar.png"
              alt={alt}
              className={` ${radiusClasses} w-full h-full object-cover`}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Avatar;
