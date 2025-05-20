"use client";
import React from "react";
import Image from "next/image";
import Footer from "../components/footer";
import HeaderWhite from "../components/headerWhite";

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderWhite />

      <div className="bg-white text-black py-34 lg:py-44">
        <div className="container mx-auto flex flex-col md:flex-row gap-10 items-start justify-start px-4 sm:px-6 md:px-10">
          {/* Image container - Full width on mobile, half width on larger screens */}
          <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
            <Image
              src="/about2.jpg"
              alt="Lagree fitness"
              className="object-cover"
              width={500}
              height={200}
            />
          </div>

          {/* Text content - Full width on mobile, half width on larger screens */}
          <div className="w-full md:w-1/2 flex flex-col gap-12 md:gap-16 lg:gap-24 justify-start items-start">
            <div className="flex flex-col justify-start items-start gap-4">
              <p className="text-4xl sm:text-5xl font-medium leading-tight">
                <strong>Pricing</strong>
              </p>

              <p className="text-lg sm:text-xl">
                <span className="font-bold">Single:</span> Tier 1: $110 | Tier
                2: $90
              </p>

              <p className="text-lg sm:text-xl">
                <span className="font-bold">Semiprivate:</span> Tier 1: $80 per
                person | Tier 2: $70 per person
              </p>

              <p className="text-base sm:text-lg">
                *Tier is based on trainer's level of experience and
                certifications. Some trainers' rates may vary.{" "}
                <a href="mailto:info@lagreeeliteform.com" className="underline">
                  Email
                </a>{" "}
                us with your preferred date(s), time(s), location(s), and
                trainer(s) to get booked in!
              </p>

              <p className="text-lg sm:text-xl">
                <span className="font-bold">Group:</span> $250+
              </p>

              <p className="text-base sm:text-lg">
                *Price is based on total guests. Email us below with the number
                in your group, preferred date(s), time(s), location, and
                trainer(s) to get booked in!
              </p>

              <div className="mt-4">
                <a href="mailto:info@lagreeeliteform.com">
                  <button className="bg-black uppercase text-white py-3 sm:py-4 md:py-6 px-8 sm:px-16 md:px-24 lg:px-32 font-medium self-start">
                    vancouver
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
