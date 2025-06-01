'use client';
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Star } from "lucide-react";
// import '../globals.css'; 

const SuccessfulContracts = () => {

  const contracts = [
    {
      id: 1,
      client: "Edward Smith",
      clientRole: "Founder of Math.com",
      teacher: "Edward Smith",
      teacherRole: "Math Teacher",
      clientRating: 5.0,
      teacherRating: 4.7,
      description: "We are looking for a teacher to provide one-on-one algebra and geometry tutoring, 60-minute sessions, twice weekly.",
      startDate: "Jan 15, 2025",
      endDate: "Not Estimated",
      status: "Ongoing",
      budget: "$ 2000",
      paymentType: "Fixed Price"
    },
    {
      id: 2,
      client: "Edward Smith",
      clientRole: "Founder of Math.com",
      teacher: "Edward Smith",
      teacherRole: "Math Teacher",
      clientRating: 5.0,
      teacherRating: 4.7,
      description: "We are looking for a teacher to provide one-on-one algebra and geometry tutoring, 60-minute sessions, twice weekly.",
      startDate: "Jan 15, 2025",
      endDate: "Not Estimated",
      status: "Ongoing",
      budget: "$ 2000",
      paymentType: "Fixed Price"
    },
    {
      id: 3,
      client: "Edward Smith",
      clientRole: "Founder of Math.com",
      teacher: "Edward Smith",
      teacherRole: "Math Teacher",
      clientRating: 5.0,
      teacherRating: 4.7,
      description: "We are looking for a teacher to provide one-on-one algebra and geometry tutoring, 60-minute sessions, twice weekly.",
      startDate: "Jan 15, 2025",
      endDate: "Not Estimated",
      status: "Ongoing",
      budget: "$ 2000",
      paymentType: "Fixed Price"
    }
  ];



  const ContractCard = ({ contract }) => (
  <div className="rounded-2xl w-full mt-20  hover:scale-[1.05] transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] overflow-hidden relative">
      <div className="relative h-full w-full shadow-lg rounded-xl bg-white flex flex-col"
      style={{clipPath:"polygon(44% 0, 100% 0, 100% 20%, 100% 80%, 100% 100%, 0 100%, 0 7%, 35% 7%)"}}
      >
        <div className='pl-5' dir='rtl'>
          <div className=" flex items-center gap-2">
            {/* Social Media Icons */}
                  <div className="text-center p-2  ">
                  <p className="text-sm font-bold">Looking for Math Teacher</p>
                  <p className="text-xs "><span className='font-bold'>Payment Type:</span> Fixed Price</p>
                </div>
          </div>
          </div>


        <div className=''>
                      {/* Client & Talent */}
    <div className="mt-4 p-2 grid  grid-cols-2 gap-10">
      {/* Client */}
      <div className="flex items-center space-x-2 bg-gray-200 rounded-lg p-2" >
        <img
          src="/assets/client.png"
          alt="Client"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="text-xs font-semibold bg-blue-400 px-2 py-0.5 rounded-full w-fit">
            Client
          </div>
          <div className="text-sm font-medium">Edward Smith</div>
          <div className="flex items-center text-xs text-gray-500">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            5.0
          </div>
        </div>
      </div>

      {/* Talent */}
      <div className="flex items-center space-x-2 bg-gray-200 rounded-lg p-2">
        <img
          src="/assets/talent.jpg"
          alt="Talent"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="text-xs font-semibold bg-lime-300 px-2 py-0.5 rounded-full w-fit">
            Talent
          </div>
          <div className="text-sm font-medium">Edward Smith</div>
          <div className="flex items-center text-xs text-gray-500">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            4.7
          </div>
        </div>
      </div>
    </div>

        {/* Description */}
    <div className=" text-sm  p-3">
      <p className="font-bold text-lg mb-1">📄 Description</p>
      <p>
        We are looking for a teacher to provide one-on-one algebra and geometry tutoring, 60-minute sessions, twice weekly.
      </p>
    </div>

    
    {/* Job Details */}
    <div className="  text-sm text-gray-600 p-3">
      <p className="font-semibold mb-1">🗂 Job Details</p>
      <div className="space-y-1">
        <p>
          <span className="font-medium">Start Date:</span> Jan 15, 2025
        </p>
        <p>
          <span className="font-medium">End Date:</span> Not Estimated
        </p>
        <p>
          <span className="font-medium">Status:</span> Ongoing
        </p>
        <p>
          <span className="font-medium">Budget:</span> $2000
        </p>
      </div>
    </div>

    {/* Footer Note */}
    <div className='p-3 '>
    <div className=" bg-black text-white text-sm rounded-lg p-2 ">
      Fixed-priced contract is under the protection of the payment system.
    </div>
    </div>
        </div>
      </div>

    </div>

  );

  return (
    <div className="py-12 mt-20 ">
      <div className=" px-4">
        {/* Title */}
        <div className="text-center  flex items-center justify-center">
          <div className='w-3 h-3 bg-green-500 rounded-full mr-3'></div>
          <h1 className="text-2xl md:text-3xl  font-bold w-fit">
            SUCCESSFUL CONTRACTS
          </h1>
        </div>

        {/* Desktop View - Show all 3 cards */}
        <div>
            <div className="hidden md:grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center mb-8">
            {/* {contracts.map((contract) => (
                <ContractCard key={contract.id} contract={contract} />
            ))} */}
            <ContractCard/>
            <ContractCard/>
            <div className='md:hidden lg:block'>
            <ContractCard/>
            </div>
            </div>
                      {/* Navigation Arrows (for display only) */}
          <div className="hidden mt-20 md:flex justify-center space-x-4">
            <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Mobile View - Show only first card */}
        <div className="md:hidden w-full ">
          <div className="flex justify-center w-full mb-8">
            <ContractCard contract={contracts[0]} />
          </div>
          
          {/* Navigation Arrows (for display only) */}
          <div className="flex justify-center space-x-4">
            <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default SuccessfulContracts;