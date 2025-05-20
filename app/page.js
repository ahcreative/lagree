"use client";
import React from "react";
import Image from "next/image";
import Footer from "./components/footer";
import Link from "next/link";
import Header from "./components/header";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Hero Section */}
      <div className="relative flex flex-col justify-center md:justify-end text-center md:text-end md:items-end items-center h-screen w-full overflow-hidden">
        <Header />

        <video
          src="/fitness.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="bg-black absolute opacity-40 z-20 h-screen w-full flex items-center"></div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex justify-center items-center w-full">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="m flex flex-col gap-6 md:gap-8 md:justify-end md:items-end">
              <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-white font-semibold mb-4 md:mb-6">
                Welcome to <br /> Lagree Eliteform
              </h1>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-8">
                <Link href="/schedule" className="w-full sm:w-auto">
                  <button className="px-6 sm:px-12 md:px-16 lg:px-20 py-3 sm:py-4 md:py-5 lg:py-6 bg-white text-black font-medium hover:bg-gray-100 transition duration-300 w-full text-sm sm:text-base">
                    Book a Class
                  </button>
                </Link>

                <Link href="/first-timers" className="w-full sm:w-auto">
                  <button className="px-6 sm:px-12 md:px-16 lg:px-20 py-3 sm:py-4 md:py-5 lg:py-6 bg-white text-black font-medium hover:bg-gray-100 transition duration-300 w-full text-sm sm:text-base">
                    New? Start Here
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="bg-white text-black py-12 md:py-20 lg:py-28">
        <div className=" mx-auto flex flex-col md:flex-row justify-center items-center px-4 sm:px-6 md:px-10 gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center w-full">
            <div className="flex flex-col gap-6 text-center md:text-left">
              <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                LAGREE FAN{" "}
                <span className="italic text-[#C8B682]">SOFIA VERGARA</span> AND
                FOUNDER
                <br />
                <span className="italic text-[#C8B682]">
                  SEBASTIEN LAGREE
                </span>{" "}
                CHAT
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                Sofia Vergara has been training with MegaFormer for many years.
                She took a moment from her busy schedule to chat with Sebastien
                Lagree.
              </p>
            </div>
          </div>

          {/* Right Video */}
          <div className="w-full ">
            <div className="relative overflow-hidden rounded-lg shadow-lg aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/FFIo5v2lNGQ"
                title="Sofia Vergara and Sebastien Lagree chat"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Science Section */}
      <div className="bg-black text-white py-12 md:py-20 lg:py-28">
        <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center gap-8 md:gap-7 px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="w-full  flex items-center justify-center">
            <Image
              src="/about3.jpg"
              alt="Lagree fitness"
              className="object-cover w-full max-w-md h-auto rounded-lg shadow-md"
              width={500}
              height={200}
              priority
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start w-full ">
            <div className="flex flex-col gap-5 md:gap-8 text-center md:text-left">
              <p className="text-base sm:text-lg md:text-xl text-gray-300">
                The Science
              </p>
              <h1 className="font-bold text-2xl md:text-3xl">
                We target your slow-twitch muscle fibers.
              </h1>
              <div className="flex flex-col gap-1">
                <p className="text-sm sm:text-base md:text-lg">
                  Activating slow-twitch muscle fibres builds lean muscle mass,
                  boosting metabolism for up to 24 hours post-class.
                </p>

                <p className="text-sm sm:text-base md:text-lg">
                  Patented equipment uses variable resistance and your own body
                  weight to target slow-twitch fibres, keeping muscles
                  challenged and preventing plateaus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-white text-black py-12 md:py-20 lg:py-28">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center px-4 sm:px-6 md:px-10 gap-8 md:gap-4">
          <div className="flex flex-col justify-center items-center  w-full">
            <div className="flex flex-col justify-center items-center  gap-6 md:gap-8 ">
              <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-6xl">
                Where results <br className="hidden sm:block" /> meet precision
              </h1>
              <p className="text-sm sm:text-base md:text-lg max-w-full md:pl-0 lg:pl-[8.9rem]">
                Our full-body, low-impact workout delivers the results
                you&apos;re after—safely and effectively.
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center mt-6 md:mt-0">
            <Image
              src="/banner.jpg"
              alt="Lagree fitness"
              className="object-cover w-full max-w-md h-auto rounded-lg shadow-md"
              width={500}
              height={200}
              priority
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
