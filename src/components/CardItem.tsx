import React from "react";
import Image from "next/image";

interface CardItemProps {
  image: string;
  title: string;
  description: string;
}

const CardItem: React.FC<CardItemProps> = ({ image, title, description }) => {
  return (
    <div className="border border-white/20 rounded-xl p-6 h-100 shadow-md hover:shadow-lg transition">
      <Image
        src={image}
        alt={title}
        width={350}
        height={200}
        className="rounded-lg mb-4 object-contain"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default CardItem;
