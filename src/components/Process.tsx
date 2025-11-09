"use client";

import Image from "next/image";

type ProcessItem = {
  image: string;
  heading: string;
  paragraph: string;
};

const processData: ProcessItem[] = [
  {
    image: "/Process1.png",
    heading: "Discovery & Analysis",
    paragraph:
      "We dive deep into your needs, exploring ideas and defining strategies for long-term success.",
  },
  {
    image: "/Process2.png",
    heading: "Development & Test",
    paragraph:
      "We craft tailored solutions for your goals and rigorously test them for top-notch reliability.",
  },
  {
    image: "/Process3.png",
    heading: "Launch & Maintain",
    paragraph:
      "We deploy your solution seamlessly and ensure its continued performance with ongoing care.",
  },
];

export default function Process() {
  return (
    <section className="py-16 sm:py-20 px-4 text-center text-white" id="process">
      <div className="flex justify-center mb-5">
        <a
          href="#"
          className="font-semibold border border-white/20 text-white/50 px-3 py-1.5 rounded-xl select-none text-sm sm:text-base"
        >
          Process
        </a>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Your path to excellence
      </h2>

      <p className="text-white/50 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
        A simple, effective approach to deliver excellence.
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {processData.map((item, index) => (
          <div
            key={index}
            className="border border-white/20 bg-linear-to-b from-transparent to-black/20 shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
          >
            <Image
              src={item.image}
              alt={item.heading}
              width={350}
              height={200}
              className="rounded-lg mb-6 object-contain w-full h-auto"
            />
            <div className="flex flex-col text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {item.heading}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {item.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
