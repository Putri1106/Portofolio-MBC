"use client";

import React from "react";
import Image from "next/image";
import {NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList,} from "@/components/ui/navigation-menu";
import { Carousel } from "@/components/ui/apple-cards-carousel";

const Project = () => {
  return (
    <>
      <NavigationMenu>
        <div
          className="flex justify-between items-center py-3 px-5 shadow-md bg-[#F64A8A] z-1000 shadow-lg fixed top-0 left-0 right-0"
          style={{ boxShadow: "0px 4px 6px -2px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="text-[#FFEBCD] font-bold">Sandrina Eka Putri</div>

          <NavigationMenuList className="flex gap-8 list-none p-0 m-0">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="text-[#FFEBCD] no-underline">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/Skills" className="text-[#FFEBCD] no-underline">
                Skills
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/Experience" className="text-[#FFEBCD] no-underline">
                Experience
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/Project" className="text-[#FFEBCD] no-underline">
                Project
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/Contact" className="text-[#FFEBCD] no-underline">
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </NavigationMenu>

      <div className="pt-2 min-h-screen bg-[#98623C]">
        <AppleCardsCarouselDemo />
      </div>
    </>
  );
};

interface CardProps {
  category: string;
  title: string;
  src: string;
}

const data: CardProps[] = [
  {
    category: "NETDEV",
    title: "Website Portofolio",
    src: "/webportonet.png",
  },
  {
    category: "NETDEV",
    title: "Website Perpustakaan",
    src: "/websiteperpus.png",
  },
  {
    category: "MBC",
    title: "Website MBC",
    src: "/websitembc.png",
  },
];

export function Card({ card }: { card: CardProps }) {
  return (
    <div className="w-[800px] h-[400px] bg-white rounded-lg shadow-md flex items-center relative">
      <Image
        src={card.src}
        alt={card.title}
        layout="responsive"
        width={1600}
        height={800}
        className="object-cover rounded-lg"
      />
      <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full rounded-b-lg text-white">
        <h3 className="text-xl font-semibold">{card.title}</h3>
        <p className="text-md">{card.category}</p>
      </div>
    </div>
  );
}

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} />
  ));

  return (
    <div className="w-full h-full pt-14 pb-6">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-4xl font-bold text-[#FFEBCD] dark:text-[#FFEBCD] font-sans mb-2">
        Project
      </h2>
      <Carousel items={cards} />
    </div>
  );
}



export default Project;
