"use client";
import React from "react";
import Footer from "../components/footer";
import HeaderWhite from "../components/headerWhite";

const FirstTimers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className=" h-screen w-full overflow-hidden">
        <HeaderWhite />
        <div className="bg-white text-black min-h-screen flex flex-col gap-8 px-6 sm:px-10 md:px-16 lg:px-24 py-34">
          <h1 className="text-2xl sm:text-3xl font-bold">Account</h1>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col md:flex-row md:gap-7 gap-4 items-start md:items-center">
              <h1 className="text-base sm:text-lg text-gray-400 hover:underline cursor-pointer">
                Reservations
              </h1>
              <h1 className="text-base sm:text-lg text-gray-400 hover:underline cursor-pointer">
                Membership & Credits
              </h1>
              <h1 className="text-base sm:text-lg text-gray-400 hover:underline cursor-pointer">
                Purchases
              </h1>
              <h1 className="text-base sm:text-lg text-gray-400 hover:underline cursor-pointer">
                Personal Information
              </h1>
            </div>
            <div className="border-t border-gray-300 w-full mt-2"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FirstTimers;
