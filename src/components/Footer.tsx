"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-black to-indigo-950 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.svg"
              alt="logo"
              width={40}
              height={40}
              priority
            />
            <h2 className="text-2xl font-bold">Radison</h2>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-sm">
            Your trusted partner in AI solutions, creating smarter systems for
            smarter businesses.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-3">
            {["[in]", "𝕏", "🅾", "ⓕ", "@"].map((icon, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-md text-sm text-gray-300 cursor-pointer transition bg-gray-800 hover:bg-gray-700 hover:text-white"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Sections</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#process" className="hover:text-white">
                Process
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="./Benifits" className="hover:text-white">
                Benefits
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Plans
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Pages</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Coming soon
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                404
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-white/20"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/50">
        <p>Use template</p>
        <p className="text-center">
          Visioned and Crafted by{" "}
          <span className="font-bold text-white">Kanishk Dubey</span>
        </p>
        <p>© All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
