"use client";
import React from "react";
import Header from "@/app/components/headerWhite";
import Footer from "@/app/components/footer";

const Instructor = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
      <div className="relative overflow-hidden">
        <Header />
      </div>

      <div className="bg-white text-black py-28 md:py-44">
        <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 md:px-10">
          {/* First section with image */}
          <div className="flex flex-col lg:flex-row w-full gap-8 md:gap-12 lg:gap-16">
            <div className="flex flex-col gap-6 md:gap-12 lg:gap-24 px-4 sm:px-6 md:px-8 lg:px-16 w-full">
              <div className="flex flex-col justify-start items-start gap-5 md:gap-8 w-full">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  <strong>Instructor</strong>
                </p>

                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                  <strong>Qualifications</strong>
                </p>

                <ul className="list-disc pl-5 font-light text-sm sm:text-base">
                  <li>
                    Group Fitness Certification{" "}
                    <span className="text-gray-600 text-xs">(required)</span>
                  </li>
                  <li>
                    CPR/AED Certification{" "}
                    <span className="text-gray-600 text-xs">(required)</span>
                  </li>
                  <li>
                    Lagree Method experience is a plus – training will be
                    provided
                  </li>

                  <li>
                    Strong understanding of anatomy, biomechanics, and cueing
                    techniques
                  </li>

                  <li>
                    Confident in time management and delivering precisely timed
                    transitions
                  </li>

                  <li>
                    Exceptional interpersonal, motivational, and communication
                    skills
                  </li>

                  <li>
                    Flexible availability for mornings, evenings, weekends, and
                    holidays
                  </li>
                </ul>

                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                  <strong>PRIMARY Responsibilities</strong>
                </p>

                <ul className="list-disc pl-5 font-light text-sm sm:text-base">
                  <li>
                    Lead dynamic and engaging Lagree fitness classes for clients
                    of all levels.
                  </li>
                  <li>
                    Offer personalized guidance, modifications, and corrections
                    to ensure client safety and form.
                  </li>
                  <li>
                    Motivate and inspire clients to improve strength, endurance,
                    and confidence.
                  </li>

                  <li>
                    Stay current with Lagree Method principles and evolving
                    fitness trends.
                  </li>

                  <li>
                    Support studio operations, including equipment setup, light
                    maintenance, and assisting with client check-in when needed.
                  </li>

                  <li>
                    Maintain professionalism and positive energy throughout each
                    session.
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full flex items-center justify-center lg:justify-start mt-4 lg:mt-0">
              <img
                src="/about1.jpg"
                alt="Lagree fitness"
                className="object-cover h-[300px] sm:h-[400px] md:h-[500px] w-full max-w-md lg:max-w-none"
              />
            </div>
          </div>

          {/* Second section with dates and details */}
          <div className="flex flex-col justify-start items-start px-4 sm:px-6 md:px-8 lg:px-16 gap-5 md:gap-8 w-full mt-8 md:mt-12 lg:mt-20">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              <strong>Benefits</strong>
            </p>

            <ul className="list-disc pl-5 font-light text-sm sm:text-base">
              <li>Competitive pay based on experience and performance</li>
              <li>Complimentary studio membership</li>

              <li>Discounted rates on services and merchandise</li>

              <li>Ongoing professional development and Lagree training</li>

              <li>A fun, supportive, and inspiring team environment</li>
            </ul>

            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              <strong>SCHEDULE REQUIREMENTS</strong>
            </p>

            <ul className="list-disc pl-5 font-light text-sm sm:text-base">
              <li>Morning shift</li>
              <li>Evening shift</li>
              <li>Weekends as needed</li>
              <li>Flexible availability Monday to Sunday</li>
            </ul>

            <div className="w-full flex justify-center sm:justify-start my-4">
              <a
                href="mailto:setarehkopahi@gmail.com?subject=Job%20Application%20for%20Instructor"
                className="w-full sm:w-auto"
              >
                <button className="bg-none border border-black text-black hover:bg-black hover:text-white py-3 px-6 sm:px-12 md:px-20 lg:px-28 font-medium transition-colors duration-300 w-full sm:w-auto">
                  Apply Here
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Instructor;
