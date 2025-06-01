"use client";
import { useEffect, useState } from "react";
import { Search, ChevronDown } from 'lucide-react';

const images = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [roleOpen, setRoleOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Talent");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative  text-white mt-10 h-[30vh] md:h-[70vh]">
      {/* Background Image */}
      <img
        src="/assets/hero.jpg"
        alt="Slide"
        className="w-full h-full object-cover rounded-3xl md:rounded-[40px]"
      />
      

      {/* Decorative Wave */}
      <img
        src="/assets/wave1.png"
        className="absolute bottom-0 w-full z-20"
        alt="Wave Decoration"
      />

      {/* Hero Content */}
      <div className="absolute md:block hidden w-full top-5 h-full z-30">
        <div className="flex relative h-[50%] justify-between px-10 pt-16">
          {/* Left Box */}
          <div
            className="bg-gray-600/50 absolute  top-5 xl:left-20 rounded-[24px] px-6 py-4 text-left shadow-md"
            style={{
              clipPath:
                "polygon(20% 0%, 80% 0%, 100% 0, 100% 66%, 81% 100%, 0 100%, 0% 80%, 0 0)",
            }}
          >
            <h1 className="lg:text-3xl text-2xl font-bold leading-snug pb-5">
              FIND THE <span className="text-lime-400">TALENT</span> SIGN UP
              <br />
              & GET THE <span className="text-lime-400">JOB</span> DONE
            </h1>
          </div>

          {/* Right Box */}
          <div className="z-20 absolute bottom-0 overflow-hidden right-6 xl:right-28 h-[60%]">
            <div
              className="bg-gray-400/30 rounded-[24px] h-[85%] lg:px-9 lg:py-6 px-6 py-4 text-right shadow-md mt-6 md:mt-0 flex flex-col items-start justify-center gap-4"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 0%, 100% 60%, 100% 100%, 0% 100%, 0.1% 35.8%, 15.3% 0%)",
              }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold pl-7 pt-3 mb-7 text-white">
                WE`LL <span className="text-lime-400">HANDLE</span> THAT
              </h2>
            </div>

               <div className="w-full absolute bottom-0 flex justify-center">
              <div className="flex gap-2 ">
                      <button className="bg-lime-400 text-black font-semibold rounded-full px-6 py-2 shadow hover:bg-lime-500 transition">
                        Sign Up for Contract
                      </button>
                      <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:scale-105 transition">
                        ▶
                      </button>
              </div>
            </div>

          </div>
        </div>
                                {/* Search Bar */}
      <div className="absolute bottom-30 left-0 flex justify-center items-end z-30 w-full px-4">
        <div className="bg-white rounded-full w-[60%] shadow-lg flex items-center px-4 py-2 relative">
          {/* Search Icon */}
          <div className="mr-2 text-gray-500">
            <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full">
              <Search className="w-5 h-5" />
            </div>
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Find a job, talent or service"
            className="flex-1 text-sm md:text-base px-2 py-2 focus:outline-none text-gray-700"
          />

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setRoleOpen(!roleOpen)}
              className="flex items-center gap-1 text-sm md:text-base text-gray-700 px-4 py-2 rounded-full hover:bg-gray-100 transition"
            >
              {selectedRole} <ChevronDown className="w-4 h-4" />
            </button>

            {roleOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border rounded-xl shadow-xl z-50">
                <button
                  className="w-full text-left px-4 py-3 hover:bg-gray-100"
                  onClick={() => {
                    setSelectedRole("Talent");
                    setRoleOpen(false);
                  }}
                >
                  <div className="font-semibold text-black">Talent</div>
                  <div className="text-xs text-gray-500">
                    Hire professionals effortlessly.
                  </div>
                </button>
                <button
                  className="w-full text-left px-4 py-3 hover:bg-gray-100"
                  onClick={() => {
                    setSelectedRole("Client");
                    setRoleOpen(false);
                  }}
                >
                  <div className="font-semibold text-black">Client</div>
                  <div className="text-xs text-gray-500">
                    Apply to jobs posted by clients.
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>


    </section>
  );
}
