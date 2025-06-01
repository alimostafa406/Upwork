"use client";
import {useState } from "react";
import { Search, ChevronDown } from "lucide-react";


export default function Searchbar() {
      const [current, setCurrent] = useState(0);
      const [roleOpen, setRoleOpen] = useState(false);
      const [selectedRole, setSelectedRole] = useState("Talent");
    return(

        <div className="w-full  flex flex-col justify-center items-center">
            <div className="relative w-[90%] h-full md:hidden  flex flex-col items-center justify-center gap-7  pt-16">
          {/* Left Box */}
          <div
            className="bg-gray-600/50 max-w-[400px]  flex justify-center items-center h-[20vh] rounded-[24px] px-6 py-4 shadow-md"
            style={{
              clipPath:
                "polygon(20% 0%, 80% 0%, 100% 0, 100% 66%, 81% 100%, 0 100%, 0% 80%, 0 0)",
            }}
          >
            <h1 className=" text-2xl font-bold leading-snug pb-5">
              FIND THE <span className="text-lime-400">TALENT</span> SIGN UP
              <br />
              & GET THE <span className="text-lime-400">JOB</span> DONE
            </h1>
          </div>

          {/* Right Box */}
          <div className="z-20 relative max-w-[400px] h-[20vh]  overflow-hidden">
            <div
              className="bg-gray-600/50 flex justify-center items-center rounded-[24px] h-[85%] px-6 py-4  shadow-md gap-4"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 0%, 100% 60%, 100% 100%, 0% 100%, 0.1% 35.8%, 15.3% 0%)",
              }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold pl-7 pt-7 mb-7 text-white">
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
            <div className="h-full md:hidden  w-full flex justify-center items-end transform mt-15 z-30 px-4">
            <div className="bg-white w-full rounded-full shadow-lg flex items-center px-4 py-2 relative">
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
    )
};
