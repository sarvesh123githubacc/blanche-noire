import Image from "next/image";

export default function SustainabilitySection() {
  return (
    <div>
    <section className="relative w-full bg-[#BFD7AE] py-40 h-[60vh] overflow-hidden">

      {/* LEFT IMAGE GROUP */}
      <div className="absolute left-28 top-24">
        <div className="relative w-[220px] h-[160px] rounded-3xl overflow-hidden">
          <Image
            src="/coffee-beans.png"
            alt="coffee plant"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute -left-16 top-28 w-[200px] h-[140px] rounded-3xl overflow-hidden">
          <Image
            src="/wood.png"
            alt="wood texture"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* RIGHT IMAGE GROUP */}
      <div className="absolute right-28 top-40">
        <div className="relative w-[260px] h-[180px] rounded-3xl overflow-hidden">
          <Image
            src="/coffee-cup.png"
            alt="coffee"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute -right-12 top-28 w-[220px] h-[150px] rounded-3xl overflow-hidden">
          <Image
            src="/leaf.png"
            alt="leaf"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* CENTER TEXT */}
      <div className="max-w-[820px] mx-auto text-center px-6">
        <p className="text-[38px] leading-[54px] font-medium text-black">
          Our coffee, team, farmers and planet are at our core. Each cup
          reflects our commitment to quality and sustainability.
        </p>
      </div>

      {/* BOTTOM STRIP */}
      

    </section>
    <div className="left-0 w-full bg-[#0F2F23] py-6 flex justify-center gap-16 text-[#CFE7C4] text-lg tracking-wide">
        <span>✺ 100% ORGANIC</span>
        <span>✺ 100% ORGANIC</span>
        <span>✺ 100% ORGANIC</span>
        <span>✺ 100% ORGANIC</span>
        <span>✺ 100% ORGANIC</span>
      </div>
      </div>
  );
}