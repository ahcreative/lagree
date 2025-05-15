"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Community = () => {
  const [openClass, setOpenClass] = useState(null);

  const toggleClass = (className) => {
    if (openClass === className) {
      setOpenClass(null);
    } else {
      setOpenClass(className);
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
      <div className="relative h-screen flex flex-col w-full overflow-hidden">
        <Header />

        <img
          src="/community.jpeg"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt="Community banner"
        />
        {/* Content Section */}
        <div className="relative bg-black opacity-80 z-10 w-full h-screen"></div>

        <div className="absolute z-20 h-full flex items-center w-full">
          <div className="w-full mx-auto px-4 md:px-12">
            <div className="px-4 md:px-24 flex flex-col gap-6 md:gap-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-semibold mb-4 md:mb-6">
                Community Initiatives
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white">
                At Lagree Eliteform, we believe fitness is more than just a
                workout—it's a way to build connections{" "}
                <br className="hidden md:block" />
                and give back. Our commitment to community goes beyond the
                studio, supporting initiatives{" "}
                <br className="hidden md:block" /> that create real impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-black py-16 md:py-28 px-4 md:px-16 lg:px-24">
        <div className="flex flex-col w-full max-w-6xl mx-auto">
          <div className="flex flex-col w-full gap-6 md:gap-10">
            {/* HTML section here */}
            <p className="text-3xl md:text-4xl font-bold">
              Our Community Standards
            </p>
            <h2 className="text-base md:text-xl leading-tight mb-6 md:mb-8">
              What does it mean to show up as a Lagree Legend? These are the
              standards we hold ourselves and our community members to, in our
              studios and beyond.
            </h2>

            <div className="flex flex-col gap-4 md:gap-6 w-full">
              {/* Megaformer class */}
              <div className="w-full">
                <div
                  className="flex justify-between items-center cursor-pointer py-2 pr-2"
                  onClick={() => toggleClass("megaformer")}
                >
                  <h4 className="text-xl md:text-2xl font-bold">
                    Be Kind & Respectful
                  </h4>
                  <motion.div
                    initial={false}
                    animate={{ rotate: openClass === "megaformer" ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl md:text-2xl font-bold"
                  >
                    {openClass === "megaformer" ? "−" : "+"}
                  </motion.div>
                </div>
                <div className="border-b border-black"></div>

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
                        <p className="mb-2 text-sm md:text-base">
                          Lagree Elitefom is a space for inspiring growth
                          through movement and uplifting ourselves and each
                          other. We treat all beings with kindness and respect
                          and expect the same of our clients and partners.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mega Classic class */}
              <div className="w-full">
                <div
                  className="flex justify-between items-center cursor-pointer py-2 pr-2"
                  onClick={() => toggleClass("megaClassic")}
                >
                  <h4 className="text-xl md:text-2xl font-bold pr-2">
                    We Actively Listen to Self & Others
                  </h4>
                  <motion.div
                    initial={false}
                    animate={{ rotate: openClass === "megaClassic" ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl md:text-2xl font-bold flex-shrink-0"
                  >
                    {openClass === "megaClassic" ? "−" : "+"}
                  </motion.div>
                </div>
                <div className="border-b border-black"></div>

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
                        <ul className="list-disc pl-5 text-sm md:text-base">
                          <li className="mb-2">
                            We listen to what the body needs in the moment by
                            being present and compassionate.
                          </li>

                          <li className="mb-2">
                            We acknowledge each other's feelings and provide
                            positive support.
                          </li>

                          <li>
                            We are receptive to feedback when receiving and
                            respectful and honest when providing.
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mega Advanced class */}
              <div className="w-full">
                <div
                  className="flex justify-between items-center cursor-pointer py-2 pr-2"
                  onClick={() => toggleClass("megaAdvanced")}
                >
                  <h4 className="text-xl md:text-2xl font-bold">
                    Take Accountability
                  </h4>
                  <motion.div
                    initial={false}
                    animate={{
                      rotate: openClass === "megaAdvanced" ? 45 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-xl md:text-2xl font-bold flex-shrink-0"
                  >
                    {openClass === "megaAdvanced" ? "−" : "+"}
                  </motion.div>
                </div>
                <div className="border-b border-black"></div>

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
                        <ul className="list-disc pl-5 text-sm md:text-base">
                          <li className="mb-2">
                            For your own health and wellbeing.
                          </li>

                          <li>
                            Lead by example and advocate for these standards to
                            be upheld within our community.
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mega Mama class */}
              <div className="w-full">
                <div
                  className="flex justify-between items-center cursor-pointer py-2 pr-2"
                  onClick={() => toggleClass("megaMama")}
                >
                  <h4 className="text-xl md:text-2xl font-bold">Have Fun</h4>
                  <motion.div
                    initial={false}
                    animate={{ rotate: openClass === "megaMama" ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl md:text-2xl font-bold flex-shrink-0"
                  >
                    {openClass === "megaMama" ? "−" : "+"}
                  </motion.div>
                </div>
                <div className="border-b border-black"></div>

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
                        <p className="mb-2 text-sm md:text-base">
                          We come to Lagree Eliteform to connect with our bodies
                          and one another. We encourage you to laugh through the
                          shakes, enjoy the burn and have fun.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Arms + Abs class */}
              <div className="w-full">
                <div
                  className="flex justify-between items-center cursor-pointer py-2 pr-2"
                  onClick={() => toggleClass("armsAbs")}
                >
                  <h4 className="text-xl md:text-2xl font-bold">
                    Be Inclusive
                  </h4>
                  <motion.div
                    initial={false}
                    animate={{ rotate: openClass === "armsAbs" ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl md:text-2xl font-bold flex-shrink-0"
                  >
                    {openClass === "armsAbs" ? "−" : "+"}
                  </motion.div>
                </div>
                <div className="border-b border-black"></div>

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
                        <p className="mb-2 text-sm md:text-base">
                          We recognize the strength that lies in diversity and
                          different people have unique perspectives. We welcome
                          and support people of all backgrounds and identities.
                          This includes but is not limited to, members of any
                          sexual orientation, gender identity, race, ethnicity,
                          social and economic class, education level,
                          immigration status, sex, age, size, family status,
                          political belief, religion and physical ability.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Ass + Abs class */}
              <div className="w-full">
                <div
                  className="flex justify-between items-center cursor-pointer py-2 pr-2"
                  onClick={() => toggleClass("assAbs")}
                >
                  <h4 className="text-xl md:text-2xl font-bold pr-2">
                    Sweat with Community Partners
                  </h4>
                  <motion.div
                    initial={false}
                    animate={{ rotate: openClass === "assAbs" ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl md:text-2xl font-bold flex-shrink-0"
                  >
                    {openClass === "assAbs" ? "−" : "+"}
                  </motion.div>
                </div>
                <div className="border-b border-black"></div>

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
                        <p className="mb-2 text-sm md:text-base">
                          At Lagree Eliteform, we believe in the power of
                          community and collaboration. That's why we partner
                          with like-minded brands to host exciting community
                          events and sponsored classes. Through these
                          partnerships, we're able to give back to our members
                          with exclusive perks, treats, and experiences. Whether
                          it's a special class, an exclusive event, or a fun
                          surprise, we're dedicated to creating a supportive and
                          dynamic environment where our members feel appreciated
                          and connected and our community brand partners feel
                          supported.
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

      <div className="bg-black py-16 md:py-28">
        <div className="w-full px-4 md:px-10 max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-20">
            {/* Image container - Full width on mobile, half on desktop */}
            <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
              <Image
                src="/about1.jpg"
                alt="Lagree fitness"
                className="object-cover w-full h-auto max-w-sm md:max-w-none"
                width={500}
                height={200}
              />
            </div>

            <div className="flex flex-col gap-12 md:gap-16 justify-start items-start w-full md:w-1/2">
              <div className="flex flex-col justify-start items-start gap-6 md:gap-10 w-full">
                <p className="text-3xl md:text-4xl lg:text-5xl text-white font-medium leading-tight">
                  <strong>Sweat for a Cause</strong>
                </p>

                <p className="text-base md:text-lg text-white">
                  The Sweat for a Cause classes at Lagree Eliteform increase
                  accessibility, build relationships, and give back to our
                  community. Each quarter, we will partner with an organization
                  or cause related to diversity, equity, and inclusion, women's
                  health; mental health; and environmental sustainability.
                </p>

                <p className="text-base md:text-lg text-white">
                  All community class profits for that quarter will be donated
                  to that organization so we can deepen our support and
                  community impact.
                </p>

                <p className="text-base md:text-lg text-white">
                  Pricing for our community classes will be offered using a
                  'pay-scale' model, helping to ease the financial barriers to
                  boutique fitness and increase access to underrepresented
                  communities.
                </p>

                <div className="w-full sm:w-auto mt-4">
                  <button className="bg-white uppercase text-black py-4 md:py-6 px-8 md:px-12 lg:px-16 font-medium w-full sm:w-auto">
                    Book a sfac class here
                  </button>
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

export default Community;
