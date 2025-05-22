"use client";
import React from "react";
import Footer from "../components/footer";
import HeaderWhite from "../components/headerWhite";

const Schedule = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderWhite />
      <div className="bg-white text-black h-screen flex flex-col gap-8 px-34 py-44"></div>
      <Footer />
    </div>
  );
};

export default Schedule;
