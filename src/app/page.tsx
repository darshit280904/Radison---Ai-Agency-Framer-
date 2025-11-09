"use client";

import Header from "../components/Header";
import Heading from "../components/Heading";
import Process from "../components/Process";
import Services from "../components/Services";
import Benifits, { Benefit } from "../components/Benifits";
import PricingSection from "../components/PricingSection";
import Testimonials from "../components/Testimonials";
import Contacts from "../components/Contacts";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import { useEffect } from "react";
// import ScrollSection from "../components/ScrollSection";
// import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  // Smooth scroll for navbar links 
  useEffect(() => {
    const links = document.querySelectorAll("[data-scroll]");

    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLElement;
      const sectionId = target.getAttribute("data-scroll");
      const section = document.getElementById(sectionId!);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    links.forEach((link) => link.addEventListener("click", handleScroll));
    return () => links.forEach((link) => link.removeEventListener("click", handleScroll));
  }, []);

  const benefits: Benefit[] = [
    {
      image: "/Benifitss1.png",
      heading: "Cost reduction",
      paragraph:
        "Optimize business processes and streamline operations to significantly minimize costs and maximize overall efficiency.",
    },
    {
      image: "/Benifitss2.png",
      heading: "Improved outcomes",
      paragraph:
        "Leverage powerful data-driven insights and innovative strategies to enhance business performance and achieve superior outcomes.",
    },
    {
      image: "/Benifitss3.png",
      heading: "Increased productivity",
      paragraph:
        "Enhance group performance and output by automating redundant tasks, refining processes, and speeding up business functions.",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen ">
      {/* <ScrollSection /> */}
      {/* <SmoothScroll></SmoothScroll> */}
      <Header />
        <Heading />
        <Process />
        <Services />
        <Benifits data={benefits} />
        <PricingSection />
        <Testimonials />
        <Contacts />
        <Faqs />
      <Footer />
    </main>
  );
}
