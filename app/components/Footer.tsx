import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-[4%] pb-10">
      <div className="bg-[#B8D3A6] rounded-[40px] p-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-5 gap-16">

          {/* LOGO */}
          <div className="flex flex-col gap-6">
            <Image
              src="/logo.png"
              alt="Beans logo"
              width={260}
              height={160}
            />

            <h2 className="text-4xl font-serif">THE BEANS</h2>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">CONTACT</h4>

            <ul className="space-y-2 text-sm">
              <li>Info@mysite.com</li>
              <li>Tel: 123-456-7890</li>
              <li>500 Terry Francine St</li>
              <li>San Francisco, CA 94158</li>
              <li>Monday–Friday</li>
              <li>9:00am – 7:00pm</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4">QUICK LINKS</h4>

            <ul className="space-y-2 text-sm">
              <li>Shop</li>
              <li>Wholesale</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* POLICY */}
          <div>
            <h4 className="font-semibold mb-4">POLICY</h4>

            <ul className="space-y-2 text-sm">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Shipping Policy</li>
              <li>Accessibility Statement</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold mb-4">FOLLOW</h4>

            <ul className="space-y-2 text-sm">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>TikTok</li>
              <li>LinkedIn</li>
            </ul>
          </div>

        </div>

        {/* NEWSLETTER */}
        <div className="mt-14">

          <p className="font-semibold mb-4">STAY CONNECTED</p>

          <div className="flex gap-4 max-w-[900px]">

            <input
              type="email"
              placeholder="ENTER EMAIL"
              className="flex-1 rounded-full border border-[#2b4635] px-6 py-3 bg-transparent outline-none"
            />

            <button className="bg-[#0E3B34] text-white px-10 py-3 rounded-full">
              Submit
            </button>

          </div>

        </div>

        {/* BOTTOM TEXT */}
        <div className="mt-12 text-sm">
          © 2035 by The Beans. Built on{" "}
          <span className="underline">Wix Studio</span>
        </div>

      </div>
    </footer>
  );
}