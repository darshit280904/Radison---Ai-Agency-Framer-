"use client";

import Image from "next/image";
import { Plan } from "../data/pricingData";

export default function Plans({
  title,
  price,
  description,
  features,
  buttonText,
  image,
}: Plan) {
  return (
    <div className="w-full">
      <div
        className="
          bg-linear-to-br from-black to-indigo-950 
          border border-white/20 
          text-white 
          rounded-2xl 
          shadow-lg 
          p-6 
          sm:p-8 
          transition-transform 
          duration-300 
          hover:scale-[1.03] 
          hover:shadow-indigo-800/30 
          select-none "
      >

        <div className="flex items-center mb-6">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 mr-3">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
        </div>

        <p className="text-3xl sm:text-4xl font-bold mb-2">
          {price}
          <span className="text-sm sm:text-base font-normal text-gray-400 ml-1">
            /month
          </span>
        </p>

        <p className="text-gray-400 text-sm sm:text-base mb-6">
          {description}
        </p>

        <button
          className="
            w-full 
            py-2.5 
            sm:py-3 
            bg-indigo-600 
            hover:bg-indigo-700 
            text-sm 
            sm:text-base 
            font-medium 
            rounded-md 
            transition 
            duration-300 
            focus:outline-none 
            focus:ring-2 
            focus:ring-indigo-400/50 "
        >
          {buttonText}
        </button>

        <ul className="text-gray-300 mt-6 space-y-2 text-sm sm:text-base">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-start leading-relaxed">
              <span className="text-indigo-400 mr-2">✔</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
