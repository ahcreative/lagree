import React from "react";
import Footer from "../components/footer";
import HeaderWhite from "../components/headerWhite";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className=" w-full overflow-hidden">
        <HeaderWhite />
        <div className="bg-white text-black px-6 sm:px-10 md:px-16 lg:px-24 py-34">
          <div data-mariana-integrations="/buy/48730"></div>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
