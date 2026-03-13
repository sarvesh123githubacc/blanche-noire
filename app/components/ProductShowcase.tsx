import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section className="px-[6%] pb-24">
      <div className=" flex justify-center">

        <Image className="rounded-[40px]"
          src="/coffee-hero.png"
          alt="coffee"
          width={1450}
          height={300}
        />

      </div>
    </section>
  );
}