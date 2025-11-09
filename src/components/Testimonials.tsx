"use client";

import React from "react";
import Image from "next/image";

const Testimonials = () => {
  const testimonialsTop = [
    {
      message:
        "Radison transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!",
      image: "/testimonials1.png",
      name: "Dean Watson",
      professional: "Managing Director • Farmland",
    },
    {
      message:
        "Radison provided game-changing insights that helped us optimize processes and scale operations fast.",
      image: "/testimonials2.png",
      name: "Emily Zhang",
      professional: "CEO • Futuresync",
    },
    {
      message:
        "Radison’s AI tools revolutionized how we work, saving time and driving our productivity forward.",
      image: "/testimonials3.png",
      name: "James Carter",
      professional: "Marketing Director • Innolystic",
    },
  ];

  const testimonialsBottom = [
    {
      message:
        "Working with Radison has been seamless. Their solutions are both innovative and highly effective.",
      image: "/testimonials1.png",
      name: "Liam Walker",
      professional: "Product Manager • Brightpath",
    },
    {
      message:
        "Thanks to Radison, we’ve achieved incredible growth by automating tasks and improving accuracy.",
      image: "/testimonials2.png",
      name: "Miguel Torres",
      professional: "IT Consultant • Alphaedge",
    },
    {
      message:
        "The team at Radison delivered outstanding results, improving our efficiency beyond what we imagined!",
      image: "/testimonials3.png",
      name: "Priya Sharma",
      professional: "Founder • NexGen",
    },
  ];

  const allTestimonials = [...testimonialsTop, ...testimonialsBottom];

  return (
    <div className="mb-32 px-4 sm:px-6 lg:px-8 text-white" id="testimonials">
      <div className="flex justify-center mb-5">
        <p className="font-bold border border-white/20 text-white/50 p-1.5 rounded-xl px-4 text-center select-none">
          Testimonials
        </p>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          Trusted by satisfied clients
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Discover how we’ve driven growth and innovation.
        </p>
      </div>


      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 
          max-w-7xl 
          mx-auto
        "
      >
        {allTestimonials.map((item, index) => (
          <div
            key={index}
            className="
              p-6 
              sm:p-8 
              rounded-2xl 
              border border-white/20 
              shadow-lg 
              bg-linear-to-tr from-black to-indigo-950
              transition-transform duration-300 
              hover:scale-[1.02]
              hover:shadow-indigo-800/30
              flex flex-col justify-between
            "
          >
            <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
              “{item.message}”
            </p>
            <div className="flex items-center">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 mr-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  {item.professional}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
