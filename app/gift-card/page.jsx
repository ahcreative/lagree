"use client";
import React from "react";
import Image from "next/image";
import Footer from "../components/footer";
import HeaderWhite from "../components/headerWhite";

const FirstTimers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderWhite />

      {/* Main content section - Made responsive with better spacing */}
      <div className="bg-black py-34 lg:py-44">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20">
            {/* Image container - Full width on mobile, half on desktop */}
            <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
              <Image
                src="/logo.png"
                alt="Lagree fitness"
                className="object-cover max-w-full"
                width={500}
                height={200}
              />
            </div>

            {/* Text content - Proper spacing and responsive typography */}
            <div className="w-full md:w-1/2 flex flex-col gap-10 lg:gap-15">
              <div className="flex flex-col gap-6 md:gap-8">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  Spread the Lagree Love
                </p>

                <p className="text-lg sm:text-xl md:text-2xl text-white">
                  We offer gift cards in $100, $150, $200, $250 as{" "}
                  <span className="block sm:inline">
                    well as for credit package amounts
                  </span>
                </p>
              </div>
              <div className="mt-2 md:mt-4">
                <button className="bg-white text-black py-4 px-16 sm:py-5 sm:px-20 md:py-6 md:px-28 font-medium">
                  Vancouver
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FirstTimers;
