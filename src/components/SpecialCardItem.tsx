import React from "react";
import Image from "next/image";

interface SpecialCardItemProps {
  image: string;
  title: string;
  description: string;
}

const SpecialCardItem: React.FC<SpecialCardItemProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="border border-white/20 rounded-xl p-6 shadow-inner hover:shadow-md transition">
      <Image
        src={image}
        alt={title}
        width={500}
        height={200}
        className="rounded-lg mb-4 object-contain"
      />
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default SpecialCardItem;
