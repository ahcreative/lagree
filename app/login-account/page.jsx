import React from "react";
import Footer from "../components/footer";
import HeaderWhite from "../components/headerWhite";

const LoginAccount = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className=" w-full overflow-hidden">
        <HeaderWhite />
        <div className="bg-white text-black minpx-6 sm:px-10 md:px-16 lg:px-24 py-34">
          <div data-mariana-integrations="/account"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginAccount;
