// src/app/components/ProjectCard.tsx
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function ProjectCard({ title, description, link, imageSrc, imageAlt }: ProjectCardProps) {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-2xl shadow-lg p-4 max-w-sm cursor-pointer hover:scale-105 transform transition-transform flex flex-col">
      {imageSrc && (
        <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      )}

      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700 mb-4 flex-grow">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 font-semibold hover:underline"
        >
          Ver proyecto →
        </a>
      )}
    </div>
  );
}
