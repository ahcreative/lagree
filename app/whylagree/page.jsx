"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const About = () => {
  const [openClass, setOpenClass] = useState(null);
  const [activeSection, setActiveSection] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bookSubmenuState, setBookSubmenuState] = useState("none"); // none, region, location, actions
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const toggleSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  const toggleClass = (className) => {
    if (openClass === className) {
      setOpenClass(null);
    } else {
      setOpenClass(className);
    }
  };

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
        <div className="absolute flex flex-col top-full -left-16 justify-start items-start mt-2 bg-white text-black w-[300px] p-5">
          <h3 className="text-lg font-bold mb-3">Choose Region:</h3>
          <button
            onClick={() => selectRegion("Vancouver")}
            className="w-full text-center bg-black text-white px-8 py-4"
          >
            Vancouver
          </button>
        </div>
      );
    } else if (bookSubmenuState === "actions") {
      return (
        <div className="absolute flex flex-col top-full -left-16 justify-start items-start mt-2 bg-white text-black w-[300px] p-5">
          <button
            onClick={backToLocation}
            className="flex items-center text-gray-400 text-sm mb-3"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to location
          </button>
          <h3 className="text-sm font-black mb-3">Vancouver:</h3>
          <a
            href={`/schedule`}
            className="block w-full text-center bg-black text-white mb-2 px-14 py-4"
          >
            Book Now
          </a>
          <a
            href={`/pricing`}
            className="block w-full text-center bg-none text-black border-2 hover:bg-black hover:text-white border-black mb-2 px-8 py-4"
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
          <h3 className="text-black bg-white px-14 py-4  font-medium">
            Choose Region
          </h3>
          <button
            onClick={() => selectRegion("Vancouver")}
            className="text-white border border-white px-14 py-4  rounded w-48 transition"
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
            className="flex items-center text-gray-400 text-sm mb-3"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to location
          </button>
          <h3 className="text-sm font-black mb-3">Vancouver:</h3>
          <a
            href={`/schedule`}
            className="block w-full text-center bg-white text-black mb-2 px-14 py-4"
          >
            Book Now
          </a>
          <a
            href={`/pricing`}
            className="block w-full text-center bg-none text-white border-2  border-white mb-2 px-8 py-4"
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
      <div className="  w-full overflow-hidden">
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
            <div className="md:hidden fixed justify-center items-center inset-0 bg-black z-40 pt-[100px]">
              <div className="flex flex-col justify-center items-center space-y-8 p-4">
                <a
                  href="/login-account"
                  className="text-white text-2xl hover:text-gray-300 transition"
                >
                  My Account
                </a>
                <div className="book-menu-container">
                  {bookSubmenuState === "none" ? (
                    <a
                      href="#"
                      onClick={handleBookClick}
                      className="text-white text-2xl hover:text-gray-300 transition"
                    >
                      Book/Buy
                    </a>
                  ) : (
                    renderMobileSubmenu()
                  )}
                </div>
                <a
                  href="/whylagree"
                  className="text-white text-2xl hover:text-gray-300 transition"
                >
                  Why lagree?
                </a>

                <a
                  href="/mobileapp"
                  className="text-white text-2xl hover:text-gray-300 transition"
                >
                  Mobile App
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>

      <div className="bg-white text-black flex flex-col gap-5 px-4 sm:px-8 md:px-12 lg:px-48  pt-34 pb-10 ">
        <h1 className="text-3xl md:text-4xl font-bold">
          ABOUT LAGREE ELITEFORM
        </h1>
        <p className="text-base md:text-lg font-light">
          We are proud to bring Vancouver the cutting edge of fitness with the
          transformative Lagree Method, created by Sebastien Lagree. At Lagree
          EliteForm, we deliver a high-intensity, low-impact, full-body workout
          that fuses strength training, core engagement, muscle endurance,
          cardio, and deep stretching into an effective 45-minute experience.
        </p>
        <p className="text-base md:text-lg font-light">
          We are the only Lagree studio in Vancouver equipped with the latest
          Mega Pro™ machines, Lagree's most advanced and versatile equipment to
          date. This next-generation machine elevates the Lagree experience with
          unmatched precision, resistance, and functionality.
        </p>
        <p className="text-base md:text-lg font-light">
          Designed for all fitness levels, the Lagree Method provides
          results-driven workouts that challenge the body while protecting the
          joints. Our studio is built on a foundation of precision, consistency,
          and excellence—from our class structure and training standards to the
          overall client experience.
        </p>
        <p className="text-base md:text-lg font-light">
          Experience the evolution of fitness at Lagree EliteForm—where strength
          meets precision, and form is everything.
        </p>
      </div>

      <div className="flex flex-col gap-3 justify-center items-center pt-10 text-white bg-black">
        <h1 className="text-3xl md:text-4xl font-bold mt-10 px-4 text-center">
          MEET THE MEGAPRO
        </h1>
        <p className="text-base md:text-lg font-light px-4 text-center">
          It challenges you, sculpts you—and keeps you coming back for more.
        </p>
        <img src="/megapro.jpg" className="w-full h-full object-cover" alt="" />
      </div>

      <div className="bg-black py-16 md:py-28">
        <div className="container flex flex-col md:flex-row items-center justify-center md:items-start gap-10 md:gap-20 px-4 sm:px-6 md:px-10">
          {/* Right section - Image container */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <Image
              src="/about1.jpg"
              alt="Lagree fitness"
              className="object-cover"
              width={500}
              height={200}
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-24 justify-start items-start">
            <div className="flex flex-col text-white justify-start items-start gap-3 w-full">
              <p className="text-3xl md:text-5xl text-white font-medium leading-tight">
                <strong>Invest in yourself</strong>
              </p>

              <p className="text-base text-white md:text-lg">
                This method delivers. Sculpt long, lean muscle and transform
                your body with precision and purpose.
              </p>

              <p>
                <span className="text-lg text-white md:text-xl font-bold">
                  Tailored attention.
                </span>
                <p className="text-base text-white md:text-lg">
                  With small class sizes, you'll receive personalized guidance
                  to maximize every movement.
                </p>
              </p>

              <p>
                <span className="text-lg text-white md:text-xl font-bold">
                  Empowerment over ego.
                </span>
                <p className="text-base text-white md:text-lg">
                  Our expert instructors motivate with compassion—challenging
                  you while meeting you where you are.
                </p>
              </p>

              <p>
                <span className="text-lg text-white md:text-xl font-bold">
                  Inclusive by design.
                </span>
                <p className="text-base text-white md:text-lg">
                  Everybody is welcome. No matter your level, you belong
                  here—and you can sweat with us.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-16 md:py-28">
        <div className="flex flex-col md:flex-row justify-center items-center px-4 sm:px-6 md:px-10">
          {/* Image container */}
          <div className="w-full flex items-center justify-center mb-8 md:mb-0">
            <Image
              src="/whylagree.jpg"
              alt="Lagree fitness"
              className=" object-cover"
              width={500}
              height={200}
            />
          </div>

          <div className="flex flex-col w-full text-white ">
            <div className="flex flex-col w-full text-white">
              {/* HTML section here */}
              <p className="text-lg md:text-xl">Our Classes</p>
              <h2 className="text-3xl md:text-5xl text-white font-medium leading-tight mb-8">
                <strong>The Transformation Zone</strong>
              </h2>

              <div className="flex flex-col w-full text-white">
                {/* Megaformer class */}
                <div className="w-full text-white">
                  <div className="border-t border-white"></div>
                  <div
                    className="flex items-center text-white cursor-pointer py-2"
                    onClick={() => toggleClass("megaformer")}
                  >
                    <motion.div
                      initial={false}
                      animate={{ rotate: openClass === "megaformer" ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold text-white"
                    >
                      {openClass === "megaformer" ? "−" : "+"}
                    </motion.div>
                    <h4 className="ml-4 text-white text-xl font-bold">
                      Full body Mega Former
                    </h4>
                  </div>
                  <div className="border-b border-white"></div>

                  <AnimatePresence>
                    {openClass === "megaformer" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden text-white"
                      >
                        <div className="pt-4 pb-2 text-white">
                          <p className="mb-2 text-white text-base md:text-lg">
                            This full-body workout on the Megaformer is designed
                            to build strength, enhance flexibility, and boost
                            endurance. With only 15 people per class, you’ll get
                            the attention you deserve and the burn you came for.
                            Expect dynamic moves, deep muscle engagement, and
                            the kind of sweat that feels oh-so-satisfying.
                            Modifications are always available—so come as you
                            are, and leave stronger.
                          </p>
                          <p className="text-base text-white md:text-lg font-bold">
                            45 minutes. All levels.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mega Classic class */}
                <div className="w-full text-white">
                  <div className="border-t border-white"></div>
                  <div
                    className="flex text-white items-center cursor-pointer py-2"
                    onClick={() => toggleClass("megaClassic")}
                  >
                    <motion.div
                      initial={false}
                      animate={{ rotate: openClass === "megaClassic" ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl text-white font-bold"
                    >
                      {openClass === "megaClassic" ? "−" : "+"}
                    </motion.div>
                    <h4 className="ml-4 text-white text-xl font-bold">
                      Mega Essential
                    </h4>
                  </div>
                  <div className="border-b border-white"></div>

                  <AnimatePresence>
                    {openClass === "megaClassic" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden text-white"
                      >
                        <div className="pt-4 text-white pb-2">
                          <p className="mb-2 text-white text-base md:text-lg">
                            Enjoy all our signature moves with a gentler touch,
                            performed at the front of the Megaformer where the
                            spring tension provides extra support. Perfect for
                            beginners, pre/post-natal clients, or anyone looking
                            for a solid, low-impact workout that builds strength
                            with simplicity. Modifications make it accessible
                            for all fitness levels..
                          </p>
                          <p className="text-base text-white md:text-lg font-bold">
                            45 minutes. All levels.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mega Advanced class */}
                <div className="w-full">
                  <div className="border-t border-white"></div>
                  <div
                    className="flex text-white items-center cursor-pointer py-2"
                    onClick={() => toggleClass("megaAdvanced")}
                  >
                    <motion.div
                      initial={false}
                      animate={{
                        rotate: openClass === "megaAdvanced" ? 45 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl text-white font-bold"
                    >
                      {openClass === "megaAdvanced" ? "−" : "+"}
                    </motion.div>
                    <h4 className="ml-4 text-white text-xl font-bold">
                      Mega Strong
                    </h4>
                  </div>
                  <div className="border-b border-white"></div>

                  <AnimatePresence>
                    {openClass === "megaAdvanced" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden text-white"
                      >
                        <div className="pt-4 pb-2 text-white">
                          <p className="mb-2 text-white text-base md:text-lg">
                            Get ready to push limits. This 45-minute challenge
                            is packed with slower, longer moves, heavier
                            springs, and bold variations that hit differently—in
                            the best way. Designed for those who love a sweaty
                            grind, thrive on intensity, and don’t mind getting a
                            little uncomfortable. No requirements—just show up,
                            dig deep, and let your strength surprise you.
                          </p>
                          <p className="text-base text-white md:text-lg font-bold">
                            45 minutes. All levels (if you know, you know).
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mega Mama class */}
                <div className="w-full text-white">
                  <div className="border-t border-white"></div>
                  <div
                    className="flex items-center cursor-pointer py-2"
                    onClick={() => toggleClass("megaMama")}
                  >
                    <motion.div
                      initial={false}
                      animate={{ rotate: openClass === "megaMama" ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl text-white font-bold"
                    >
                      {openClass === "megaMama" ? "−" : "+"}
                    </motion.div>
                    <h4 className="ml-4 text-white text-xl font-bold">
                      Upper Body & Abs
                    </h4>
                  </div>
                  <div className="border-b border-white"></div>

                  <AnimatePresence>
                    {openClass === "megaMama" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 text-white pb-2">
                          <p className="mb-2 text-base md:text-lg">
                            No legs, no problem. This 45-minute burner is all
                            about arms, shoulders, and core. Expect deep,
                            controlled movements that fire up your upper body
                            and leave your abs talking. It's strength, it's
                            sculpting, it's spicy—and it's for anyone ready to
                            feel the heat.
                          </p>
                          <p className="text-base text-white md:text-lg font-bold">
                            45 minutes. All levels.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Arms + Abs class */}
                <div className="w-full">
                  <div className="border-t border-white"></div>
                  <div
                    className="flex items-center text-white cursor-pointer py-2"
                    onClick={() => toggleClass("armsAbs")}
                  >
                    <motion.div
                      initial={false}
                      animate={{ rotate: openClass === "armsAbs" ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl text-white font-bold"
                    >
                      {openClass === "armsAbs" ? "−" : "+"}
                    </motion.div>
                    <h4 className="ml-4 text-white text-xl font-bold">
                      Ass + Abs
                    </h4>
                  </div>
                  <div className="border-b border-white"></div>

                  <AnimatePresence>
                    {openClass === "armsAbs" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2">
                          <p className="mb-2 text-white text-base md:text-lg">
                            Power through 45 minutes of targeted glute and core
                            work designed to tone, lift, and define. This class
                            challenges your lower body with dynamic moves that
                            build strength and sculpt muscle. Open to all
                            levels—come ready to feel the burn and crush your
                            goals.
                          </p>
                          <p className="text-base text-white md:text-lg font-bold">
                            45 minutes. Prerequisite: 10+ Classes.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
