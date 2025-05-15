"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [activeSection, setActiveSection] = useState(1);

  const toggleSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  // Open Google Maps with the address
  const openGoogleMaps = (address) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      "_blank"
    );
  };

  // Define content for each toggle section
  const toggleSectionContent = {
    1: {
      title: "Gastown",
      address: "437 West Hastings St Vancouver, BC. (604) 620-9378",
      description:
        "You can find us on Hastings, beside Beat Street Records. There is metered parking on Homer and Richards St. We advise against leaving valuables in plain sight when parking in Gastown.",
      image: "/Gastown.jpg",
    },
    2: {
      title: "Lonsdale",
      address: "117 1st St East North Vancouver, BC. (604) 770-2780",
      description:
        "You can find our main entrance tucked away in the alley between 1st and Esplanade. From Esplanade, turn right on Lonsdale and take your first right into the alley. We are roughly 15 meters in. Limited complimentary parking in front of the entrance and street parking available on 1st and Lonsdale.",
      image: "/Lonsdale.jpg",
    },
    3: {
      title: "Kitsilano",
      address: "2625 West 4th Ave Vancouver, BC. (236) 521-4080",
      description:
        "We are located on 4th and Trafalgar. There is free parking along Trafalgar and metered parking on 4th. Our only location with Mega Cardio classes, this beautiful studio is worth the visit!",
      image: "/Kitsilano.jpg",
    },
    4: {
      title: "Main St",
      address: "Unit 10-199 East 20th St. Vancouver, BC. (236) 521-4042",
      description:
        "Our entrance is on 20th street, just off of Main. We are located just below Published restaurant. There is both metered parking and free parking available on 20th street.",
      image: "/Main.jpg",
    },
    5: {
      title: "Yaletown",
      address: "1287 Hamilton St, Vancouver, BC V6B 6K3 236-466-1425",
      description:
        "Our entrance is off the corner of Drake & Hamilton. There is both metered parking and free parking nearby.",
      image: "/Yaletown.jpg",
    },
    6: {
      title: "Victoria",
      address: "Unit 110-546 Yates St Victoria, BC. (778) 265-0517",
      description:
        "We are located near the bottom of Yates St. There is metered parking in front of the studio.",
      image: "/Victoria.jpg",
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative h-screen flex flex-col w-full overflow-hidden">
        <Header />

        <img
          src="/locations.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt=""
        />
        {/* Content Section */}
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-semibold mb-4 sm:mb-6">
                The Studios
              </h1>
              <p className="text-base sm:text-lg text-white">
                All locations open 15 minutes before the start of scheduled
                classes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black flex flex-col items-center pt-8 sm:pt-12 md:pt-16 text-white">
        {/* Tabs section */}
        <div>
          <div className="flex flex-wrap justify-center mb-4 sm:mb-6">
            <div className="flex flex-wrap justify-center bg-black text-white w-full max-w-3xl overflow-x-auto">
              {[1, 2, 3, 4, 5, 6].map((section) => (
                <button
                  key={section}
                  onClick={() => toggleSection(section)}
                  className={`py-2 sm:py-3 px-3 sm:px-6 text-sm sm:text-base md:text-lg font-medium whitespace-nowrap transition-all duration-300 ${
                    activeSection === section
                      ? "bg-white text-black"
                      : "text-white hover:text-black hover:bg-white border-x-1"
                  }`}
                >
                  {toggleSectionContent[section].title}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white text-black w-full min-h-screen pt-5 md:pt-18 sm:h-screen">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row items-center gap-6 sm:gap-10 md:gap-20 py-8 px-4 sm:px-8 md:px-20 justify-center "
              >
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-4 sm:gap-6 md:gap-10">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    {toggleSectionContent[activeSection].title}
                  </h2>
                  <p className="text-base sm:text-lg">
                    {toggleSectionContent[activeSection].description}
                  </p>

                  <p className="text-base sm:text-lg">
                    {toggleSectionContent[activeSection].address}
                  </p>
                  <button
                    onClick={() =>
                      openGoogleMaps(
                        toggleSectionContent[activeSection].address
                      )
                    }
                    className="text-black underline font-bold uppercase text-sm sm:text-base"
                  >
                    Get Address
                  </button>

                  <Link href="/booking" passHref>
                    <button className="w-full md:w-auto bg-black text-white px-6 sm:px-12 md:px-28 py-3 sm:py-4 md:py-6 hover:bg-gray-800 transition-colors text-sm sm:text-base">
                      Book Class at {toggleSectionContent[activeSection].title}
                    </button>
                  </Link>
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-10">
                  <img
                    src={
                      toggleSectionContent[activeSection].image ||
                      "/springs.jpg"
                    }
                    alt={toggleSectionContent[activeSection].title}
                    className="w-full h-64 sm:h-80 md:max-h-[30rem] object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
