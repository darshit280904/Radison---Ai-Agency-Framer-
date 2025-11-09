// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function ScrollSection() {
//   const boxRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const el = boxRef.current;
//     if (!el) return;

//     gsap.to(el, {
//       scrollTrigger: {
//         trigger: el,
//         start: "top 80%", 
//         end: "bottom 20%",
//         scrub: true,
//         markers: false, 
//       },
//       y: -100,
//       opacity: 1,
//       duration: 1.5,
//       ease: "power2.out",
//     });


//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
//       <h1 className="text-4xl font-bold mb-8">ScrollTrigger Example</h1>
//       <div
//         ref={boxRef}
//         className="w-40 h-40 bg-indigo-600 opacity-50 rounded-2xl"
//       ></div>
//     </div>
//   );
// }
