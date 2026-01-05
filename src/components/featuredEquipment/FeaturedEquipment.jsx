import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFolderOpen } from "react-icons/fa";

const EQUIPMENT = [
  {
    id: 1,
    title: "Sony FX6",
    description: "Full-frame cinema camera",
    price: "500 DKK",
    imageSrc: "/img/sony_fx6.jpg",
  },
  {
    id: 2,
    title: "Canon 50mm Lens",
    description: "Prime lens for portraits",
    price: "200 DKK",
    imageSrc: "/img/sony_fx6.jpg",
  },
  {
    id: 3,
    title: "LED Panel",
    description: "Portable lighting solution",
    price: "150 DKK",
    imageSrc: "/img/sony_fx6.jpg",
  },
  {
    id: 4,
    title: "Rode Mic",
    description: "High-quality audio recording",
    price: "300 DKK",
    imageSrc: "/img/sony_fx6.jpg",
  },
];

const EquipmentCard = ({ item }) => (
  <div className="w-full max-w-xs mx-auto bg-black/40 text-white rounded-xl overflow-hidden shadow-lg border border-white/10 transform transition-transform duration-300 hover:scale-105 hover:shadow-lime/20 hover:shadow-lg">
    <div className="relative group h-48">
      <Image
        src={item.imageSrc}
        alt={item.title}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70" />
      <div className="absolute top-3 right-3 text-lime bg-black/30 p-1.5 rounded-full transition-transform duration-300 hover:scale-110 cursor-pointer">
        <FaFolderOpen className="h-5 w-5" />
      </div>
      <div className="absolute bottom-0 left-0 bg-lime text-black font-bold py-1 px-3 m-3 rounded-lg text-sm">
        {item.price}
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
      <p className="text-sm mb-4 text-gray-300">{item.description}</p>
      <Link
        href="/pages/singleProduct"
        className="inline-block w-full bg-lime text-black border-2 border-lime py-2 px-4 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-transparent hover:text-lime text-center"
      >
        Rent Now
      </Link>
    </div>
  </div>
);

const FeaturedEquipmentSection = () => (
  <section className="bg-gradient-to-b from-darkgrey to-black flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-20 lg:pb-24 min-h-fit lg:min-h-[600px] relative overflow-hidden">
    <div className="absolute top-0 left-0 w-32 h-32 bg-lime opacity-10 rounded-full -translate-x-16 -translate-y-16 blur-xl" />
    <div className="absolute bottom-0 right-0 w-40 h-40 bg-lime opacity-10 rounded-full translate-x-20 translate-y-20 blur-xl" />

    <div className="relative mb-12 md:mb-16">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-white px-4 relative z-10">
        Featured Equipment <span className="text-lime">This Week</span>
      </h2>
      <div className="h-1 w-20 bg-lime mx-auto mt-4 rounded-full" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mx-auto max-w-screen-xl px-4 w-full">
      {EQUIPMENT.map((item) => (
        <EquipmentCard key={item.id} item={item} />
      ))}
    </div>

    <div className="mt-12">
      <Link
        href="/pages/products"
        className="text-white border border-lime px-6 py-2 rounded-lg hover:bg-lime hover:text-black transition-colors duration-300 flex items-center gap-2 group"
      >
        View All Equipment
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="transition-transform duration-300 group-hover:translate-x-1"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg>
      </Link>
    </div>
  </section>
);

export default FeaturedEquipmentSection;
