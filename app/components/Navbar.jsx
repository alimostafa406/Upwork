"use client";
import { useState } from "react";
import { ChevronDown,Grid } from "lucide-react";

export default function Navbar() {
  const [langOpen, setLangOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-black text-white px-3 lg:px-6 py-3 rounded-full relative">
      {/* Left: Logo */}
      <div className="text-2xl font-bold ml-4">
        <span className="text-green-400">J</span>obwhee
      </div>

      {/* Center: Navigation Links */}
      <div className=" hidden md:flex space-x-2 lg:space-x-6">
        <a href="#" className="hover:underline font-medium">Post a Job</a>
        <a href="#" className="hover:underline font-medium">Explore Jobs</a>
        <a href="#" className="hover:underline font-medium">How it Works</a>
      </div>



      {/* Right: Language and Buttons */}
      <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
        <div className="relative  border border-white rounded-full  py-2 w-[95px]">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center justify-around w-full"
          >
            <div>
            <img src="/assets/ukflagicon.png" alt="EN" className="w-7 h-7" />
            </div>
            <div className="flex items-center text-sm">
            EN
            <ChevronDown size={16} />
            </div>
          </button>
          {langOpen && (
            <div className="absolute top-14 right-0 bg-black border  rounded px-3 py-2 text-sm space-y-1 z-100">
              <div className="flex items-center space-x-1"><img src="/assets/ukflagicon.png" className="w-4 mr-2" /> English</div>
              <div className="flex items-center space-x-1"><img src="/assets/greek.png" className="w-4 mr-2" /> Greek</div>
            </div>
          )}
        </div>
        
        <button className="text-sm border border-white hover:bg-white hover:text-black rounded-full px-6 py-3 xl:px-8">Sign In</button>
        <button className="text-sm bg-white hover:bg-black hover:text-white border hover:border-white text-black rounded-full px-6 py-3 xl:px-8">Sign Up</button>

        </div>
        <div className="flex md:hidden items-center gap-2">
          {/* Sign Up Button */}
          <button className="text-sm bg-white text-black rounded-full px-6 py-3 xl:px-8">
            Sign Up
          </button>
                {/* Category Icon */}
            <div className="px-3 py-3 rounded-full bg-white shadow-md">
              <Grid className="w-5 h-5 text-black" />
            </div>
        </div>
    </nav>
  );
}
