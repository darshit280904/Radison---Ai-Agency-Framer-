"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonTextRef = useRef<HTMLSpanElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    const title = titleRef.current;
    const button = buttonRef.current;
    const buttonText = buttonTextRef.current;

    if (!header || !button) return;
    

    const sections = ["process", "services", "benefits", "plans", "contact"];

    const animateHeader = (shrink: boolean) => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.4 } });
    
      // Step 1: Header resize
      tl.to(header, {
        width: shrink ? "40%" : "100%",
        paddingTop: shrink ? "0.3rem" : "0.5rem",
        paddingBottom: shrink ? "0.3rem" : "0.5rem",
        borderRadius: shrink ? "1.2rem" : "0.75rem",
        duration: 0.3,
      });
    
      tl.to(
        title,
        {
          opacity: shrink ? 0 : 1,
          x: shrink ? -10 : 0,
          duration: 0.4,
          pointerEvents: shrink ? "none" : "auto",
        },
        0 
      );
    

      if (shrink) {

        tl.to(
          buttonText,
          {
            opacity: 0,
            display: "none",
            duration: 0.2,
            onComplete: () => {
              gsap.to(button, {
                width: "3rem",
                duration: 0.2,
              });
            },
          },
          0 
        );
      } else {
        tl.to(button, {
          width: "10rem",
          duration: 1,
        })
        .to(
          buttonText,
          {
            opacity: 1,
            display: "block",
            duration: 0.3,
          },
          ">-0.1"
        );
      }
    };
    

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => animateHeader(true),
        onEnterBack: () => animateHeader(true),
        onLeave: () => animateHeader(false),
        onLeaveBack: () => animateHeader(false),
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <header
      ref={headerRef}
      className="flex sticky top-5 border border-white/20 rounded-lg shadow-2xl justify-between items-center p-2 px-4 m-5 max-w-7xl mx-auto w-full z-100 bg-black/30 backdrop-blur-md transition-all duration-700"
    >
      <div className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt="logo"
          width={32}
          height={32}
          priority
          className="hover:cursor-pointer"
        />
        <span
          ref={titleRef}
          className="font-extrabold hover:cursor-pointer origin-left transition-all duration-500 text-white"
        >
          Radison
        </span>
      </div>

      <nav className="hidden md:flex gap-6 font-semibold cursor-pointer select-none text-white/90">
        <a href="#process" className="hover:text-white transition">Process</a>
        <a href="#services" className="hover:text-white transition">Services</a>
        <a href="#benefits" className="hover:text-white transition">Benefits</a>
        <a href="#plans" className="hover:text-white transition">Plans</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </nav>

      <button
        ref={buttonRef}
        className="hidden md:flex items-center justify-center gap-1 bg-indigo-700 px-4 py-1.5 rounded-xl hover:bg-indigo-800 duration-500 cursor-pointer select-none overflow-hidden"
        style={{ width: "10rem" }}
      >
        <span ref={buttonTextRef} className="transition-all duration-500">
          Get In Touch
        </span>
        <span className="text-lg">🡕</span>
      </button>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden relative w-8 h-6 flex flex-col justify-between items-center group"
      >
        <span
          className={`block h-0.5 w-7 bg-white transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2.5" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-7 bg-white transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-7 bg-white transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        />
      </button>

 
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/95 text-white flex flex-col items-center justify-center gap-6 z-99 animate-slideDown">
          <Image
            src="/logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="mb-6"
          />
          <a
            href="#process"
            className="text-lg hover:text-indigo-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Process
          </a>
          <a
            href="#services"
            className="text-lg hover:text-indigo-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#benefits"
            className="text-lg hover:text-indigo-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Benefits
          </a>
          <a
            href="#plans"
            className="text-lg hover:text-indigo-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Plans
          </a>
          <a
            href="#contact"
            className="text-lg hover:text-indigo-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-xl mt-6 font-semibold transition"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch 🡕
          </button>
        </div>
      )}
    </header>
  );
}
