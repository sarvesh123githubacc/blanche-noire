"use client";

import Image from "next/image";

interface ProductCardProps {
  title: string;
  image: string;
  hoverImage: string;
  bestSeller?: boolean;
}

export default function ProductCard({
  title,
  image,
  hoverImage,
  bestSeller,
}: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      
      {/* IMAGE CARD */}
      <div className="relative rounded-3xl overflow-hidden bg-[#D7BFB3] h-[420px] flex items-center justify-center">

        {bestSeller && (
          <span className="absolute top-5 left-5 z-20 bg-[#D7F2C2] text-black text-xs px-3 py-1 rounded-full">
            Best Seller
          </span>
        )}

        {/* DEFAULT IMAGE */}
        <Image
          src={image}
          alt={title}
          width={260}
          height={320}
          className="absolute transition-opacity duration-500 group-hover:opacity-0"
        />

        {/* HOVER IMAGE */}
        <Image
          src={hoverImage}
          alt={title}
          width={260}
          height={320}
          className="absolute opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

      </div>

      {/* TITLE */}
      <p className="mt-4 text-lg tracking-wide">{title}</p>

    </div>
  );
}