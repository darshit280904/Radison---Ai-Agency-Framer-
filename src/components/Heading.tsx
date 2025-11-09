"use client";
import Image from "next/image";

const logos = [
  {
    text: "45-Degrees",
    src: "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66eeb030dcea757c29ff2b9e_45%2520Degrees.svg",
    alt: "45 Degrees",
  },
  {
    text: "LeapYear",
    src: "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66eeb0448f364dd4594954e1_Leapyear.svg",
    alt: "Leapyear",
  },
  {
    text: "QuartzAI",
    src: "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66eeb04e3eb418ef941f231c_QuartzAI.svg",
    alt: "QuartzAI",
  },
  {
    text: "Wildcrafted",
    src: "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66eeb0563901a7715c47104d_Wildcrafted.svg",
    alt: "Wildcrafted",
  },
  {
    text: "Pollinate",
    src: "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66eeb04c3901a7715c4708b1_Pollinate.svg",
    alt: "Pollinate",
  },
];

const Heading = () => {
  return (
    <div className="mt-10 sm:mt-16 md:mt-20">
      <section className="relative overflow-hidden bg-black text-white px-4 sm:px-6 md:px-8">
        <div className="relative z-10 mt-16 md:mt-24 mb-20 md:mb-40">
          {/* Top heading */}
          <div className="flex justify-center">
            <div className="flex items-center justify-center font-semibold border border-white/20 w-full sm:w-80 md:w-96 rounded p-2 select-none text-sm sm:text-base md:text-lg">
              <Image
                className="mr-2"
                src="/logo.svg"
                alt="logo"
                width={18}
                height={18}
                priority
              />
              Radison - AI Automation Partner
            </div>
          </div>

          {/* Hero Title */}
          <div className="mt-10 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold select-none leading-snug">
              Transforming workflows with AI
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold select-none leading-snug">
              powered Automation
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mt-5 sm:mt-6 text-center text-white/70 text-sm sm:text-base">
            <p>Experience the future of business with intelligent, scalable</p>
            <p>automation solutions tailored to your needs</p>
          </div>

          {/* Buttons */}
          <div className="mt-8 sm:mt-10 flex justify-center flex-wrap gap-3 sm:gap-5">
            <button className="bg-indigo-700 hover:bg-indigo-800 px-5 py-2 rounded-xl cursor-pointer select-none transition text-sm sm:text-base">
              Our Services <span>🡕</span>
            </button>
            <button className="border border-white/20 hover:bg-white/10 px-5 py-2 rounded-xl cursor-pointer transition text-sm sm:text-base">
              See Plans
            </button>
          </div>

          {/* ✅ Logo Marquee Animation */}
          <div className="relative mt-12 sm:mt-16 max-w-full sm:max-w-2xl mx-auto text-teal-50">
            {/* Fading edges */}
            <div className="absolute inset-x-0 top-0 h-16 z-10 bg-linear-to-r from-black via-transparent to-black pointer-events-none"></div>

            {/* Scrolling logos */}
            <div className="flex overflow-hidden select-none">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  aria-hidden={i === 1}
                  className="flex animate-scroll-left shrink-0 min-w-full will-change-transform"
                >
                  {logos.map((logo, idx) => (
                    <div
                      key={`${idx}-${logo.alt}`}
                      className="px-6 sm:px-8 md:px-10 flex items-center justify-center"
                    >
                      <div className="text-lg sm:text-xl md:text-2xl font-semibold whitespace-nowrap">
                        {logo.text}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SVG Background Gradients */}
        <div className="absolute bottom-0 left-0 w-full blur-3xl z-0 opacity-70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1085 184"
            className="w-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="indigoBlackGradient"
                x1="100%"
                y1="00%"
                x2="00%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#000000" />
                <stop offset="100%" stopColor="#312e81" />
              </linearGradient>
            </defs>
            <path
              d="M 77 1 C 77 1 702.761 14.525 822 48.5 C 941.239 82.475 1084 169 1084 169 L 934.5 133
             C 809 106.5 431.5 66 218 66 C 69 66 1 1 1 1 Z"
              fill="url(#indigoBlackGradient)"
            />
          </svg>
        </div>

        <div className="absolute top-40 sm:top-60 left-0 w-full blur-3xl opacity-70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1085 184"
            className="w-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="indigoBlackGradientBottom"
                x1="00%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#312e81" />
                <stop offset="80%" stopColor="#000000" />
              </linearGradient>
            </defs>

            <path
              d="M 76 0 C 76 0 701.761 13.525 821 47.5 C 940.239 81.475 1083 168 1083 168 L 933.5 132.5 L 821 106 L 579.5 95 L 277 132.5 L 101 154.5 L 0 182 L 0 0 Z"
              transform="translate(1 1) rotate(180 541.5 91)"
              fill="url(#indigoBlackGradientBottom)"
            />
          </svg>
        </div>
      </section>

      {/* Bottom section - Who we are */}
      <div className="mt-10 sm:mt-16 px-4 text-center">
        <div className="flex justify-center">
          <p className="font-semibold border border-white/20 p-1.5 text-white/50 rounded-xl w-fit text-sm sm:text-base select-none">
            Who We Are
          </p>
        </div>

        <div className="mt-6 text-2xl sm:text-3xl md:text-4xl leading-snug font-semibold">
          <h2>We are Radison, we help founders like you to</h2>
          <h2>automate their day-to-day business operations</h2>
          <h2>with the help of AI</h2>
        </div>
      </div>
    </div>
  );
};

export default Heading;
