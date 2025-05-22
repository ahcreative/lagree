"use client";
import React from "react";
import Footer from "../components/footer";
import Link from "next/link";
import HeaderWhite from "../components/headerWhite";

const Carrers = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
      <HeaderWhite />

      <div className="bg-white text-black py-34 px-4 md:px-16 lg:px-24">
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
          <div className="flex flex-col   gap-10">
            <Link href={"/careers/studio-manager"}>
              <div className="flex flex-col justify-center items-center gap-2">
                <img
                  src="/trainer.jpeg"
                  className="h-[200px] w-[200px] object-cover hover:opacity-70 transition duration-300"
                  alt=""
                />
                <h1 className="font-bold">Studio Manager</h1>
              </div>
            </Link>
            <Link href={"/careers/instructor"}>
              <div className="flex flex-col  justify-center items-center gap-2">
                <img
                  src="/front.jpeg"
                  className="h-[200px] w-[200px] object-cover hover:opacity-70 transition duration-300"
                  alt=""
                />
                <h1 className="font-bold">Instructor</h1>
              </div>
            </Link>
            <Link href={"/careers/front-of-house"}>
              <div className="flex flex-col justify-center items-center gap-2">
                <img
                  src="/trainer2.jpeg"
                  className="h-[200px] w-[200px]  hover:opacity-70 transition duration-300"
                  alt=""
                />
                <h1 className="font-bold">Front House</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Carrers;
