"use client";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="relative flex flex-col justify-start text-start items-start h-screen w-full overflow-hidden">
        <Header />

        <img
          src="/community1.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt=""
        />

        {/* Content Section */}
        <div className="relative z-20 h-full flex  items-center">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="md:ml-20 mt-5 flex flex-col gap-6 md:gap-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl text-white font-semibold mb-4 md:mb-6">
                Get In Touch
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Muscle fibers section */}
      <div className="bg-black  text-white py-16 md:py-28">
        <div className=" mx-auto flex flex-col  md:flex-row justify-center items-center md:justify-end gap-8 md:gap-2 px-4 sm:px-6 md:px-10">
          {/* Left section */}
          <div className=" justify-center items-center w-full md:w-1/2">
            <div className="flex flex-col justify-center md:text-start items-center gap-2  md:pl-28">
              <p className="text-lg md:text-xl  ">Contact Lagree Pulse</p>
              <p className="text-3xl sm:text-4xl md:text-5xl  font-medium leading-tight">
                <strong>Downtown Vancouver</strong>
              </p>
            </div>
          </div>

          {/* Right section - Image container */}
          <div className="mt-8 md:mt-0 h-fit w-full md:w-1/2 text-white flex items-center justify-center md:justify-start">
            <form
              className="w-full px-4"
              onSubmit={(e) => {
                e.preventDefault();

                // Get form data
                const formData = new FormData(e.target);
                const firstName = formData.get("firstName");
                const lastName = formData.get("lastName");
                const email = formData.get("email");
                const subject = formData.get("subject");
                const message = formData.get("message");

                // Create email content
                const mailtoLink = `mailto:setarehkopahi@gmail.com?subject=Contact Notification &body=Name: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0ASubject: ${subject}%0D%0AMessage: ${message}`;

                // Open email client
                window.open(mailtoLink);

                // Reset form
                e.target.reset();

                // Show success message (optional)
                toast.success("Successfully Sent!");
              }}
            >
              <div className="mb-10">
                <label className="block text-lg   mb-4">
                  Name <span className="text-sm text-gray-400">(required)</span>
                </label>
                <div className="flex flex-col justify-center items-center  gap-4">
                  <div className="flex gap-4 w-full">
                    <div className="w-1/2">
                      <label className="block text-gray-400  font-light ">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className="w-full  px-4 py-2 border-b border-white  focus:outline-none"
                        required
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-gray-400  font-light ">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        className="w-full  px-4 py-2 border-b border-white  focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-lg   mb-1">
                  Email{" "}
                  <span className="text-sm text-gray-400">(required)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full  px-4 py-2 border-b border-white  focus:outline-none"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-lg mb-1">
                  Subject{" "}
                  <span className="text-sm text-gray-400">(required)</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full  px-4 py-2 border-b border-white  focus:outline-none"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-lg   mb-1">
                  Message{" "}
                  <span className="text-sm text-gray-400">(required)</span>
                </label>
                <textarea
                  type="text"
                  name="message"
                  className="w-full  px-4 py-2 border-b border-white  focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-none border border-white text-white hover:bg-white hover:text-black py-3 px-28 rounded font-medium  transition-colors duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
