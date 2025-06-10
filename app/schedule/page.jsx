import React from "react";
import Footer from "../components/footer";
import HeaderWhite from "../components/headerWhite";

const Schedule = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className=" w-full overflow-hidden">
        <HeaderWhite />
        <div className="bg-white text-black px-6 sm:px-10 md:px-16 lg:px-24 py-34">
          <div data-mariana-integrations="/schedule/daily/48547?locations=48730"></div>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;
