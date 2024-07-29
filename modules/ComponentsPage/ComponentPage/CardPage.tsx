import Card from '@/components/Card';
import ComponentDetail from '@/components/websiteComponents/ComponentDetail';
const cardCode = `interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, linkUrl, className }) => {
  return (
    <div className={\`rounded-xl overflow-hidden shadow-lg \${className}\`}>
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
`;

const calendarUsage = `<div className="p-10">
  <Card
    title="Sample Card"
    description="This is a description of the sample card. It gives more details about the content."
    imageUrl="https://via.placeholder.com/400"
    linkUrl="#"
    className="w-56"
  />
</div>`;

export default function CardPage() {
  return (
    <ComponentDetail
      usage={calendarUsage}
      code={cardCode}
      component={
        <Card
          title="Sample Card"
          description="This is a description of the sample card. It gives more details about the content."
          imageUrl="https://via.placeholder.com/400"
          linkUrl="#"
          className="w-56"
        />
      }
      name="Card"
      detail="A card component that displays an image, title, description, and a link."
    />
  );
}
