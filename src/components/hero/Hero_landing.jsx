"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const FEATURES = [
  {
    text: "Cashback for returning customers",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    text: "Build in tools for planning",
    icon: <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />,
  },
  {
    text: "24/7 instant booking",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
  {
    text: "Only 11 min from CPH Airport",
    icon: (
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    ),
  },
];

const FeatureIcon = ({ icon, size = "h-5 w-5 md:h-6 md:w-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${size} text-lime mb-1`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {icon}
  </svg>
);

const FeatureCard = ({ feature }) => (
  <div className="bg-black/20 text-white border-2 rounded-xl flex flex-col items-center justify-center p-2 md:p-4 w-[100px] h-[105px] md:w-[110px] md:h-[110px] transform hover:scale-105 hover:-translate-y-1 transition duration-300 ease-in-out">
    <FeatureIcon icon={feature.icon} />
    <p className="text-center text-[10px] md:text-xs">{feature.text}</p>
  </div>
);

function Hero() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  const openSearch = useCallback(() => setIsSearchOpen(true), []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative h-[95vh] -mt-[75px]">
      <div className="relative w-full h-full">
        <Image
          src="/img/hero.webp"
          alt="Hero Image"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <div className="flex flex-col items-center md:flex-row md:justify-center w-full">
          <div className="text-4xl md:text-h1 font-bold md:mr-4 flex flex-col justify-start items-center md:items-start mb-6 md:mb-0">
            <span>Keeping film rental</span>
            <div className="w-full flex justify-center md:justify-end">
              <span className="text-lime">Simple.</span>
            </div>
          </div>

          <div
            ref={searchRef}
            className={`flex items-center bg-white text-black overflow-hidden transition-all duration-500 ease-in-out ${
              isSearchOpen
                ? "w-full md:w-96 h-[45px] rounded-full"
                : "w-[100px] md:w-[130px] h-[60px] md:h-[100px] rounded-full md:rounded-l-none md:rounded-r-full"
            }`}
            onClick={openSearch}
          >
            <input
              type="text"
              placeholder="Search..."
              className={`p-2 outline-none transition-all duration-300 ${
                isSearchOpen ? "opacity-100 w-full pl-4" : "opacity-0 w-0"
              }`}
            />
            <div
              className={`flex items-center justify-center transition-all duration-500 ease-in-out ${isSearchOpen ? "p-2" : "w-full h-full"}`}
            >
              <FaSearch
                className={`text-black transition-all duration-500 ease-in-out ${isSearchOpen ? "text-xl" : "text-2xl md:text-3xl md:-translate-x-2"}`}
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 left-0 right-0">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-4">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
