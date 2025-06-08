"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronLeft, ChevronDown } from "lucide-react";
import Link from "next/link";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(""); // tracks which submenu is open
  const [selectedRegion, setSelectedRegion] = useState("");

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
    setActiveSubmenu(""); // Close any open submenus when toggling mobile menu
  };

  const handleSubmenuClick = (submenuName, e) => {
    e.preventDefault();
    setActiveSubmenu(activeSubmenu === submenuName ? "" : submenuName);
  };

  // Handle mobile submenu item clicks
  const handleMobileSubmenuItemClick = () => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu("");
  };

  const renderDesktopSubmenu = (submenuType) => {
    const baseClasses =
      "absolute top-full left-0 mt-2 bg-white flex flex-col w-full text-black justify-center items-center min-w-[250px] p-4 shadow-lg  z-50";

    switch (submenuType) {
      case "studio":
        return (
          <div className={baseClasses}>
            <h3 className="text-lg w-full  justify-center items-center flex flex-col  font-bold mb-3 border-b pb-2">
              Studio Overview
            </h3>
            <div className="space-y-2">
              <a
                href="/whylagree"
                className="block hover:bg-gray-100 px-3 py-2 rounded"
              >
                Why Lagree?
              </a>
              {/* <a
                href="/studio-photos"
                className="block hover:bg-gray-100 px-3 py-2 rounded"
              >
                Studio Photos
              </a> */}
              {/* <a
                href="/first-timers"
                className="block hover:bg-gray-100 px-3 py-2 rounded"
              >
                First-Timer Info
              </a> */}
              <a
                href="/studiopolicies"
                className="block hover:bg-gray-100 px-3 py-2 rounded"
              >
                Studio Rules
              </a>
            </div>
          </div>
        );

      case "pricing":
        return (
          <div className={baseClasses}>
            <h3 className="text-lg w-full justify-center items-center flex flex-col  font-bold mb-3 border-b pb-2">
              Pricing Options
            </h3>
            <div className="space-y-2">
              <a
                href="/pricing"
                className="block hover:bg-gray-100 px-3 py-2 rounded"
              >
                Class Packages
              </a>
              <a
                href="/private-sessions"
                className="block hover:bg-gray-100 px-3 py-2 rounded"
              >
                Private Sessions
              </a>
              <a
                href="/first-timers"
                className="block hover:bg-gray-100 px-3 py-2 rounded"
              >
                First-Time Offers
              </a>
              <a
                href="/gift-card"
                className="block hover:bg-gray-100 px-3 py-2 rounded"
              >
                Gift Cards
              </a>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderMobileSubmenu = (submenuType) => {
    const baseClasses = "mt-2 ml-4 space-y-3";

    switch (submenuType) {
      case "studio":
        return (
          <div className={baseClasses}>
            <a
              href="/whylagree"
              className="block text-gray-300 text-lg pl-4"
              onClick={handleMobileSubmenuItemClick}
            >
              Why Lagree?
            </a>
            {/* <a
              href="/studio-photos"
              className="block text-gray-300 text-lg pl-4"
              onClick={handleMobileSubmenuItemClick}
            >
              Studio Photos
            </a> */}
            {/* <a 
              href="/first-timer" 
              className="block text-gray-300 text-lg pl-4"
              onClick={handleMobileSubmenuItemClick}
            >
              First-Timer Info
            </a> */}
            <a
              href="/studiopolicies"
              className="block text-gray-300 text-lg pl-4"
              onClick={handleMobileSubmenuItemClick}
            >
              Studio Rules
            </a>
          </div>
        );

      case "pricing":
        return (
          <div className={baseClasses}>
            <a
              href="/pricing"
              className="block text-gray-300 text-lg pl-4"
              onClick={handleMobileSubmenuItemClick}
            >
              Class Packages
            </a>
            <a
              href="/private-sessions"
              className="block text-gray-300 text-lg pl-4"
              onClick={handleMobileSubmenuItemClick}
            >
              Private Sessions
            </a>
            <a
              href="/first-timers"
              className="block text-gray-300 text-lg pl-4"
              onClick={handleMobileSubmenuItemClick}
            >
              First-Time Offers
            </a>
            <a
              href="/gift-card"
              className="block text-gray-300 text-lg pl-4"
              onClick={handleMobileSubmenuItemClick}
            >
              Gift Cards
            </a>
          </div>
        );

      default:
        return null;
    }
  };

  // Close submenu when clicking outside (only for desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only handle click outside for desktop (when mobile menu is not open)
      if (
        !isMobileMenuOpen &&
        activeSubmenu !== "" &&
        !event.target.closest(".submenu-container")
      ) {
        setActiveSubmenu("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeSubmenu, isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-3 h-[100px] w-screen flex justify-center items-center transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"}>
            <div className="flex gap-2 items-center">
              <img src="/icon.png" className="h-10 md:h-14" alt="" />
              <img src="/logo.png" className="h-10 md:h-14" alt="" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center font-medium pr-10 uppercase space-x-6">
            <a
              href="/login-account"
              className="text-white hover:text-gray-300 transition"
            >
              My Account
            </a>
            {/* Studio Overview Dropdown */}
            <div className="relative submenu-container">
              <a
                href="#"
                onClick={(e) => handleSubmenuClick("studio", e)}
                className="text-white hover:text-gray-300 transition flex items-center"
              >
                Studio
                <ChevronDown size={16} className="ml-1" />
              </a>
              {activeSubmenu === "studio" && renderDesktopSubmenu("studio")}
            </div>

            {/* Trainers */}
            {/* <a
              href="/carrers"
              className="text-white hover:text-gray-300 transition"
            >
              Trainers
            </a> */}

            {/* Pricing Dropdown */}
            <div className="relative submenu-container">
              <a
                href="#"
                onClick={(e) => handleSubmenuClick("pricing", e)}
                className="text-white hover:text-gray-300 transition flex items-center"
              >
                Pricing
                <ChevronDown size={16} className="ml-1" />
              </a>
              {activeSubmenu === "pricing" && renderDesktopSubmenu("pricing")}
            </div>

            {/* Schedule */}
            <a
              href="/schedule"
              className="text-white hover:text-gray-300 transition"
            >
              Schedule
            </a>

            {/* Contact */}
            <a
              href="/contact"
              className="text-white hover:text-gray-300 transition"
            >
              Contact
            </a>

            {/* Mobile App */}
            <a href="/" className="text-white hover:text-gray-300 transition">
              Mobile App
            </a>

            {/* My Account */}
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed justify-center items-start inset-0 bg-black z-40 pt-[120px] overflow-y-auto">
          <div className="flex flex-col justify-center items-center space-y-6 p-6">
            {/* Studio Overview */}
            <div className="flex flex-col">
              <a
                href="#"
                onClick={(e) => handleSubmenuClick("studio", e)}
                className="text-white text-2xl hover:text-gray-300 transition flex items-center justify-between"
              >
                Studio Overview
              </a>
              {activeSubmenu === "studio" && renderMobileSubmenu("studio")}
            </div>

            {/* Trainers */}
            {/* <a
              href="/trainers"
              className="text-white text-2xl hover:text-gray-300 transition"
            >
              Trainers
            </a> */}

            {/* Pricing */}
            <div className="flex flex-col justify-center items-center">
              <a
                href="#"
                onClick={(e) => handleSubmenuClick("pricing", e)}
                className="text-white text-2xl hover:text-gray-300 transition flex flex-col items-center justify-center"
              >
                Pricing
              </a>
              {activeSubmenu === "pricing" && renderMobileSubmenu("pricing")}
            </div>

            {/* Schedule */}
            <a
              href="/schedule"
              className="text-white text-2xl hover:text-gray-300 transition"
            >
              Schedule
            </a>

            {/* Contact */}
            <a
              href="/contact"
              className="text-white text-2xl hover:text-gray-300 transition"
            >
              Contact
            </a>

            {/* Mobile App */}
            <a
              href="/mobileapp"
              className="text-white text-2xl hover:text-gray-300 transition"
            >
              Mobile App
            </a>

            {/* My Account */}
            <a
              href="/login-account"
              className="text-white text-2xl hover:text-gray-300 transition"
            >
              My Account
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
