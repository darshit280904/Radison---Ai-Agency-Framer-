"use client";
import { useState } from "react";
import Image from "next/image";

const faqData = [
  {
    question: "What are AI development services?",
    message:
      "At their core, Artificial Intelligence (AI) development services revolve around designing and tailoring artificial intelligence solutions to meet specific business needs. It’s akin to architects and builders coming together; while the fundamental principles remain consistent, the final outcome is custom-built to fit an individual’s requirements. So, when we discuss AI development, we’re delving into specialized domains—like machine learning, natural language processing, or computer vision—each designed to address unique challenges in analytics, communication, or data interpretation.",
  },
  {
    question: "What types of processes can be automated using AI?",
    message:
      "AI can automate a wide range of tasks, from data entry and customer support to decision-making and workflow optimization. We tailor solutions based on your business needs, whether it’s automating routine operations or more complex tasks.",
  },
  {
    question: "How long does it take to implement AI automation?",
    message:
      "The timeline varies depending on the complexity of your business needs. On average, it takes a few weeks for smaller projects, while more complex implementations can take several months. We’ll provide a detailed timeline during our consultation.",
  },
  {
    question: "Will AI automation disrupt my current operations?",
    message:
      "We aim to minimize any disruption to your business. Our team works closely with you to ensure the integration is seamless, and we handle the entire process, including testing and troubleshooting, to avoid downtime.",
  },
  {
    question: "How much does AI automation cost?",
    message:
      "The cost depends on the complexity of the solution and the scope of automation required. We offer flexible pricing options tailored to your business needs, which will be discussed during the initial consultation.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section className="mb-32 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="inline-block font-bold border border-white/20 text-white/50 px-3 py-1.5 rounded-xl text-sm sm:text-base">
            FAQs
          </p>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            We’re here to help
          </h2>

          <p className="mt-3 text-sm sm:text-base text-white/50">
            FAQs designed to provide the information you need.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col items-center space-y-3 select-none">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[90%] md:w-[75%] lg:w-[60%] border border-white/20 bg-linear-to-bl from-black to-indigo-950 rounded-2xl p-4 sm:p-6 cursor-pointer transition-all duration-300 hover:bg-black/30"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium text-white text-sm sm:text-base md:text-lg">
                  {item.question}
                </p>
                <span className="text-base sm:text-lg select-none">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </div>

              {activeIndex === index && (
                <p className="text-gray-300 mt-3 leading-relaxed text-xs sm:text-sm md:text-base">
                  {item.message}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center gap-2 font-bold border border-white/20 text-white/50 px-3 py-1.5 rounded-xl text-sm sm:text-base">
            <Image
              src="/logo.svg"
              alt="logo"
              width={16}
              height={16}
              priority
            />
            Radison
          </div>

          <div className="mt-12 space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Let’s talk about
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              your next big move
            </h1>
          </div>

          <p className="mt-4 text-white/50 text-sm sm:text-base">
            Hop on a call with us to see how our services can accelerate your growth.
          </p>

          <div className="mt-8">
            <button className="bg-indigo-600 px-4 py-2 sm:px-6 sm:py-2.5 rounded-xl font-medium text-sm sm:text-base transition-all duration-200 hover:bg-indigo-700">
              Schedule a quick call <span>🡕</span>
            </button>

            <div className="mt-3 flex justify-center text-sm sm:text-base text-white/50 gap-1">
              <span>It’s</span> <span className="font-bold text-white">Free</span>
            </div>
          </div>
        </div>

      </section>
      <div className="h-0.5 w-full bg-white/20"></div>
    </>
  );
};

export default Faqs;
