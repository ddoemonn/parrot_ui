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
    <div className={` rounded-xl overflow-hidden shadow-lg ${className}`}>
      <img
        className="w-full"
        src={imageUrl}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={linkUrl}
          className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
