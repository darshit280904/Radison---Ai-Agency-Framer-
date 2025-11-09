"use client";

import React from "react";
import CardItem from "./CardItem";
import SpecialCardItem from "./SpecialCardItem";

const Services = () => {
  const topCards = [
    {
      image: "/Services1.png",
      title: "AI Solutions",
      description: "We provide modern AI tools for automation and insights.",
    },
    {
      image: "/Services2.png",
      title: "Cloud Integration",
      description: "Seamlessly connect your business to cloud services.",
    },
    {
      image: "/Services3.png",
      title: "Web Development",
      description: "Build fast, scalable, and modern web applications.",
    },
  ];

  const bottomCards = [
    {
      image: "/Services4.png",
      title: "Data Analytics",
      description: "Turn your data into actionable business insights.",
    },
    {
      image: "/Services5.png",
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced security.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 text-center" id="services">
      {/* Section Label */}
      <div className="flex justify-center mb-5">
        <h2 className="font-bold border border-white/20 text-white/50 p-1.5 rounded-xl w-fit select-none">
          Services
        </h2>
      </div>

      {/* Section Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 px-4">
        Innovative services for growth
      </h2>

      {/* Section Subtext */}
      <p className="text-white/50 max-w-2xl mx-auto px-4 mb-10 sm:mb-14">
        Tailored solutions to streamline, innovate, and grow.
      </p>

      {/* Cards Container */}
      <div className="flex flex-col items-center gap-12  sm:gap-14 px-4 md:px-6 lg:px-10">
        {/* Top Grid (3 Cards) */}
        <div
          className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 
          w-full 
          max-w-6xl
        "
        >
          {topCards.map((item, index) => (
            <CardItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Bottom Grid (2 Special Cards) */}
        <div
          className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          gap-6 
          w-full 
          max-w-5xl
        "
        >
          {bottomCards.map((item, index) => (
            <SpecialCardItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
