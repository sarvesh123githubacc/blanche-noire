"use client"

import { ShoppingBag, User } from "lucide-react";
import { URL } from "../config";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter()
  return (
    <div className="w-full flex justify-center pt-6">
      <div className="w-[92%] bg-[#B7D3A8] rounded-full px-8 py-3 flex items-center justify-between">
        <p onClick={()=>{
          router.push("/")
        }} className="tracking-[4px] text-sm font-medium cursor-pointer">THE BEANS</p>

        <div className="flex items-center gap-8 text-sm">
          <a href={`${URL}/products`} className="cursor-pointer">Shop</a>
          <a className="cursor-pointer">Wholesale</a>
          <a className="cursor-pointer">Contact</a>

          <div className="flex items-center gap-3">
            <User size={20} />
            <span>Log In</span>
            <ShoppingBag size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}