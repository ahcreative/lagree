"use client";
import React from "react";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Link from "next/link";

const FirstTimers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative h-screen w-full overflow-hidden">
        <Header />

        <img
          src="/fitness.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt=""
        />
        {/* Content Section */}
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <div className="mx-4 sm:ml-8 md:ml-20 mt-5 flex flex-col gap-6 md:gap-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold mb-4 md:mb-6">
                First Timers{" "}
              </h1>

              <div className="">
                <p className="text-lg sm:text-xl">
                  We will meet you wherever you are in your fitness journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="bg-white py-16 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
            {/* Title Section */}
            <div className="md:col-span-1">
              <h3 className="text-2xl sm:text-3xl md:text-5xl text-black font-semibold mb-6">
                First Time <br />
                Special Offers
              </h3>
            </div>

            {/* Vancouver Offer */}
            <div className="md:col-span-1 flex flex-col gap-6 md:gap-8">
              <p className="text-xl text-black font-bold mb-2">
                First Class Vancouver
              </p>
              <p className="text-black font-medium mb-2">
                <strong>2 Week Intro Pass</strong> — $99
              </p>
              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                Expires 14 days from date of first class. Max 1{" "}
                <br className="hidden sm:block" /> class/day. Check pricing page
                for additional new client offers.
              </p>
              <div className="mt-2 md:mt-4">
                <Link
                  href="/pricing"
                  target="_blank"
                  className="inline-block w-full sm:w-auto px-12 sm:px-20 md:px-28 py-6 sm:py-8 bg-black text-white font-medium text-center transition-colors"
                >
                  BUY HERE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second bg-black */}
      <div className="bg-black py-16 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row gap-12 md:gap-40 justify-between">
            {/* Title Section */}
            <div className="md:w-1/4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-6">
                For Your First Class
              </h3>
            </div>

            {/* First Class Info Columns */}
            <div className="md:w-3/4 flex flex-col md:flex-row justify-between gap-8 md:gap-0">
              {/* Left Column */}
              <div className="flex flex-col gap-4 w-full md:w-1/2 pr-0 md:pr-6 mb-8 md:mb-0">
                <p className="text-lg sm:text-xl text-white font-bold mb-2">
                  Please Arrive 15 Minutes Early
                </p>
                <p className="text-white font-light mb-6">
                  For your safety, a machine orientation is required before your
                  first class.
                </p>

                <p className="text-lg sm:text-xl text-white font-bold mb-2">
                  Prepare To Work Up A Sweat
                </p>
                <p className="text-white font-light">
                  Don't forget your water bottle and your towel!
                </p>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-4 w-full md:w-1/2">
                <p className="text-lg sm:text-xl text-white font-bold mb-2">
                  Grip Socks Are Required
                </p>
                <p className="text-white font-light mb-6">
                  For both safety and hygiene. Bring your own or purchase in
                  studio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white text-black py-16 md:py-28">
        <div className="container mx-auto px-4 sm:px-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-28">
            {/* Image container */}
            <div className="w-full flex items-center justify-center">
              <Image
                src="/about3.jpg"
                alt="Lagree fitness"
                className="object-cover"
                width={500}
                height={200}
              />
            </div>

            <div className="w-full flex flex-col gap-12 md:gap-24">
              <div className="flex flex-col">
                <p className="text-lg text-black sm:text-xl">
                  Take The First Step
                </p>

                <p className="text-3xl sm:text-4xl md:text-5xl text-black font-medium leading-tight">
                  <strong>
                    Ready to try for <br className="hidden sm:block" />{" "}
                    yourself?
                  </strong>
                </p>
              </div>
              <div className="">
                <Link href={"/schedule"}>
                  <button className="w-full sm:w-auto bg-black text-white py-4 sm:py-6 px-8 sm:px-16 md:px-28 font-medium">
                    Reserve Your Reform
                  </button>
                </Link>
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
