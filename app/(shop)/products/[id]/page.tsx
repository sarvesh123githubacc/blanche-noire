"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const relatedProducts = [
  {
    name: "NUTTY NIRVANA",
    price: 45,
    image: "/product.png",
    hover: "/pattern.png",
    tag: "Best Seller",
  },
  {
    name: "HAZELNUT HARMONY",
    price: 45,
    image: "/product.png",
    hover: "/pattern.png",
    tag: "Best Seller",
  },
  {
    name: "CITRUS SYMPHONY",
    price: 45,
    image: "/product.png",
    hover: "/pattern.png",
  },
];

export default function ProductPage() {
  const [qty, setQty] = useState(1);
  const [openInfo, setOpenInfo] = useState(true);

  return (
    <>
    <Navbar/>
    <div className="px-[6%] py-12">

      {/* Breadcrumb */}
      <p className="text-sm mb-8 text-gray-500">
        Home &gt; All Products &gt; <span className="text-black">SUNRISE SERENADE</span>
      </p>

      {/* Product Layout */}
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* Product Image */}
        <div className="rounded-[36px] flex items-center justify-center">
          <Image
            className="rounded-[36px]"
            src="/product.png"
            alt="Sunrise Serenade"
            width={660}
            height={460}
          />
        </div>

        {/* Product Info */}
        <div>

          <h1 className="text-[56px] leading-[1.05] font-medium mb-4">
            SUNRISE SERENADE
          </h1>

          <p className="text-[24px] mb-6">$45.00</p>

          <p className="text-gray-600 max-w-[420px] mb-8">
            I'm a product description. I'm a great place to add more details
            about your product such as sizing, material, care instructions
            and cleaning instructions.
          </p>

          {/* Size */}
          <p className="mb-2 text-sm">Size</p>
          <select className="w-full border rounded-full px-5 py-3 mb-6">
            <option>Select</option>
            <option>100 grams</option>
            <option>500 grams</option>
          </select>

          {/* Quantity */}
          <p className="mb-2 text-sm">Quantity</p>

          <div className="flex items-center border rounded-full w-[120px] mb-8">
            <button
              className="px-4 py-2"
              onClick={() => setQty(Math.max(1, qty - 1))}
            >
              −
            </button>

            <span className="flex-1 text-center">{qty}</span>

            <button
              className="px-4 py-2"
              onClick={() => setQty(qty + 1)}
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-10">
            <button className="bg-black text-white px-10 py-3 rounded-full">
              Add to Cart
            </button>

            <button className="border px-10 py-3 rounded-full">
              Buy Now
            </button>
          </div>

          {/* Accordion */}
          <div className="border-t pt-6">

            <button
              onClick={() => setOpenInfo(!openInfo)}
              className="flex justify-between w-full text-left"
            >
              <span className="font-medium">PRODUCT INFO</span>
              <span>{openInfo ? "−" : "+"}</span>
            </button>

            {openInfo && (
              <p className="mt-4 text-gray-600">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit.
              </p>
            )}

          </div>

          <div className="border-t py-6 flex justify-between">
            <span>RETURN & REFUND POLICY</span>
            <span>+</span>
          </div>

          <div className="border-t py-6 flex justify-between">
            <span>SHIPPING INFO</span>
            <span>+</span>
          </div>

        </div>

      </div>

      {/* Related Products */}
      <div className="mt-28">

        <h2 className="text-[44px] text-center mb-14">
          You Might also like
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {relatedProducts.map((product, i) => (
            <div key={i}>

              <div className="group bg-[#E6CEC4] rounded-[36px] h-[380px] flex items-center justify-center relative overflow-hidden">

                {product.tag && (
                  <span className="absolute top-5 left-5 bg-[#DFF4C9] text-xs px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                )}

                <Image
                  src={product.image}
                  alt={product.name}
                  width={240}
                  height={300}
                  className="absolute transition-opacity duration-500 group-hover:opacity-0"
                />

                <Image
                  src={product.hover}
                  alt={product.name}
                  width={240}
                  height={300}
                  className="absolute opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

              </div>

              <p className="mt-4">{product.name}</p>
              <p className="text-gray-600">${product.price}.00</p>

            </div>
          ))}

        </div>

      </div>

    </div>
    <Footer/>
    </>
  );
}