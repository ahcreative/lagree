"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "../components/footer";

import { motion, AnimatePresence } from "framer-motion";
import HeaderWhite from "../components/headerWhite";

const WhyLagree = () => {
  const [openClass, setOpenClass] = useState(null);
  const toggleClass = (className) => {
    if (openClass === className) {
      setOpenClass(null);
    } else {
      setOpenClass(className);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="  w-full overflow-hidden">
        <HeaderWhite />
      </div>

      <div className="bg-white text-black flex flex-col gap-5 px-4 sm:px-8 md:px-12 lg:px-48  pt-34 pb-10 ">
        <h1 className="text-3xl md:text-4xl font-bold">ABOUT LAGREE PULSE</h1>
        <p className="text-base md:text-lg font-light">
          We are proud to bring Vancouver the cutting edge of fitness with the
          transformative Lagree Method, created by Sebastien Lagree. At Lagree
          Pulse, we deliver a high-intensity, low-impact, full-body workout that
          fuses strength training, core engagement, muscle endurance, cardio,
          and deep stretching into an effective 45-minute experience.
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
          Experience the evolution of fitness at Lagree Pulse where strength
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

      <div className="bg-white py-16 md:py-28 ">
        <div className="max-w-7xl flex flex-col md:flex-row items-center gap-10 justify-center mx-auto px-6 sm:px-8 md:px-12">
          {/* Left section - Image container */}
          <div className="flex justify-center">
            <Image
              src="/about1.jpg"
              alt="Lagree fitness"
              className="object-cover"
              width={500}
              height={200}
            />
          </div>

          {/* Right section - Text content */}
          <div className="flex flex-col">
            <div className="flex flex-col text-black justify-start items-start gap-3 ">
              <p className="text-3xl md:text-4xl text-black font-medium leading-tight ">
                <strong>Invest in yourself</strong>
              </p>

              <p className="text-base text-black md:text-lg ">
                This method delivers. Sculpt long, lean muscle and transform
                your body with precision and purpose.
              </p>

              <span className="text-lg text-black md:text-xl font-bold ">
                Tailored attention.
              </span>
              <p className="text-base text-black md:text-lg ">
                With small class sizes, you'll receive personalized guidance to
                maximize every movement.
              </p>

              <span className="text-lg text-black md:text-xl font-bold ">
                Empowerment over ego.
              </span>
              <p className="text-base text-black md:text-lg ">
                Our expert instructors motivate with compassion—challenging you
                while meeting you where you are.
              </p>

              <span className="text-lg text-black md:text-xl font-bold ">
                Inclusive by design.
              </span>
              <p className="text-base text-black md:text-lg ">
                Everybody is welcome. No matter your level, you belong here—and
                you can sweat with us.
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
                            endurance. With only 15 people per class, you'll get
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
                            grind, thrive on intensity, and don't mind getting a
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
                      Ass & Abs
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

export default WhyLagree;
