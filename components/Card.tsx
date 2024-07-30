import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, linkUrl, className }) => {
  return (
    <div className={` rounded-xl flex flex-col items-end overflow-hidden shadow-lg ${className}`}>
      <img
        className="w-full max-h-56 "
        src={imageUrl}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-md ">{description}</p>
      </div>
      <div className="p-2">
        <a
          href={linkUrl}
          className="inline-flex bg-indigo-600 px-3 text-white rounded-full p-1 text-xs font-semibold"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
