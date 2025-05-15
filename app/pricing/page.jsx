"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Link from "next/link";
import { ChevronLeft, Menu, X } from "lucide-react";

const FirstTimers = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bookSubmenuState, setBookSubmenuState] = useState("none"); // none, region, location, actions
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const selectLocation = (location) => {
    setSelectedLocation(location);
    setBookSubmenuState("actions");
  };

  const backToRegion = () => {
    setBookSubmenuState("region");
  };

  const handleBookClick = (e) => {
    e.preventDefault();
    setBookSubmenuState("region");
  };

  const selectRegion = (region) => {
    setSelectedRegion(region);
    setBookSubmenuState("actions");
  };

  const backToLocation = () => {
    setBookSubmenuState("region");
  };

  const renderSubmenu = () => {
    if (bookSubmenuState === "region") {
      return (
        <div className="absolute   flex flex-col top-full -left-16 justify-start items-start mt-2 bg-white text-black w-[300px]  p-5  ">
          <h3 className=" text-lg font-bold mb-3">Choose Region:</h3>
          <button
            onClick={() => selectRegion("Vancouver")}
            className="w-full text-center  bg-black text-white  px-8 py-4 "
          >
            Vancouver
          </button>
        </div>
      );
    } else if (bookSubmenuState === "actions") {
      return (
        <div className="absolute   flex flex-col top-full -left-16 justify-start items-start mt-2 bg-white text-black w-[300px]  p-5 ">
          <button
            onClick={backToLocation}
            className="flex items-center text-gray-400 text-sm  mb-3"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to location
          </button>
          <h3 className=" text-sm font-black mb-3">Vancouver:</h3>
          <a
            href={`/schedule/${selectedLocation}`}
            className="block w-full text-center  bg-black text-white mb-2 px-14 py-4"
          >
            Book Now
          </a>
          <a
            href={`/pricing/${selectedLocation}`}
            className="block w-full text-center  bg-none text-black border-2 hover:bg-black hover:text-white  border-black mb-2 px-8 py-4"
          >
            Buy Now
          </a>
        </div>
      );
    }
    return null;
  };

  const renderMobileSubmenu = () => {
    if (bookSubmenuState === "region") {
      return (
        <div className="mt-4 flex flex-col items-center space-y-4">
          <h3 className="text-black bg-white px-6 text-sm font-medium">
            Choose Region
          </h3>
          <button
            onClick={() => selectRegion("Vancouver")}
            className="text-white bg-gray-800 hover:bg-gray-700 p-2 rounded w-48 transition"
          >
            Vancouver
          </button>
        </div>
      );
    } else if (bookSubmenuState === "actions") {
      return (
        <div className="mt-4 flex flex-col items-center space-y-4">
          <button
            onClick={backToLocation}
            className="flex items-center text-white text-sm font-medium hover:text-gray-300"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to location
          </button>
          <h3 className="text-white text-sm font-medium">{selectedLocation}</h3>
          <a
            href={`/schedule`}
            className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded w-48 transition"
          >
            Book Now
          </a>
          <a
            href={`/pricing`}
            className="text-white bg-green-600 hover:bg-green-700 p-2 rounded w-48 transition"
          >
            Buy Now
          </a>
        </div>
      );
    }
    return null;
  };

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        bookSubmenuState !== "none" &&
        !event.target.closest(".book-menu-container")
      ) {
        setBookSubmenuState("none");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [bookSubmenuState]);
  return (
    <div className="min-h-screen flex flex-col">
      <div className=" h-screen w-full overflow-hidden">
        <nav
          className={`fixed top-0 left-0 right-0 z-50 py-3 h-[100px] flex justify-center items-center transition-all duration-300 bg-black`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href={"/"}>
                <div className="flex gap-2 items-center">
                  <img src="/icon.png" className="h-14 md:h-18" alt="" />
                  <img src="/logo.png" className="h-14 md:h-18" alt="" />
                </div>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center font-medium pr-10 uppercase space-x-8">
                <a
                  href="/login-account"
                  className="text-white hover:text-gray-300 transition"
                >
                  My Account
                </a>
                <div className="relative book-menu-container">
                  <a
                    href="#"
                    onClick={handleBookClick}
                    className="text-white hover:text-gray-300 transition"
                  >
                    Book/Buy
                  </a>
                  {renderSubmenu()}
                </div>
                <a
                  href="/whylagree"
                  className="text-white hover:text-gray-300 transition"
                >
                  Why lagree?
                </a>

                <a
                  href="/mobileapp"
                  className="text-white hover:text-gray-300 transition"
                >
                  Mobile App
                </a>
              </div>

              {/* Mobile Menu Button - Always positioned here */}
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-white focus:outline-none z-[100] relative"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu - separated from the button */}
          {isMobileMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-black z-40 pt-[100px]">
              <div className="flex flex-col items-center space-y-8 p-4">
                <a
                  href="/login-account"
                  className="text-white hover:text-gray-300 transition"
                >
                  My Account
                </a>
                <div className="book-menu-container">
                  {bookSubmenuState === "none" ? (
                    <a
                      href="#"
                      onClick={handleBookClick}
                      className="text-white hover:text-gray-300 transition"
                    >
                      Book/Buy
                    </a>
                  ) : (
                    renderMobileSubmenu()
                  )}
                </div>
                <a
                  href="/whylagree"
                  className="text-white hover:text-gray-300 transition"
                >
                  Why lagree?
                </a>
                <a
                  href="/studiopolicies"
                  className="text-white hover:text-gray-300 transition"
                >
                  Studio Policies
                </a>
                <a
                  href="/mobileapp"
                  className="text-white hover:text-gray-300 transition"
                >
                  Mobile App
                </a>
              </div>
            </div>
          )}
        </nav>
        <div className="bg-white text-black h-screen flex flex-col gap-8 px-34 py-44"></div>
      </div>
      <Footer />
    </div>
  );
};

export default FirstTimers;
