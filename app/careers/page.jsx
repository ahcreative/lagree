"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Community = () => {
  const [openClass, setOpenClass] = useState(null);

  const toggleClass = (className) => {
    if (openClass === className) {
      setOpenClass(null);
    } else {
      setOpenClass(className);
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
      <div className="relative h-screen flex flex-col w-full overflow-hidden">
        <Header />

        <img
          src="/careers.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt="Careers banner"
        />
        {/* Content Section */}
        <div className="relative bg-black opacity-80 z-10 w-full h-screen"></div>

        <div className="absolute z-20 h-full flex items-center w-full">
          <div className="w-full mx-auto px-4 md:px-12">
            <div className="px-4 md:px-24 flex flex-col gap-6 md:gap-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-semibold mb-4 md:mb-6">
                Careers
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white">
                We are always looking for good humans to join our team!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-black py-16 md:py-28 px-4 md:px-16 lg:px-24">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-black">Join Our Team</h1>
            <p className="text-lg">
              In our customer-focused business, our team thrives on genuine
              connection, let integrity guide their actions, and use their
              entrepreneurial spirit to solve problems. Did we mention they are
              mega obsessed with the Megaformer?! Sound like you? Click below to
              view available job postings.{" "}
            </p>
          </div>
          <div className="flex flex-col md:flex-row  gap-10">
            <Link href={"/careers/trainer-cq"}>
              <div className="flex flex-col justify-center items-center gap-2">
                <img
                  src="/trainer.jpg"
                  className="h-[200px] object-cover hover:opacity-70 transition duration-300"
                  alt=""
                />
                <h1 className="font-bold">Trainer---Coquitlam</h1>
              </div>
            </Link>
            <Link href={"/careers/front-of-house"}>
              <div className="flex flex-col  justify-center items-center gap-2">
                <img
                  src="/front.jpg"
                  className="h-[200px] object-cover hover:opacity-70 transition duration-300"
                  alt=""
                />
                <h1 className="font-bold">Front of House</h1>
              </div>
            </Link>
            <Link href={"/careers/trainer"}>
              <div className="flex flex-col justify-center items-center gap-2">
                <img
                  src="/trainer2.jpeg"
                  className="h-[200px] object-cover hover:opacity-70 transition duration-300"
                  alt=""
                />
                <h1 className="font-bold">Trainer</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Community;
