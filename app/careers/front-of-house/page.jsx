"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const Community = () => {
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
                  <strong>Guest Experience Member</strong>
                </p>

                <p className="">
                  <span className="font-black">Reports To:</span> Studio Manager
                </p>
                <p className="">
                  <span className="font-black">Employment Type:</span> Part-Time
                  (Minimum 12 hours per week)
                </p>

                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                  <strong>Qualifications</strong>
                </p>

                <ul className="list-disc pl-5 font-light text-sm sm:text-base">
                  <li>Familiarity with Mariana Tek software is an asset.</li>
                  <li>Previous leadership experience is an advantage.</li>
                  <li>
                    Exceptional customer service and interpersonal skills
                    required.
                  </li>

                  <li>Must be detail-oriented, organized, and proactive.</li>

                  <li>
                    Strong communication skills and ability to collaborate with
                    team members, clients, and management.
                  </li>

                  <li>Comfortable lifting or moving items up to 50 lbs.</li>
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
              <strong>Primary Responsibilities</strong>
            </p>

            <ul className="list-disc pl-5 font-light text-sm sm:text-base">
              <li>
                Welcome clients with a positive, friendly attitude, creating a
                warm and inviting atmosphere.
              </li>
              <li>
                Provide exceptional customer service and hospitality to both
                current and prospective clients.
              </li>
              <li>
                Communicate class options, pricing, and membership details to
                potential clients.
              </li>

              <li>
                Conduct Megaformer machine demonstrations for new clients.
              </li>

              <li>
                Lead new clients on studio tours, showcasing the Lagree West
                experience.
              </li>

              <li>
                Collaborate with instructors to ensure a smooth check-in and
                class transition for clients.
              </li>

              <li>
                Develop thorough knowledge of the Mariana Tek booking system.
              </li>

              <li>
                Support day-to-day studio operations as directed by studio
                management.
              </li>

              <li>
                Respond to studio emails promptly; escalate concerns to the
                Studio Lead when needed.
              </li>

              <li>
                Maintain understanding of Lagree West products, policies, and
                retail procedures.
              </li>

              <li>Perform routine maintenance on Megaformer machines.</li>

              <li>
                Keep the studio clean and organized between classes to ensure a
                premium client experience.
              </li>

              <li>Assist with monthly retail inventory checks.</li>

              <li>Carry out studio opening and/or closing procedures.</li>

              <li>
                Take on additional duties as needed to support studio
                operations.
              </li>
            </ul>

            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              <strong>Work Requirements</strong>
            </p>

            <ul className="list-disc pl-5 font-light text-sm sm:text-base">
              <li>
                Must be available for at least 12 hours per week (2–3 shifts).
              </li>
              <li>
                Flexible availability including early mornings, evenings,
                weekends, and some holidays.
              </li>
              <li>Year-round availability expected.</li>
            </ul>

            <div className="w-full flex justify-center sm:justify-start my-4">
              <a
                href="mailto:setarehkopahi@gmail.com?subject=Job%20Application%20for%20Guest%20Experience%20Member"
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

export default Community;
