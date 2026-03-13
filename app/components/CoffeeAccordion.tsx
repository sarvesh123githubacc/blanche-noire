"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

interface Product {
  name: string;
  image: string;
}

interface Category {
  name: string;
  products: Product[];
}

const categories: Category[] = [
  {
    name: "COFFEE BEANS",
    products: [
      { name: "Sunrise Serenade", image: "/coffee-drink.png" },
      { name: "Cocoa Bliss", image: "/coffee-drink.png" },
      { name: "Nutty Nirvana", image: "/coffee-drink.png" },
    ],
  },
  {
    name: "COFFEE MACHINES",
    products: [
      { name: "Barista Pro", image: "/coffee-drink.png" },
      { name: "Latte Master", image: "/coffee-drink.png" },
      { name: "Espresso Mini", image: "/coffee-drink.png" },
    ],
  },
  {
    name: "COFFEE BEVERAGES",
    products: [
      { name: "Cold Brew", image: "/coffee-drink.png" },
      { name: "Iced Latte", image: "/coffee-drink.png" },
      { name: "Mocha", image: "/coffee-drink.png" },
    ],
  },
];

export default function CoffeeCategoryAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section className="bg-[#0E3B34] text-[#CDE6B8] py-28">

      {/* HEADER */}
      <div className="px-[6%] flex justify-between items-start mb-20">

        <div>
          <h2 className="text-[70px] leading-[1.1] mb-6">
            COFFEE COLLECTION
          </h2>

          <p className="max-w-[620px] text-lg text-[#cfe3c3]">
            Discover our carefully curated coffee categories — from premium
            beans to machines and handcrafted beverages.
            Explore the top picks in each category.
          </p>
        </div>

        <div className="flex gap-4">
          <button className="bg-[#CDE6B8] text-black px-6 py-3 rounded-full">
            EXPLORE ALL PRODUCTS
          </button>

          <button className="border border-[#CDE6B8] px-6 py-3 rounded-full">
            DISCOVER MORE
          </button>
        </div>

      </div>

      {/* ACCORDION */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-[#31594F]">

        {categories.map((cat, i) => (
          <div key={i} className="border-b border-[#31594F]">

            {/* CATEGORY ROW */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center px-[6%] py-10"
            >
              <span className="text-[40px] tracking-wide">
                {cat.name}
              </span>

              {open === i ? <Minus size={28} /> : <Plus size={28} />}
            </button>

            {/* EXPANDED CONTENT */}
            <div
              className={`transition-all duration-500 overflow-hidden ${
                open === i ? "max-h-[600px] pb-16" : "max-h-0"
              }`}
            >
              <div className="px-[6%] grid grid-cols-3 gap-10 mt-6">

                {cat.products.map((p, index) => (
                  <div
                    key={index}
                    className="bg-[#E7CBB4] rounded-3xl p-8 flex flex-col items-center"
                  >
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={180}
                      height={220}
                    />

                    <p className="text-black mt-4 font-medium">
                      {p.name}
                    </p>
                  </div>
                ))}

              </div>

              {/* SEE MORE */}
              <div className="px-[6%] mt-10">
                <button className="bg-[#CDE6B8] text-black px-6 py-3 rounded-full">
                  SEE ALL {cat.name}
                </button>
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
}