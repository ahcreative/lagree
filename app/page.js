"use client";
import React from "react";
import Image from "next/image";
import Footer from "./components/footer";
import Link from "next/link";
import Header from "./components/header";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="relative flex flex-col justify-end text-end items-end h-screen w-full overflow-hidden">
        <Header />

        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/cover.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Section */}
        <div className="relative z-20 h-full flex  items-center">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="md:ml-20 mt-5 flex flex-col gap-6 md:gap-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl text-white font-semibold mb-4 md:mb-6">
                Welcome to <br /> Lagree Eliteform
              </h1>

              <div className="flex flex-col justify-end sm:flex-row gap-4 sm:gap-8 mt-4 sm:mt-8">
                <Link href="/schedule">
                  <button className="px-8 sm:px-16 md:px-26 py-4 sm:py-7 bg-white text-black font-medium hover:bg-gray-100 transition duration-300 w-full sm:w-auto">
                    Book a Class
                  </button>
                </Link>

                <Link href="/first-timers">
                  <button className="px-8 sm:px-16 md:px-26 py-4 sm:py-7 bg-white text-black font-medium hover:bg-gray-100 transition duration-300 w-full sm:w-auto mt-4 sm:mt-0">
                    New? Start Here
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-5 h-screen w-full overflow-hidden">
        <img
          src="/banner.jpg"
          className="absolute w-full h-full object-cover z-0"
          alt=""
        />
        {/* Content Section */}
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="ml-4 md:ml-20 mt-5 flex flex-col gap-8">
              <h1
                className={`text-3xl md:text-5xl lg:text-7xl text-white font-semibold mb-6`}
              >
                Where results <br /> meet precision
              </h1>

              <div>
                <p className="text-lg md:text-xl">
                  Our full-body, low-impact workout delivers the results
                  you&apos;re <br className="hidden md:block" />
                  after—safely and effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Muscle fibers section */}
      <div className="bg-white py-16 md:py-28">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-2 px-4 sm:px-6 md:px-10">
          {/* Left section */}
          <div className="flex flex-col gap-8 md:gap-24 justify-start items-start w-full md:w-1/2">
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl text-black font-medium leading-tight">
                <strong>
                  We target slow <br className="hidden sm:block" /> twitch
                  muscle fibres.
                </strong>
              </p>
            </div>
            <div className="w-full md:w-auto">
              <Link href={"/whylagree"}>
                <button className="bg-black text-white py-4 md:py-6 px-6 sm:px-16 md:px-28 self-start font-light w-full md:w-auto">
                  <strong>Learn the science behind lagree</strong>
                </button>
              </Link>
            </div>
          </div>

          {/* Right section - Image container */}
          <div className="mt-8 md:mt-0 md:mr-10 h-fit w-full md:w-1/2 flex items-center justify-center">
            <Image
              src="/pic1.jpg"
              alt="Lagree fitness"
              className="w-full object-cover"
              width={500}
              height={200}
            />
          </div>
        </div>
      </div>

      {/* Vancouver Classes Section */}
      <div className="bg-[#F5F5F5] py-16 md:py-28">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-2 px-4 sm:px-6 md:px-10">
          {/* Left section */}
          <div className="flex flex-col gap-8 md:gap-24 justify-start items-start w-full md:w-1/2">
            <div className="flex flex-col gap-6 md:gap-10">
              <p className="text-3xl sm:text-4xl md:text-5xl text-black font-medium leading-tight">
                <strong>Vancouver Classes</strong>
              </p>
              <p className="text-black text-base md:font-xl font-medium">
                For beginners to fitness fanatics. We promise to meet you where
                you are <br className="hidden md:block" /> at, yet always push
                you to your limit.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <button className="bg-black text-white py-4 md:py-6 px-6 sm:px-16 md:px-28 font-medium self-start w-full md:w-auto">
                Book Vancouver
              </button>
            </div>
          </div>

          {/* Right section - Image container */}
          <div className="mt-8 md:mt-0 md:mr-10 w-full md:w-1/2 flex items-center justify-center">
            <Image
              src="/combinePhoto.jpg"
              alt="Lagree fitness"
              className="w-[500px] rounded-xl h-[500px] "
              width={500}
              height={200}
            />
          </div>
        </div>
      </div>

      {/* Community Initiatives Section */}
      <div className="bg-black text-white py-16 md:py-52 justify-center items-center h-auto md:h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full justify-center items-center">
          <img
            src="/lagree-vs-pilates-video.jpg"
            alt="Community banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content overlay */}
        <div className="container relative z-10 mx-auto flex flex-col md:flex-row justify-center md:justify-end items-center md:items-end px-4 sm:px-6 md:pr-12 lg:pr-52 py-12 md:py-0">
          <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-end items-center md:items-end gap-6 md:gap-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-center md:text-right">
              <strong>Community Initiatives</strong>
            </h2>

            <div className="w-full md:w-auto">
              <button className="bg-white text-black py-4 md:py-6 px-6 sm:px-16 md:px-28 font-medium w-full md:w-auto">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
