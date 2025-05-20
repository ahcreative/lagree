"use client";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="relative h-screen flex flex-col justify-center items-center w-full overflow-hidden">
        <Header />

        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src="/megapro.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        {/* Content Section */}
        <div className="relative z-20 h-full flex justify-center items-center">
          <div className="container mx-auto px-4">
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-7xl text-white font-semibold mb-6">
                Studio Policies
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-black flex flex-col gap-5 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-48 py-10 md:py-20 max-w-full">
        <h1 className="text-sm sm:text-lg font-light">
          <span className="font-bold">Welcome to Lagree EliteForm! </span>We're
          so excited to have you join our community. Please take a moment to
          review our studio policies to ensure a smooth and enjoyable experience
          for everyone.
        </h1>
        <div className="flex flex-col gap-1">
          <h1 className="text-xl sm:text-2xl font-bold">Arrival Time</h1>
          <p className="text-sm sm:text-lg font-light">
            For first-time visitors, please plan to arrive{" "}
            <span className="font-medium">5-10 minutes early</span>
            for your class. This allows us to check you in and ensure you're
            ready to start with the group. We kindly ask that you arrive early,
            as we do not allow late entries for the comfort and safety of all
            participants. If you miss the class start time, it will be treated
            as a late cancellation, and you'll lose your class credit. Everyone
            else there is a 5-minute grace period.{" "}
            <span className="font-medium">
              Doors open 15 minutes before class starts.
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xl sm:text-2xl font-bold">Class Entry</h1>
          <p className="text-sm sm:text-lg font-light">
            To maintain a safe and focused environment,{" "}
            <span className="font-medium">
              the doors may be locked 5 minutes after class begins.
            </span>{" "}
            If the door is unlocked, (as long as it's not 1st class) you're
            welcome to join, but please be mindful of the class in progress and
            avoid knocking or causing any disruptions. After the 5-minute
            cutoff, any no-shows will result in your spot being given to someone
            on the waiting list, and the class will be considered a late
            cancellation.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xl sm:text-2xl font-bold">Dress Code</h1>
          <p className="text-sm sm:text-lg font-light">
            <span className="font-medium">Grip socks are required</span> for all
            classes for your safety and comfort. We also recommend bringing a
            towel, as some classes can get quite intense. Both grip socks and
            towels are available for purchase at the studio.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xl sm:text-2xl font-bold">Parking</h1>
          <p className="text-sm sm:text-lg font-light">
            Please <span className="font-medium">use street parking only</span>{" "}
            as the back alley parking lot is off-limits, and vehicles parked
            there may be towed.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xl sm:text-2xl font-bold">Age Requirements</h1>
          <p className="text-sm sm:text-lg font-light">
            Our studio is open to individuals 18 and up to work out and no one
            under 15 is permitted inside the studio.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xl sm:text-2xl font-bold">Pets</h1>
          <p className="text-sm sm:text-lg font-light">
            For the safety and comfort of all our guests, we do not allow pets,
            including emotional support animals, in the studio. Only{" "}
            <span className="font-medium">service animals</span> are permitted
            and must remain"four on the floor "and service vest on during class.
          </p>
          <p className="text-sm sm:text-lg font-light">
            Valid paperwork must be submitted in writing to the studio when
            booking.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-xl sm:text-2xl font-bold">First-Time Visitors</h1>
          <p className="text-sm sm:text-lg font-light">
            All first-time attendees must{" "}
            <span className="font-medium">pre-register</span> for their first
            class. Unfortunately, we do not allow drop-ins for first-time
            guests.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:gap-5">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">
              Cancellation Policy
            </h1>
            <p className="text-sm sm:text-lg font-light">
              We understand life happens! Please note our cancellation policy:
            </p>
          </div>

          <div className="pl-4">
            <ul className="list-disc">
              <li className="text-sm sm:text-lg">
                Late cancellations must be made at least 12 hours before your
                scheduled class.
              </li>
              <li className="text-sm sm:text-lg">
                For monthly contract members, a $20 late cancel fee applies. A
                no-show or no cancellation will incur a $30 fee.
              </li>
              <li className="text-sm sm:text-lg">
                If you're using a class pack, a late cancel will result in the
                loss of your class credit. You may purchase a new class for a
                $20 late cancel fee if you'd like to rebook. Please reach out to
                us by email to arrange this.
              </li>
            </ul>
          </div>
          <p className="text-sm sm:text-lg font-light">
            <span className="font-medium">ClassPass Members:</span> Please note
            that we are unable to make any changes to your ClassPass bookings.
            All cancellations, reschedules, and adjustments must be made
            directly through ClassPass, and their associated fees are all
            through them.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xl sm:text-2xl font-bold">Health & Safety</h1>
          <p className="text-sm sm:text-lg font-light">
            If you have any{" "}
            <span className="font-medium">pre-existing injuries</span> or health
            conditions, please notify the instructor before class begins. We
            have a simple modification system in place to ensure everyone can
            participate safely. We kindly ask that all modifications be made
            from the same position as the rest of the class to maintain
            uniformity and safety. No exceptions can be made.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-xl sm:text-2xl font-bold">Contracts</h1>
          <p className="text-sm sm:text-lg font-light">
            For our contract members, the contract length is the minimum
            commitment period. If you wish to cancel,after mini commitment is
            met please do so at least 5 days before your next billing date via
            email. After the minimum contract period ends, it will automatically
            convert to a month-to-month agreement at the same rate until you
            decide to cancel.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-xl sm:text-2xl font-bold">
            Booking & Managing Your Account
          </h1>
          <p className="text-sm sm:text-lg font-light">
            We recommend downloading our Lagree EliteForm App (available on
            Apple and Android) to easily manage your bookings, cancellations,
            and account details.
          </p>
          <p className="text-sm sm:text-lg font-light">
            All class packs have a 3-month expiration date from purchase.
          </p>
          <p className="text-sm sm:text-lg font-light">
            If you have any questions or need assistance, feel free to reach out
            to us at info@lagreeeliteform.com. Please note that we are no longer
            reachable by phone.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
