import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function SpecialtyCoffee() {
  return (
    <section className="px-[6%] py-24 grid grid-cols-2 gap-20 items-center">

      <div>
        <h2 className="text-[70px] leading-[75px] mb-10 font-medium">
          SPECIALTY
          <br />
          COFFEE
          <br />
          CURATIONS
        </h2>

        <p className="text-gray-600 max-w-[420px] mb-8">
          This is a space to welcome visitors to the site. Grab their
          attention with copy that clearly states what the site is about,
          and add an engaging image or video.
        </p>

        <button className="flex items-center gap-3 border-b pb-1">
          DISCOVER MORE
          <ArrowRight size={18} />
        </button>

        <div className="mt-16">
          <Image
            src="/coffee-drink.png"
            alt="coffee drink"
            width={200}
            height={200}
            className="rounded-2xl"
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Image className="rounded-[40px]"
          src="/coffee-drink.png"
          alt="coffee bag"
          width={650}
          height={450}
        />
      </div>

    </section>
  );
}