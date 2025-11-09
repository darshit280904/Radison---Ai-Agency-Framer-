"use client";

import React from "react";
import Image from "next/image";

export interface Benefit {
  image: string;
  heading: string;
  paragraph: string;
}

interface BenefitsProps {
  data: Benefit[];
}

const Benefits: React.FC<BenefitsProps> = ({ data }) => {
  return (
    <section
      id="benefits"
      className="relative w-full py-16 sm:py-20 md:py-24 bg-transparent text-white"
    >
      <div className="text-center mb-12 px-4">
        <div className="flex justify-center mb-5">
          <h2 className="font-bold border border-white/20 text-white/50 px-3 py-1.5 rounded-xl select-none">
            Benefits
          </h2>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          Maximize efficiency and impact
        </h2>
        <p className="text-sm sm:text-base text-white/50">
          Discover the key benefits of partnering with us.
        </p>
      </div>

      {/* Benefits Grid */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 
          sm:gap-8 
          lg:gap-10 
          max-w-6xl 
          mx-auto 
          px-4
        "
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="
              border border-white/20 
              shadow-lg 
              rounded-2xl 
              p-6 
              sm:p-8 
              bg-linear-to-tr from-black to-indigo-950 
              transition-transform 
              duration-300 
              hover:scale-[1.03]
              hover:shadow-indigo-800/20
            "
          >
            <div className="flex justify-start mb-4">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <Image
                  src={item.image}
                  alt={item.heading}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {item.heading}
            </h3>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              {item.paragraph}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
