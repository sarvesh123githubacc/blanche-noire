import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function OurStorySection() {
  return (
    <section className="px-[6%] py-32 grid grid-cols-2 gap-20 items-center">

      {/* LEFT CONTENT */}
      <div>
        <p className="uppercase text-sm tracking-widest mb-6">
          Our Story
        </p>

        <h2 className="text-[72px] leading-[1.05] font-medium mb-8">
          THE SPECIALTY <br /> JOURNEY
        </h2>

        <p className="text-gray-600 max-w-[480px] text-lg mb-10">
          This is the space to introduce the business and what it has to offer.
          Define the qualities and values that make it unique.
        </p>

        <button className="flex items-center gap-3 border-b border-black pb-1 text-lg">
          CONTACT US
          <ArrowRight size={18} />
        </button>
      </div>

      {/* RIGHT IMAGES */}
      <div className="relative flex justify-center">

        {/* background leaf */}
        <div className="absolute bottom-0 left-6 w-[320px] h-[320px] rounded-3xl overflow-hidden">
          <Image
            src="/big-leaf.png"
            alt="leaf"
            fill
            className="object-cover"
          />
        </div>

        {/* main image */}
        <div className="relative z-10 w-[380px] h-[420px] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/team.png"
            alt="coffee team"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}