"use client";

import React from "react";
import Image from "next/image";
import { FaFolderOpen } from "react-icons/fa";
import Link from "next/link";

function Card({
  title = "Sony Fx6",
  description = "This is a placeholder description.",
  buttonText = "Button Text",
  imageSrc = "/img/sony_fx6.jpg",
  borderWidth = "border",
  borderRadius = "rounded-xl",
  className = "",
}) {
  return (
    <article
      className={`${className} ${borderWidth} ${borderRadius} border-darkgrey shadow-md overflow-hidden gap-4 relative w-full max-w-7xl flex flex-row h-72`}
    >
      <div className="w-1/2 overflow-hidden cursor-pointer -mr-6 relative">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, 300px"
          className="object-cover"
        />
      </div>

      <div className="w-1/2 flex flex-col justify-end py-6 px-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="text-p text-white">{description}</p>
          <Link href="/pages/products" className="inline-block">
            <button className="bg-lime text-black px-8 py-3 rounded-xl text-p relative overflow-hidden transition-all duration-500 border-2 border-lime group hover:bg-transparent">
              <span className="relative z-10">{buttonText}</span>
            </button>
          </Link>
        </div>
        <div className="absolute top-3 right-3 cursor-pointer hover:scale-110 transition-transform">
          <FaFolderOpen size={30} className="text-lime" />
        </div>
      </div>
    </article>
  );
}

export default Card;
