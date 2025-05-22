"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const StudioManager = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
      <div className="relative h-[100px] overflow-hidden">
        <Header />
      </div>

      <div className="bg-white text-black py-8 md:py-16 lg:py-28">
        <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 md:px-10">
          {/* First section with image */}
          <div className="flex flex-col lg:flex-row w-full gap-8 md:gap-12 lg:gap-16">
            <div className="flex flex-col gap-6 md:gap-12 lg:gap-24 px-4 sm:px-6 md:px-8 lg:px-16 w-full">
              <div className="flex flex-col justify-start items-start gap-5 md:gap-8 w-full">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  <strong>Studio Manager</strong>
                </p>

                <p className="">
                  <span className="font-black">Reports To:</span> Owner /
                  Director
                </p>
                <p className="">
                  <span className="font-black">Employment Type:</span> Full-Time
                </p>

                <p className="font-light text-sm sm:text-base">
                  The Studio Manager is responsible for overseeing all aspects
                  of day-to-day studio operations, including sales performance,
                  staff development, client relations, and community engagement.
                  You will play a key leadership role, guiding your team,
                  optimizing revenue, and ensuring every client enjoys an
                  exceptional fitness experience.
                </p>

                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                  <strong>Qualifications</strong>
                </p>

                <ul className="list-disc pl-5 font-light text-sm sm:text-base">
                  <li>Minimum 3 years in a sales-focused role</li>
                  <li>Minimum 3 years in a leadership or management role</li>
                  <li>Proven ability to drive sales and meet targets</li>

                  <li>
                    Strong leadership skills with experience managing teams
                  </li>

                  <li>Familiarity with boutique fitness and wellness trends</li>

                  <li>
                    Excellent communication, problem-solving, and multitasking
                    abilities
                  </li>

                  <li>Passion for health, fitness, and personal growth</li>

                  <li>
                    Tech-savvy with experience using CRM systems and scheduling
                    platforms
                  </li>

                  <li>
                    Flexible availability, including mornings, evenings,
                    weekends, and holidays
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
              <strong>Key Responsibilities</strong>
            </p>

            <ul className="list-disc pl-5 font-light text-sm sm:text-base">
              <li>
                Lead and manage all front-end operations, including membership
                sales, client experience, and staff performance
              </li>
              <li>
                Hire, train, and coach team members including instructors, front
                desk, and sales associates
              </li>
              <li>
                Drive membership growth, retail sales, private training, and
                special events
              </li>

              <li>
                Manage the studio schedule and daily operations with precision
                and attention to detail
              </li>

              <li>
                Collaborate with marketing to implement local campaigns,
                partnerships, and community outreach
              </li>

              <li>
                Analyze key performance indicators (KPIs) and implement action
                plans to exceed goals
              </li>

              <li>
                Maintain high studio standards, ensuring cleanliness,
                functionality, and exceptional service
              </li>

              <li>Foster a fun, inclusive, and motivating studio culture</li>
            </ul>

            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              <strong>Benefits</strong>
            </p>

            <ul className="list-disc pl-5 font-light text-sm sm:text-base">
              <li>Competitive salary + monthly bonus + commission</li>
              <li>Extended health & dental care benefits</li>
              <li>Complimentary studio membership</li>

              <li>Discounted retail and services</li>

              <li>Opportunities for advancement and continuing education</li>

              <li>Supportive and high-energy team environment</li>

              <li>Flexible schedule with autonomy</li>
            </ul>

            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              <strong>SCHEDULE REQUIREMENTS</strong>
            </p>

            <ul className="list-disc pl-5 font-light text-sm sm:text-base">
              <li>Morning shift</li>
              <li>Evening shift</li>
              <li>Monday to Friday</li>
              <li>Weekends as needed</li>
            </ul>

            <p className="font-light text-sm sm:text-base">
              This is an incredible opportunity to shape the future of a
              cutting-edge Lagree studio and grow with a brand that’s redefining
              strength, sweat, and community.
            </p>

            <div className="w-full flex justify-center sm:justify-start my-4">
              <a
                href="mailto:setarehkopahi@gmail.com?subject=Job%20Application%20for%20Studio%20Manager"
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

export default StudioManager;
