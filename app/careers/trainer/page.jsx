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
                <p className="text-lg">Join the waitlist below</p>

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
                  <li>100+ Lagree classes or</li>
                  <li>
                    25+ Lagree classes and 2-3 years of teaching experience
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
            <div className="mt-8 md:mt-0 h-fit w-full  text-black flex items-center justify-center md:justify-start">
              <form
                className="w-full px-4"
                onSubmit={(e) => {
                  e.preventDefault();

                  // Get form data
                  const formData = new FormData(e.target);
                  const firstName = formData.get("firstName");
                  const lastName = formData.get("lastName");
                  const email = formData.get("email");

                  // Create email content
                  const mailtoLink = `mailto:setarehkopahi@gmail.com?subject=Join The Waitlist &body=Name: ${firstName} ${lastName}%0D%0AEmail: ${email}`;

                  // Open email client
                  window.open(mailtoLink);

                  // Reset form
                  e.target.reset();

                  // Show success message (optional)
                  toast.success("Successfully Sent!");
                }}
              >
                <div className="mb-10">
                  <label className="block text-lg   mb-4">
                    Name{" "}
                    <span className="text-sm text-gray-700">(required)</span>
                  </label>
                  <div className="flex flex-col justify-center items-center  gap-4">
                    <div className="flex gap-4 w-full">
                      <div className="w-1/2">
                        <label className="block text-gray-700  font-light ">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          className="w-full  px-4 py-2 border-b border-black  focus:outline-none"
                          required
                        />
                      </div>
                      <div className="w-1/2">
                        <label className="block text-gray-700  font-light ">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          className="w-full  px-4 py-2 border-b border-black  focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-lg   mb-1">
                    Email{" "}
                    <span className="text-sm text-gray-700">(required)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full  px-4 py-2 border-b border-black  focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-none border w-full border-black text-black hover:bg-black hover:text-white md:py-8 md:px-28 py-4  font-medium  transition-colors duration-300"
                >
                  JOIN THE WAITLIST
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Community;
