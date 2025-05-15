"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [openClass, setOpenClass] = useState(null);
  const [activeSection, setActiveSection] = useState(1);

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

  // Define content for each toggle section
  const toggleSectionContent = {
    1: {
      title: "Springs",
      description:
        "The Megaformer uses springs for resistance. Spring tension allows a greater number of muscle fibres to be used throughout the range of motion and makes it difficult to plateau.",
      image: "/springs.jpg",
    },
    2: {
      title: "Carriage",
      description:
        "The Megaformer carriage is designed to move smoothly between exercises, providing stability while allowing dynamic movement patterns that engage your core throughout the workout.",
      image: "/meet-the-mega.jpg",
    },
    3: {
      title: "Handlebars",
      description:
        "Multiple handlebars positioned throughout the machine provide stability and leverage points, allowing for various grips and positions to target different muscle groups.",
      image: "/handlebars.jpg",
    },
    4: {
      title: "Cables",
      description:
        "The cable system allows for resistance training through multiple planes of motion, creating balanced strength and targeting muscles from different angles.",
      image: "/cables.jpg",
    },
    5: {
      title: "Platform",
      description:
        "The non-slip platform provides secure footing during exercises, with multiple hand and foot positions marked for proper form and alignment.",
      image: "/platform.jpg",
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative h-screen  w-full overflow-hidden">
        <Header />

        <img
          src="/megapro.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover "
          alt=""
        />
        {/* Content Section */}
        <div className="relative z-20 h-full flex justify-center items-center">
          <div className="container mx-auto px-6 md:px-12">
            <div className="">
              <h1
                className={`text-4xl md:text-5xl lg:text-7xl text-white font-semibold mb-6 `}
              >
                About Us
              </h1>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="bg-white text-black flex flex-col gap-5 px-48 py-20 ">
        <h1 className="text-4xl font-bold">ABOUT LAGREE ELITEFORM</h1>
        <p className="text-lg font-light">
          We are proud to bring Vancouver the cutting edge of fitness with the
          transformative Lagree Method, created by Sebastien Lagree. At Lagree
          EliteForm, we deliver a high-intensity, low-impact, full-body workout
          that fuses strength training, core engagement, muscle endurance,
          cardio, and deep stretching into an effective 45-minute experience.
        </p>
        <p className="text-lg font-light">
          We are the only Lagree studio in Vancouver equipped with the latest
          Mega Pro™ machines, Lagree’s most advanced and versatile equipment to
          date. This next-generation machine elevates the Lagree experience with
          unmatched precision, resistance, and functionality.
        </p>
        <p className="text-lg font-light">
          Designed for all fitness levels, the Lagree Method provides
          results-driven workouts that challenge the body while protecting the
          joints. Our studio is built on a foundation of precision, consistency,
          and excellence—from our class structure and training standards to the
          overall client experience.
        </p>
        <p className="text-lg font-light">
          Experience the evolution of fitness at Lagree EliteForm—where strength
          meets precision, and form is everything.
        </p>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center pt-10 text-white bg-black ">
        <h1 className="text-4xl font-bold mt-10">MEET THE MEGAPRO</h1>
        <p className="text-lg font-light">
          It challenges you, sculpts you—and keeps you coming back for more.{" "}
        </p>
        <img src="/megapro.jpg" className="w-full h-full object-cover" alt="" />
      </div>{" "}
      <div className="relative h-screen  w-full overflow-hidden">
        <img
          src="/banner.jpg"
          className="absolute w-full h-full object-cover z-0"
          alt=""
        />
        {/* Content Section */}
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <div className="ml-20 mt-5 flex flex-col gap-8">
              <h1
                className={`text-4xl md:text-5xl lg:text-7xl text-white font-semibold mb-6 `}
              >
                Where results <br /> meet precision{" "}
              </h1>

              <div>
                <p className="text-xl">
                  Our full-body, low-impact workout delivers the results you’re{" "}
                  <br />
                  after—safely and effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-28">
        <div className="container flex flex-col md:flex-row items-start  justify-start gap-20 px-10">
          {/* Right section - Image container */}
          <div className="  md:w-1/2 flex items-start justify-center">
            <Image
              src="/about1.jpg"
              alt="Lagree fitness"
              className=" object-cover"
              width={500}
              height={200}
            />
          </div>

          <div className="flex flex-col  gap-24  justify-start items-start    ">
            <div className="flex flex-col justify-start items-start gap-3 ">
              <p className="text-xl"> Why Lagree Elitform?</p>

              <p className=" text-5xl text-white font-medium leading-tight ">
                <strong>Invest in yourself.</strong>
              </p>

              <p>
                <p className="text-lg">
                  This method delivers. Sculpt long, lean muscle and transform
                  your body with precision and purpose.{" "}
                </p>
              </p>

              <p>
                <span className="text-xl font-bold">Tailored attention.</span>
                <p className="text-lg">
                  With small class sizes, you’ll receive personalized guidance
                  to maximize every movement.
                </p>
              </p>

              <p>
                <span className="text-xl font-bold">Empowerment over ego.</span>

                <p className="text-lg">
                  Our expert instructors motivate with compassion—challenging
                  you while meeting you where you are.
                </p>
              </p>

              <p>
                <span className="text-xl font-bold">Inclusive by design.</span>
                <p className="text-lg">
                  Everybody is welcome. No matter your level, you belong
                  here—and you can sweat with us.{" "}
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-28">
        <div className="container flex flex-col md:flex-row  justify-center gap-7 px-28">
          <div className="flex flex-col justify-center    items-center    ">
            <div className="flex flex-col   gap-10 ">
              <p className="text-xl"> The Science</p>
              <h1 className="font-bold text-5xl">
                We target your slow-twitch <br /> muscle fibers.
              </h1>
              <p>
                Activating slow-twitch muscle fibres builds lean muscle mass,
                boosting metabolism <br /> for up to 24 hours post-class.
              </p>

              <p>
                Patented equipment uses variable resistance and your own body
                weight to target <br /> slow-twitch fibres, keeping muscles
                challenged and preventing plateaus.
              </p>
            </div>
          </div>
          {/* Right section - Image container */}
          <div className="  md:w-1/2 flex items-center justify-center">
            <Image
              src="/about2.jpg"
              alt="Lagree fitness"
              className=" object-cover"
              width={500}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="bg-black py-28">
        <div className=" flex flex-col md:flex-row   justify-start ">
          {/* Right section - Image container */}
          <div className="  md:w-1/2 flex items-start justify-center">
            <Image
              src="/about3.png"
              alt="Lagree fitness"
              className=" object-cover"
              width={500}
              height={200}
            />
          </div>

          <div className="flex flex-col  ">
            <div className="flex flex-col   w-full">
              {/* HTML section here */}
              <p className="text-xl">Our Classes</p>
              <h2 className="text-5xl text-white font-medium leading-tight mb-8">
                <strong>Where the magic happens.</strong>
              </h2>

              <div className="flex flex-col w-full">
                {/* Megaformer class */}
                <div className="w-full">
                  <div className="border-t border-white "></div>
                  <div
                    className="flex  items-center cursor-pointer py-2"
                    onClick={() => toggleClass("megaformer")}
                  >
                    <motion.div
                      initial={false}
                      animate={{ rotate: openClass === "megaformer" ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold"
                    >
                      {openClass === "megaformer" ? "−" : "+"}
                    </motion.div>
                    <h4 className="ml-4 text-xl font-bold">Megaformer</h4>
                  </div>
                  <div className="border-b border-white "></div>

                  <AnimatePresence>
                    {openClass === "megaformer" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2">
                          <p className="mb-2">
                            Our signature class. This full body workout on the
                            Megaformer is designed to <br /> improve your
                            strength, flexibility and endurance. With a maximum
                            of 20 people per <br /> class, expect lots of
                            attention. Whether beginner, intermediate or
                            advanced,
                            <br /> modifications make this class suitable for
                            all levels.
                          </p>
                          <p className="text-lg font-bold">
                            40 minutes. All levels.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mega Classic class */}
                <div className="w-full">
                  <div className="border-t border-white "></div>
                  <div
                    className="flex  items-center cursor-pointer py-2"
                    onClick={() => toggleClass("megaClassic")}
                  >
                    <motion.div
                      initial={false}
                      animate={{ rotate: openClass === "megaClassic" ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold"
                    >
                      {openClass === "megaClassic" ? "−" : "+"}
                    </motion.div>
                    <h4 className="ml-4 text-xl font-bold">Mega Classic</h4>
                  </div>
                  <div className="border-b border-white "></div>

                  <AnimatePresence>
                    {openClass === "megaClassic" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2">
                          <p className="mb-2">
                            All our classic moves, taught at the front of the
                            Mega where the spring tension adds <br /> extra
                            support. If you find yourself modifying exercises at
                            the back of the machine
                            <br />
                            but know you have an extra gear, this class is for
                            you. Also a great option for new
                            <br /> clients, pre/post natal or guests that find
                            substance in simplicity.
                          </p>
                          <p className="text-lg font-bold">
                            40 minutes. All levels.
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
                    className="flex  items-center cursor-pointer py-2"
                    onClick={() => toggleClass("megaAdvanced")}
                  >
                    <motion.div
                      initial={false}
                      animate={{
                        rotate: openClass === "megaAdvanced" ? 45 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold"
                    >
                      {openClass === "megaAdvanced" ? "−" : "+"}
                    </motion.div>
                    <h4 className="ml-4 text-xl font-bold">Mega Advanced</h4>
                  </div>
                  <div className="border-b border-white"></div>

                  <AnimatePresence>
                    {openClass === "megaAdvanced" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2">
                          <p className="mb-2">
                            Longer moves, heavier spring loads and mind-altering
                            variations geared to take it
                            <br /> to the next level, Mega Advance is for guests
                            who have completed 25+ classes in
                            <br />
                            the last 6 months and are looking for a greater
                            challenge. If you find yourselves
                            <br /> ahead of the pack during transitions, always
                            take challenge options when given and <br />
                            crave new variations of exercises that keep you
                            guessing, this class is for you.
                          </p>
                          <p className="text-lg font-bold">
                            50 minutes. Prerequisite: 25+ Classes
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mega Mama class */}
                <div className="w-full">
                  <div className="border-t border-white"></div>
                  <div
                    className="flex  items-center cursor-pointer py-2"
                    onClick={() => toggleClass("megaMama")}
                  >
                    <motion.div
                      initial={false}
                      animate={{ rotate: openClass === "megaMama" ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold"
                    >
                      {openClass === "megaMama" ? "−" : "+"}
                    </motion.div>
                    <h4 className="ml-4 text-xl font-bold">Mega Mama</h4>
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
                        <div className="pt-4 pb-2">
                          <p className="mb-2">
                            Strengthen your connection to your pelvic floor and
                            develop deep core activation
                            <br /> through breath. Specifically designed for
                            those wanting to educate themselves
                            <br /> with how to move their body safely for
                            preconception and during prenatal and
                            <br /> postnatal fitness. Expect lots of hands on
                            adjustments and modifications to meet
                            <br /> your individual and personal needs.
                          </p>
                          <p className="text-lg font-bold">
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
                    className="flex  items-center cursor-pointer py-2"
                    onClick={() => toggleClass("armsAbs")}
                  >
                    <motion.div
                      initial={false}
                      animate={{ rotate: openClass === "armsAbs" ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold"
                    >
                      {openClass === "armsAbs" ? "−" : "+"}
                    </motion.div>
                    <h4 className="ml-4 text-xl font-bold">Arms + Abs</h4>
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
                          <p className="mb-2">
                            40 Minutes of just Arms & Core work to make you
                            long, lean and defined - no legs
                            <br /> required! This class is recommended for
                            guests who've completed 10 or more
                            <br />
                            Lagree classes and are looking for a more targeted
                            challenge.
                          </p>
                          <p className="text-lg font-bold">
                            40 minutes. Prerequisite: 10+ Classes.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Ass + Abs class */}
                <div className="w-full">
                  <div className="border-t border-white"></div>
                  <div
                    className="flex  items-center cursor-pointer py-2"
                    onClick={() => toggleClass("assAbs")}
                  >
                    <motion.div
                      initial={false}
                      animate={{ rotate: openClass === "assAbs" ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold"
                    >
                      {openClass === "assAbs" ? "−" : "+"}
                    </motion.div>
                    <h4 className="ml-4 text-xl font-bold">Ass + Abs</h4>
                  </div>
                  <div className="border-b border-white"></div>

                  <AnimatePresence>
                    {openClass === "assAbs" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2">
                          <p className="mb-2">
                            New Abs, who dis? 40 Minutes of just Ass + Ab work
                            to make you long, lean and
                            <br /> defined - lots of lower body required! This
                            class is recommended for all levels.
                          </p>
                          <p className="text-lg font-bold">
                            40 minutes. All levels.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Strength + Stretch class */}
                <div className="w-full">
                  <div className="border-t border-white"></div>
                  <div
                    className="flex  items-center cursor-pointer py-2"
                    onClick={() => toggleClass("strengthStretch")}
                  >
                    <motion.div
                      initial={false}
                      animate={{
                        rotate: openClass === "strengthStretch" ? 45 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold"
                    >
                      {openClass === "strengthStretch" ? "−" : "+"}
                    </motion.div>
                    <h4 className="ml-4 text-xl font-bold">
                      Strength + Stretch
                    </h4>
                  </div>

                  <AnimatePresence>
                    {openClass === "strengthStretch" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2">
                          <p className="mb-2">
                            30 minutes of intense Lagree, 15 minutes of a
                            sweeeeet stretch done on the
                            <br /> Megaformer. We educate first-timers about
                            this class type as it is not a regular
                            <br /> Lagree experience and the 30 minutes can be
                            pretty intense.
                          </p>
                          <p className="text-lg font-bold">
                            45 minutes. Low Impact. All levels.
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
      <div className="bg-white text-black pt-10 flex flex-col px-24">
        <div className="px-24 py-5 flex flex-col gap-2">
          {" "}
          <h1 className="text-xl">Meet the Megaformer</h1>
          <h1 className="text-5xl font-bold">
            It's a love-hate relationship.{" "}
          </h1>
        </div>
      </div>
      <img src="/megaformer-love-hate.jpg" alt="" />
      <div className="bg-black flex flex-col items-center py-16 text-white">
        {/* Converted HTML section */}
        <div className="container mx-auto px-6 md:px-12 mb-16">
          <div className="flex flex-col items-center w-full mb-12">
            <h2 className="text-xl mb-2">The Megaformer Features</h2>
            <h1 className="text-5xl font-bold mb-8">
              Built for maximum results.
            </h1>
          </div>

          <div className="flex flex-wrap justify-center mb-6">
            <div className="flex flex-wrap justify-center w-full max-w-3xl mb-6">
              {[1, 2, 3, 4, 5].map((section) => (
                <button
                  key={section}
                  onClick={() => toggleSection(section)}
                  className={`py-3 px-6 text-lg font-medium transition-all duration-300 ${
                    activeSection === section
                      ? "bg-white text-black"
                      : " text-white hover:text-black hover:bg-white border-x-1"
                  }`}
                >
                  {toggleSectionContent[section].title}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row items-center gap-20 px-20  justify-center  mx-auto"
            >
              <div>
                <img
                  src={
                    toggleSectionContent[activeSection].image || "/springs.jpg"
                  }
                  alt={toggleSectionContent[activeSection].title}
                  className=" max-h-[30rem] w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 flex flex-col gap-4">
                <h4 className="text-xl">The Megaformer</h4>
                <h2 className="text-5xl font-bold">
                  {toggleSectionContent[activeSection].title}
                </h2>
                <p className="text-lg">
                  {toggleSectionContent[activeSection].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
