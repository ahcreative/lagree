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
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  <strong>Guest Experience Member</strong>
                </p>

                <p className="font-light text-sm sm:text-base">
                  <span className="font-bold">Reports To:</span> Studio Manager
                </p>
                <p className="font-light text-sm sm:text-base">
                  <span className="font-bold">Employment Status: </span>
                  Part-Time, 12+ hours per week
                </p>
              </div>
            </div>

            <div className="w-full flex items-center justify-center lg:justify-start mt-4 lg:mt-0">
              <img
                src="/about2.jpg"
                alt="Lagree fitness"
                className="object-center h-[300px] sm:h-[400px] md:h-[500px] w-full max-w-md lg:max-w-none"
              />
            </div>
          </div>

          {/* Second section with dates and details */}
          <div className="flex flex-col justify-start items-start px-4 sm:px-6 md:px-8 lg:px-16 gap-5 md:gap-8 w-full md:mt-0 mt-8">
            <p className="text-base sm:text-lg md:text-xl font-medium leading-tight">
              <strong>KEY RESPONSIBILITIES</strong>
            </p>

            <ul className="list-disc pl-5 flex flex-col gap-3 font-light text-sm sm:text-base">
              <li>
                Greet and engage clients in a positive and friendly manner
              </li>
              <li>
                Provide the highest level of client/customer service and
                hospitality to all clients/prospective clients
              </li>
              <li>
                Share pricing and class information with prospective clients
              </li>
              <li>Deliver Megaformer machine demos to new clients</li>
              <li>Complete studio tours with new clients</li>
              <li>
                Work alongside and support LW instructors to ensure a successful
                and seamless client check-in and class experience
              </li>
              <li>Ensure complete knowledge of Mariana Tek system</li>
              <li>
                Assist Management with day-to-day operations of the studio
              </li>
              <li>
                Ensure prompt response to studio emails; notify Studio Lead if
                needed
              </li>
              <li>
                Understand Lagree Eliteform product knowledge, policies and
                procedures for retail operations
              </li>
              <li>Complete basic Megaformer machine maintenance</li>
              <li>
                Actively maintain studio cleanliness and organization between
                each class so each client receives the best LW experience
              </li>
              <li>Assist in retail inventory at the end of the month</li>

              <li>Complete opening and/or closing checklists</li>

              <li>Perform other studio duties as needed</li>
            </ul>

            <p className="text-base sm:text-lg md:text-xl font-medium leading-tight">
              <strong>QUALIFICATIONS</strong>
            </p>
            <ul className="list-disc flex flex-col gap-3 pl-5 font-light text-sm sm:text-base">
              <li>Mariana Tek software experience a plus</li>
              <li>Leadership experience a plus</li>
              <li>Must have superior customer service skills</li>
              <li>
                Must have excellent interpersonal skills and a service-oriented
                outlook
              </li>
              <li>Must be highly organized</li>
              <li>Ability to work independently as well as on a team</li>
              <li>
                Should have a strong ability to communicate clearly with team
                members, clients and senior management
              </li>
              <li>
                Must be able to move and/or lift heavy items, up to 50 lbs.
              </li>
            </ul>

            <p className="text-base sm:text-lg md:text-xl font-medium leading-tight">
              <strong>QUALIFICATIONS</strong>
            </p>
            <ul className="list-disc flex flex-col gap-1 pl-5 font-light text-sm sm:text-base">
              <li>
                Must be available to work:
                <ul className="list-disc flex flex-col gap-1 pl-5 font-light text-sm sm:text-base">
                  <li>12 hours per week, 2-3 shifts</li>
                  <li>
                    Ability to work flexible hours; early morning/late night/
                    weekends
                  </li>
                  <li>Some holidays (open year-round)</li>
                </ul>
              </li>
            </ul>

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
