"use client";
import React, { useState, useEffect } from "react";

const PromotionalPopup = ({ setHeaderVisible }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setAnimationClass("animate-fadeIn");
      setHeaderVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  const closePopup = () => {
    setAnimationClass("animate-fadeOut");
    setTimeout(() => {
      setIsOpen(false);
      setHeaderVisible(true);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className={` inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300 p-4   ${animationClass}`}
    >
      <div className="relative bg-white w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl max-h-screen  transform transition-transform duration-300">
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 z-30 bg-black bg-opacity-20 hover:bg-opacity-40 text-white rounded-full p-2 transition duration-300"
          aria-label="Close popup"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="overflow-y-auto max-h-screen">
          <div className="relative flex flex-col lg:flex-row min-h-screen">
            <div className="block lg:hidden w-full h-64 relative">
              <img
                src="/new.jpg"
                alt="Promo"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/new.jpg')" }}
            ></div>

            <div className="relative z-20 w-full flex items-center min-h-screen py-8">
              <div className="w-full lg:w-1/2 p-2 md:p-8 lg:p-12">
                <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-6 md:p-8">
                  <div className="h-1 bg-[#C8B682] mb-6"></div>

                  <h2 className="text-xl md:text-3xl  font-bold text-white mb-4 flex items-center">
                    <span className="text-xl md:text-4xl mr-3">🎉</span>
                    <span>Grand Opening Special!</span>
                  </h2>

                  <p className="text-white text-opacity-90 mb-6 text-sm md:text-base lg:text-lg leading-relaxed">
                    We're excited to welcome you to our brand-new studio! To
                    celebrate our opening, we're offering an exclusive
                    limited-time deal to help you get started on your fitness
                    journey.
                  </p>

                  <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 md:p-6 rounded-lg text-center mb-6">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-2">
                      Enjoy <span className="text-[#C8B682]">15% OFF</span>
                    </h3>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3">
                      Any Package Purchase
                    </h3>
                    <p className="text-black text-opacity-90 text-sm md:text-base">
                      No matter which class pack you choose, you'll receive 15%
                      off your first purchase as part of our Grand Opening
                      celebration.
                    </p>
                  </div>

                  <ul className="space-y-3 text-white mb-6">
                    <li className="flex items-start">
                      <span className="text-[#C8B682] mr-3 font-bold text-lg">
                        ✓
                      </span>
                      <span className="text-sm md:text-base">
                        Discount automatically applied at checkout
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C8B682] mr-3 font-bold text-lg">
                        ✓
                      </span>
                      <span className="text-sm md:text-base">
                        No code needed
                      </span>
                    </li>
                  </ul>

                  <div className="border-t border-white border-opacity-30 pt-4">
                    <p className="text-center font-semibold text-white text-sm md:text-base">
                      Offer valid for a limited time only
                    </p>
                    <p className="text-xs text-white text-opacity-70 mt-3 text-center">
                      All purchases are final. Credits are non-transferable and
                      expire based on the terms of the package.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalPopup;
