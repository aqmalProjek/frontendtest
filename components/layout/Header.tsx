import { Bell, Mail, Search } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full h-[50px] bg-[#efefef] flex items-center px-4 gap-4">
      {/* Logo */}

      <div className="flex">
        <div className="relative w-[200px] h-[50px]">
          <Image
            src="/logo.png" // path logo kamu
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Title + Search */}
      <div className="flex-1 flex items-center justify-center gap-3">
        <h1 className="text-sm md:text-lg font-semibold text-center whitespace-nowrap">
          Learning Management System
        </h1>
        <div className="hidden sm:flex items-center bg-white rounded-md px-2 py-1 w-[200px] md:w-[300px]">
          <Search className="h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 outline-none w-full text-sm bg-transparent"
          />
        </div>
      </div>
      {/* Icons */}
      <div className="flex items-center gap-4">
        <Bell className="h-5 w-5 cursor-pointer text-gray-700" />
        <Mail className="h-5 w-5 cursor-pointer text-gray-700" />
      </div>
    </div>
  );
}
