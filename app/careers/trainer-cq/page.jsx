"use client";
import React, { useState } from "react";

import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
      <div className="relative h-[100px] overflow-hidden">
        <Header />
      </div>

      <div className="bg-white text-black py-8 md:py-16 lg:py-28">
        <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 md:px-10">
          {/* First section with image */}
          <div className="flex flex-col lg:flex-row w-full gap-8 md:gap-12 lg:gap-16">
            <div className="flex flex-col gap-6 md:gap-12 lg:gap-24 px-4 sm:px-6 md:px-8 lg:px-16 w-full">
              <div className="flex flex-col justify-start items-start gap-5 md:gap-8 w-full">
                <p className="text-xs">
                  <span className="font-black">Coquitlam Only.</span> For
                  Vancouver, we will be hiring again in the fall!
                </p>

                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  <strong>Trainer</strong>
                </p>

                <p className="font-light text-sm sm:text-base">
                  Our training program will teach you everything you need to
                  know about the Lagree Fitness method, the Megaformer and how
                  to teach and motivate clients to become the strongest version
                  of themselves. Our unique classes are high energy, low impact
                  and full body. The combination of strength training, Pilates,
                  and cardio will leave you shaking, sweating, and completely
                  addicted.
                </p>

                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                  <strong>Requirements</strong>
                </p>

                <ul className="list-disc pl-5 font-light text-sm sm:text-base">
                  <li>50+ Lagree classes or</li>
                  <li>
                    10+ Lagree classes and 2-3 years of teaching experience
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full flex items-center justify-center lg:justify-start mt-4 lg:mt-0">
              <img
                src="/about1.jpg"
                alt="Lagree fitness"
                className="object-cover h-[300px] sm:h-[400px] md:h-[500px] w-full max-w-md lg:max-w-none"
              />
            </div>
          </div>

          {/* Second section with dates and details */}
          <div className="flex flex-col justify-start items-start px-4 sm:px-6 md:px-8 lg:px-16 gap-5 md:gap-8 w-full mt-8 md:mt-12 lg:mt-20">
            <p className="font-light text-sm sm:text-base">
              The next training dates will be announced here and on our social
              media, and will likely take place in late summer or fall of 2025.
            </p>

            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              <strong>Training Dates</strong>
            </p>

            <p className="text-base sm:text-lg md:text-xl font-medium leading-tight">
              <strong>You must be available for all dates below</strong>
            </p>

            <ul className="list-disc pl-5 font-light text-sm sm:text-base">
              <li>Friday, June 6th — 1:30pm - 7:00pm</li>
              <li>Saturday, June 7th — 1:30pm - 7:00pm</li>
              <li>Sunday, June 8th — 1:30pm - 7:00pm</li>
              <li>Friday, June 13th — 1:30pm - 7:00pm</li>
              <li>Saturday, June 14th — 1:30pm - 7:00pm</li>
              <li>Sunday, June 15th — 1:30pm - 7:00pm</li>
            </ul>

            <p className="text-base sm:text-lg md:text-xl font-medium leading-tight">
              <strong>Training Weekends take place in Vancouver.</strong>
            </p>

            <p className="font-light text-sm sm:text-base">
              In the training, we will do two intensive weekends to learn the
              method and how to teach it, and then we go into practice sessions
              approx. 3-6 hours a week (group and individually)
              <br className="hidden md:block" /> for about 6-8 weeks before
              entering Friends and Family classes. Every trainer is unique so
              how long it takes to get to Friends and Family classes as well as
              Trainer Development
              <br className="hidden md:block" />
              classes is up to the individual.
            </p>

            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              <strong>Cost:</strong>
            </p>

            <ul className="list-disc pl-5 font-light text-sm sm:text-base">
              <li>
                Training 2399 + GST — which includes passes to take class. We do
                offer payment plans as well if needed.
              </li>
              <li>
                Additional Costs: Purchase of stopwatch ($15) and headset ($100)
              </li>
              <li>CPR certification ($65-$100)</li>
              <li>
                Purchase of liability insurance
                <ul className="list-disc ml-5">
                  <li>minimum of $2 million</li>
                  <li>
                    $200-$400 annually, varies depending on where else you teach
                  </li>
                  <li>Mandatory once you graduate to be on the floor</li>
                </ul>
              </li>
            </ul>

            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              <strong>How to Apply:</strong>
            </p>

            <p className="text-base sm:text-lg md:text-xl font-medium leading-tight">
              <strong>
                Applications close May 8th at 5pm. We will be selecting
                applicants to audition in person in May.
              </strong>
            </p>

            <div className="w-full flex justify-center sm:justify-start my-4">
              <button className="bg-none border border-black text-black hover:bg-black hover:text-white py-3 px-6 sm:px-12 md:px-20 lg:px-28 font-medium transition-colors duration-300 w-full sm:w-auto">
                Apply Here
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Community;
