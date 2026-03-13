"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";
import Footer from "@/app/components/Footer";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    hoverImage: string;
    tag?: string;
    size: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "SUNRISE SERENADE",
        price: 45,
        image: "/product.png",
        hoverImage: "/pattern.png",
        tag: "Best Seller",
        size: "500",
    },
    {
        id: 2,
        name: "CARAMEL CASCADE",
        price: 45,
        image: "/product.png",
        hoverImage: "/pattern.png",
        tag: "New Arrival",
        size: "500",
    },
    {
        id: 3,
        name: "HAZELNUT HARMONY",
        price: 45,
        image: "/product.png",
        hoverImage: "/pattern.png",
        tag: "Best Seller",
        size: "100",
    },
    {
        id: 4,
        name: "COCOA BLISS",
        price: 45,
        image: "/product.png",
        hoverImage: "/pattern.png",
        size: "500",
    },
];

export default function AllProducts() {
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [mobileFilter, setMobileFilter] = useState(false);
    const router = useRouter()

    const toggleSize = (size: string) => {
        setSelectedSizes((prev) =>
            prev.includes(size)
                ? prev.filter((s) => s !== size)
                : [...prev, size]
        );
    };

    const filteredProducts =
        selectedSizes.length === 0
            ? products
            : products.filter((p) => selectedSizes.includes(p.size));

    return (
        <>
            <Navbar />
            <div className="px-[6%] py-16">

                {/* BREADCRUMB */}
                <p className="text-sm text-gray-500 mb-8">
                    Home &gt; <span className="text-black">All Products</span>
                </p>

                <div className="grid lg:grid-cols-[260px_1fr] gap-16">

                    {/* SIDEBAR FILTERS */}
                    <aside className="hidden lg:block sticky top-32 h-fit">

                        {/* Browse */}
                        <div className="mb-10">
                            <p className="uppercase text-sm mb-3">Browse By</p>
                            <div className="border-b mb-4"></div>

                            <ul className="space-y-3 text-sm">
                                <li>All Products</li>
                                <li>Best Sellers</li>
                                <li>Featured</li>
                            </ul>
                        </div>

                        {/* Filter */}
                        <div>
                            <p className="uppercase text-sm mb-4">Filter By:</p>
                            <div className="border-b mb-4"></div>

                            <p className="text-sm mb-3 flex justify-between">
                                Size <span>-</span>
                            </p>

                            <div className="space-y-2 text-sm">

                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="accent-black"
                                        onChange={() => toggleSize("100")}
                                    />
                                    100 grams
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="accent-black"
                                        onChange={() => toggleSize("500")}
                                    />
                                    500 grams
                                </label>

                                <label className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    Wholesale
                                </label>

                            </div>
                        </div>

                    </aside>

                    {/* MAIN CONTENT */}
                    <main>

                        {/* TITLE */}
                        <h1 className="text-[72px] leading-[1.05] mb-6">
                            All Products
                        </h1>

                        <p className="max-w-[650px] text-gray-600 mb-10 text-lg">
                            This is your category description. It’s a great place to tell
                            customers what this category is about, connect with your
                            audience and draw attention to...
                            <span className="underline cursor-pointer ml-1">
                                Read more
                            </span>
                        </p>

                        {/* SORT + FILTER MOBILE */}
                        <div className="flex justify-between items-center mb-8">

                            <p className="text-sm">
                                {filteredProducts.length} products
                            </p>

                            <button
                                className="lg:hidden underline"
                                onClick={() => setMobileFilter(true)}
                            >
                                Filter & Sort
                            </button>

                            <select className="hidden lg:block border px-3 py-2 rounded-md">
                                <option>Recommended</option>
                                <option>Newest</option>
                                <option>Price (low to high)</option>
                                <option>Price (high to low)</option>
                            </select>

                        </div>

                        {/* PRODUCT GRID */}
                        <div className="grid md:grid-cols-2 gap-12">

                            {filteredProducts.map((product) => (
                                <div onClick={()=>{
                                    router.push(`/products/${product.id}`)
                                }} key={product.id}>

                                    <div className="group relative overflow-hidden rounded-[36px] aspect-[4/5] w-full">

                                        {product.tag && (
                                            <span className="absolute top-4 left-4 z-20 bg-[#DFF4C9] text-xs px-3 py-1 rounded-full">
                                                {product.tag}
                                            </span>
                                        )}

                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover rounded-[36px] transition-opacity duration-500 group-hover:opacity-0"
                                        />

                                        <Image
                                            src={product.hoverImage}
                                            alt={product.name}
                                            fill
                                            className="object-cover rounded-[36px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                        />

                                    </div>

                                    <p className="mt-5 text-lg tracking-wide">
                                        {product.name}
                                    </p>

                                    <p className="text-green-900 font-medium text-lg">
                                        ${product.price}.00
                                    </p>

                                </div>
                            ))}

                        </div>

                    </main>

                </div>

                {/* MOBILE FILTER DRAWER */}
                {mobileFilter && (
                    <div className="fixed inset-0 bg-white z-50 p-6">

                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl">Filter & Sort</h3>
                            <button onClick={() => setMobileFilter(false)}>✕</button>
                        </div>

                        <p className="text-sm mb-4">
                            ({products.length} products)
                        </p>

                        <div className="mb-6">
                            <p className="mb-3 font-medium">Sort by:</p>

                            <div className="space-y-2">
                                <label><input type="radio" name="sort" /> Recommended</label>
                                <label><input type="radio" name="sort" /> Newest</label>
                                <label><input type="radio" name="sort" /> Price (low to high)</label>
                                <label><input type="radio" name="sort" /> Price (high to low)</label>
                                <label><input type="radio" name="sort" /> Name A-Z</label>
                                <label><input type="radio" name="sort" /> Name Z-A</label>
                            </div>
                        </div>

                        <div className="border-t pt-6 flex gap-4">

                            <button className="border px-6 py-3 flex-1">
                                Clear Filters
                            </button>

                            <button className="bg-black text-white px-6 py-3 flex-1">
                                Apply
                            </button>

                        </div>

                    </div>
                )}

            </div>
            <Footer/>
        </>
    );
}