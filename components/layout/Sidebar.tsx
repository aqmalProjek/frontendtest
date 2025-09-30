"use client"
import {
    Calendar,
  LayoutDashboard,
  MessageSquareMoreIcon,
  PaperclipIcon,
  Settings,
  StarIcon,
  User,
  Users2,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SidebarComponent = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
    });

    // redirect ke halaman login
    router.push("/login");
  };
  return (
  <div className="h-full bg-slate-800 text-white rounded-tr-4xl pt-8 items-center flex flex-col gap-2 
                  w-[60px] md:w-[250px] transition-all duration-300">
    {/* Menu Dashboard */}
    <div className="bg-white rounded w-[80%] h-[40px] box-border px-2 py-2 text-amber-500 flex items-center justify-center md:justify-start">
      <div className="w-[30px]">
        <LayoutDashboard />
      </div>
      {/* Text hanya muncul saat md ke atas */}
      <div className="hidden md:block w-[calc(100%-60px)] pl-2">Dashboard</div>
      <div className="hidden md:block w-[30px]">
        <StarIcon />
      </div>
    </div>

    {/* Menu Modul */}
    <div className="rounded w-[80%] h-[40px] box-border px-2 py-2 text-white flex items-center justify-center md:justify-start">
      <div className="w-[30px]">
        <PaperclipIcon />
      </div>
      <div className="hidden md:block w-[calc(100%-60px)] pl-2">Modul</div>
    </div>

    {/* Menu Peserta */}
    <div className="rounded w-[80%] h-[40px] box-border px-2 py-2 text-white flex items-center justify-center md:justify-start">
      <div className="w-[30px]">
        <Users2 />
      </div>
      <div className="hidden md:block w-[calc(100%-60px)] pl-2">Peserta</div>
    </div>

    {/* Menu Group Chat */}
    <div className="rounded w-[80%] h-[40px] box-border px-2 py-2 text-white flex items-center justify-center md:justify-start">
      <div className="w-[30px]">
        <MessageSquareMoreIcon />
      </div>
      <div className="hidden md:block w-[calc(100%-60px)] pl-2">Group Chat</div>
    </div>

    {/* Menu Pemateri */}
    <div className="rounded w-[80%] h-[40px] box-border px-2 py-2 text-white flex items-center justify-center md:justify-start">
      <div className="w-[30px]">
        <User />
      </div>
      <div className="hidden md:block w-[calc(100%-60px)] pl-2">Pemateri</div>
    </div>

    {/* Garis pemisah */}
    <div className="hidden md:block w-[80%] h-[2px] bg-white"></div>

    <h2 className="hidden md:block text-left w-[80%] font-bold">PROFILE</h2>

    {/* Menu Settings */}
    <div className="rounded w-[80%] h-[40px] box-border px-2 py-2 text-white flex items-center justify-center md:justify-start">
      <div className="w-[30px]">
        <Settings />
      </div>
      <div className="hidden md:block w-[calc(100%-60px)] pl-2">Settings</div>
    </div>

    {/* Menu Kalender */}
    <div className="rounded w-[80%] h-[40px] box-border px-2 py-2 text-white flex items-center justify-center md:justify-start">
      <div className="w-[30px]">
        <Calendar />
      </div>
      <div className="hidden md:block w-[calc(100%-60px)] pl-2">Kalender</div>
    </div>

    {/* Garis pemisah */}
    <div className="hidden md:block w-[80%] h-[2px] bg-white"></div>

    {/* Menu Log Out */}
    <div className="rounded w-[80%] h-[40px] box-border px-2 py-2 text-white flex items-center justify-center md:justify-start cursor-pointer" onClick={handleLogout}>
      <div className="w-[30px]">
        <div className="relative w-[25px] h-[25px]">
          <Image
            src="/shutdown.png"
            alt="shutdown"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="hidden md:block w-[calc(100%-60px)] pl-2" >Log Out</div>
    </div>
  </div>
);

};

export default SidebarComponent;
