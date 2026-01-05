import React from "react";
import Card from "../kitCard/KitCard";
import Link from "next/link";

const KITS = [
  { id: 1, title: "Starter Kit", description: "Perfect for beginners" },
  { id: 2, title: "Professional Kit", description: "For the pros" },
  { id: 3, title: "Video Kit", description: "All-in-one video solution" },
  { id: 4, title: "Audio Kit", description: "For sound professionals" },
  { id: 5, title: "Lighting Kit", description: "Illuminate your scene" },
  { id: 6, title: "Action Kit", description: "For dynamic shoots" },
];

const PopularKits = () => (
  <section className="bg-white py-10 pb-24">
    <h2 className="text-center text-h1 font-bold mt-8 mb-8 text-black">
      Most Rented Kits
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mx-auto max-w-screen-xl px-4">
      {KITS.slice(0, 3).map((kit) => (
        <Card
          key={kit.id}
          title={kit.title}
          description={kit.description}
          buttonText="Rent Now"
          imageSrc="/img/sony_fx6.jpg"
          borderWidth="border"
          borderRadius="rounded-2xl"
          className="w-[250px] h-[350px]"
        />
      ))}
      {KITS.slice(3).map((kit) => (
        <Card
          key={kit.id}
          title={kit.title}
          description={kit.description}
          buttonText="Rent Now"
          imageSrc="/img/sony_fx6.jpg"
          borderWidth="border"
          borderRadius="rounded-2xl"
          className="hidden sm:flex w-[250px] h-[350px]"
        />
      ))}
    </div>
    <div className="sm:hidden flex justify-center mt-6">
      <Link
        href="/pages/kitPage"
        className="bg-lime text-black border-2 border-lime px-6 py-2 rounded-xl font-semibold transition-all duration-300 hover:bg-transparent hover:text-black"
      >
        See All Kits
      </Link>
    </div>
  </section>
);

export default PopularKits;
