"use client";
import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const FaqPolicies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative h-screen flex flex-col w-full overflow-hidden">
        <Header />

        <img
          src="/meganbanner1.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt=""
        />
        {/* Content Section */}
        <div className="relative bg-black opacity-80 z-10 w-full h-screen"></div>

        <div className="absolute z-20 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <div className="px-4 md:px-12 lg:px-24 flex flex-col gap-6 md:gap-10">
              <h1 className="text-3xl md:text-5xl lg:text-7xl text-white font-semibold mb-4 md:mb-6">
                FAQs + Policies
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-black py-12 md:py-20 lg:py-28 px-4 md:px-12 lg:px-24 xl:px-54">
        <div className="flex flex-col gap-10 md:gap-16 lg:gap-20 max-w-6xl mx-auto">
          {/* General Section */}
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-3xl md:text-4xl font-bold">General</p>
            <p className="text-lg md:text-xl font-medium">
              What is Lagree Eliteform?
            </p>
            <p className="font-light">
              Lagree Eliteform is a full-body workout completed on the
              Megaformer. Our classes are designed to improve strength,
              flexibility, and endurance. With a focus on endurance muscle
              fibers and your smaller stabilizing muscles, this workout will
              target muscles that you didn't know existed!
            </p>

            <p className="text-lg md:text-xl font-medium">
              Who can do Lagree Eliteform?
            </p>
            <p className="font-light">
              Lagree Eliteform is accessible to all fitness levels. All classes
              offer modifications and options you can take as you grow in your
              practice. As with anything new, there will be an adjustment
              period, but our instructors are trained to work with your ability
              level. We ask that you remain patient, stay focused and get ready
              to become addicted!
            </p>
            <p className="font-light">
              If you suffer from chronic back pain, painful joints, or a severe
              medical condition, we recommend an initial private lesson to
              assess your fitness level.
            </p>

            <p className="text-lg md:text-xl font-medium">
              When can I sign up for a class?
            </p>
            <p className="font-light">
              All classes are available to book online up to 7 days in advance.
              We recommend pre-registering to ensure you've held your spot in
              your favorite class or time slot.
            </p>

            <p className="text-lg md:text-xl font-medium">
              Are there different levels of classes?
            </p>
            <p className="font-light">
              Yes. Most of our classes are for All Levels, but we do also offer
              variations of our classes. Learn more about our class types:{" "}
              <a href="/whylagree" className="underline">
                here
              </a>
              .
            </p>

            <p className="text-lg md:text-xl font-medium">
              Instructor Schedule Changes
            </p>
            <p className="font-light">
              Instructors and classes are subject to change without notice.
              Please visit the Lagree Eliteform class schedule for updates.
            </p>

            <p className="text-lg md:text-xl font-medium">Grip Sock Policy</p>
            <p className="font-light">
              Grip Socks are required at all Lagree Eliteform studios and are
              available for purchase. For any questions, call your home studio
              or visit the front desk.
            </p>

            <p className="text-lg md:text-xl font-medium">
              How often should I come to class?
            </p>
            <p className="font-light">
              We recommend 3 classes a week to see maximum benefit. We love
              seeing you but we also believe in rest and recovery! Listen to
              your body!
            </p>
          </div>
          <div className="border-b border-black"></div>

          {/* First Time Section */}
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-3xl md:text-4xl font-bold">First Time</p>
            <p className="text-lg md:text-xl font-medium">
              Do I need to create an account?
            </p>
            <p className="font-light">
              Yes! All clients must create an account in order to purchase class
              credits and register for class. To create an account, go to your
              desired studio and click on 'book a class.'
            </p>

            <p className="text-lg md:text-xl font-medium">
              What should I bring to class?
            </p>
            <p className="font-light">
              Wear comfortable clothes you can easily move in, much like you'd
              wear to the gym or a yoga class. For both safety and sanitary
              reasons, we require that you wear grip socks in all studios.
            </p>
            <p className="font-light">
              Please bring your water bottle and a small towel (optional). We
              have a filtering station you can use to refill your bottles.
              Please leave any hand jewelry at home, as rings can damage the
              equipment.
            </p>

            <p className="text-lg md:text-xl font-medium">
              How early should I arrive for class?
            </p>
            <p className="font-light">
              If it is your first time at Lagree Eliteform please arrive 10-15
              minutes early. If you arrive too late for a safety orientation,
              your class will be re-credited and you will kindly be asked to
              return another time.
            </p>
            <p className="font-light">
              If you are an existing client, it is best to show up at least 5
              minutes early so that you can get settled and catch the trainer
              demo.
            </p>

            <p className="text-lg md:text-xl font-medium">
              Can I buy both intro offers or do I have to choose one?
            </p>
            <p className="font-light">
              The First Time Special and 2 Week Pass are only available to
              first-time guests. Please choose what suits you best, as you will
              only be able to purchase one of these new client specials. We
              recommend starting with the 2 Week Unlimited as it takes 3-5
              classes to get the hang of the workout. If you prefer to take it
              slower, the 2-Class Package may be a better fit!
            </p>
          </div>
          <div className="border-b border-black"></div>

          {/* Class Credits Section */}
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-3xl md:text-4xl font-bold">Class Credits</p>
            <p className="text-lg md:text-xl font-medium">
              How do I buy class credits?
            </p>
            <p className="font-light">
              Class credits can be purchased on our website or on our iOS app.
              Please make sure to purchase in the region you are looking to take
              class. All sales are final. All classes must be prepaid. Classes
              are non-refundable, exchangeable, or transferable.
            </p>

            <p className="text-lg md:text-xl font-medium">
              Do you offer refunds on class credits?
            </p>
            <p className="font-light">
              We are sorry, but we do not offer refunds for class credits. If
              you cancel class within our cancellation policy, the class will be
              credited back to your account for later use. If you need to cancel
              less than 12 hours before the class start time, you will lose the
              class credit.
            </p>

            <p className="text-lg md:text-xl font-medium">
              Are Credits transferrable between regions?
            </p>
            <p className="font-light">
              Credits purchased in the Vancouver region will only be used in
              Victoria.
            </p>
          </div>
          <div className="border-b border-black"></div>

          {/* Memberships Section */}
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-3xl md:text-4xl font-bold">Memberships</p>
            <p className="text-lg md:text-xl font-medium">
              Do you offer a monthly unlimited membership?
            </p>
            <p className="font-light">
              You can book up to (1) one class a day on our Legend Membership!
              The Legend Membership auto-renews every 30 days. The day your
              monthly membership expires, your account will be automatically
              charged for the next billing cycle under the same terms. If you're
              a Legend Member and you don't show up or cancel late (less than 12
              hours notice) for a class, you will incur a $25 fee.
            </p>

            <p className="text-lg md:text-xl font-medium">
              Do you offer limited class memberships?
            </p>
            <p className="font-light">
              Yes! Our Stronger Membership allows you to take 4 classes a cycle,
              our Longer Membership allows you to take 8 classes a cycle, and
              our Leaner Membership allows 12 classes a cycle. All memberships
              auto-renew every 30 days. The day your limited membership expires,
              your account will be automatically charged for the next billing
              cycle under the same terms. There are no late cancellation penalty
              fees for these memberships, aside from losing the credit you
              booked with.
            </p>

            <p className="text-lg md:text-xl font-medium">
              How do I purchase a membership?
            </p>
            <p className="font-light">
              You can purchase a membership online or in studio.
            </p>

            <p className="text-lg md:text-xl font-medium">
              How do I cancel my monthly membership?
            </p>
            <p className="font-light">
              All memberships have a two-month (60 days) minimum commitment
              after which you can cancel at any time. If you want to cancel your
              membership after the initial two billing cycles, please email us
              at least 7 days prior to the expiration of the current cycle and
              we will cancel the auto-renewal. *please include the reason for
              your cancellation
            </p>

            <p className="text-lg md:text-xl font-medium">
              Can I freeze my monthly membership?
            </p>
            <p className="font-light">
              If requested, we can freeze or hold your membership. Holds must be
              for a minimum of seven days, and up to a maximum of three months
              (90 days). We are only able to freeze or hold a membership once
              every three months. All freeze requests must be made in writing,
              including start and end date, and be received at least 3 days
              prior to the desired start date.
            </p>
          </div>
          <div className="border-b border-black"></div>

          {/* Late Arrival Policy Section */}
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-3xl md:text-4xl font-bold">
              Late Arrival Policy
            </p>
            <p className="text-lg md:text-xl font-medium">
              What is your late arrival policy?
            </p>
            <p className="font-light">
              To ensure the safety of our clients, you need to arrive prior to
              class time if you are new to Lagree Eliteform as late entry will
              not be permitted. We require that all new clients receive a proper
              introduction to the instructor and Megaformer, so we suggest
              arriving 10-15 minutes before class begins. Thank you in advance
              for understanding!
            </p>
            <p className="font-light">
              If you are not a new client, it is recommended that you arrive at
              least five minutes before the start of class. However, we
              understand that life happens! In the case that you arrive late for
              class, your spot may be given to a walk-in client. To ensure we
              hold your spot, we ask that you notify us via email or phone if
              you are running late.
            </p>
            <p className="font-light">
              If you wish to cancel a class, you must do so at least 12 hours in
              advance or your class credit will be forfeited. Please review our
              cancellation and walk-in policy in the event you are unable to
              make your scheduled class.
            </p>
          </div>
          <div className="border-b border-black"></div>

          {/* Cancellation Policy Section */}
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-3xl md:text-4xl font-bold">
              Cancellation Policy
            </p>
            <p className="text-lg md:text-xl font-medium">
              What is your cancellation policy?
            </p>
            <p className="font-light">
              To avoid losing your credit, reserved classes can be cancelled up
              to 12 hours prior to the start of the class. If cancelled with
              less than 12-hour notice, you will lose the credit from your
              package or be charged a $25 fee if you are on a Legend Membership
              or Intro 2-Week Pass.
            </p>
            <p className="font-light">
              We do not accept email cancellations. Please cancel your
              reservation through your account on our website or mobile app.
            </p>
            <p className="font-light">
              The cancellation window for private and semi-private classes is 4
              hours.
            </p>
            <p className="font-light">
              If you have a late cancellation and wish to attend class on the
              same day, we recommend reviewing our same-day standby policy
              below.
            </p>

            <p className="text-lg md:text-xl font-medium">
              Can I swap classes within the cancellation window?
            </p>
            <p className="font-light">
              Switching classes within the 12-hour cancellation period will
              result in a late cancellation. If you would like to switch your
              reservation within the 12-hour window, please see our same-day
              standby policy.
            </p>

            <p className="text-lg md:text-xl font-medium">
              What is the same-day standby policy?
            </p>
            <p className="font-light">
              Got stuck in a meeting and lost your credit? Never fear, the
              standby policy is here!
            </p>
            <p className="font-light">
              If you are unable to attend your class and have a late
              cancellation you may show up on standby for another class during
              the same day and if a spot is available- it's yours!
            </p>
            <p className="font-light">
              Please note, standby spots cannot be reserved in advance and we
              cannot guarantee that a spot will be available. Our standby
              benefit is only available for reservations made directly through
              Lagree Eliteform. Registered guests and walk-ins who purchase a
              reservation receive priority over guests attending on standby.
            </p>
            <p className="font-light">
              *Legend Members not eligible for same-day standby
            </p>

            <p className="text-lg md:text-xl font-medium">
              How do I cancel my class?
            </p>
            <p className="font-light">
              If you need to cancel a reservation, log in to your account, click
              My Classes, click the pencil icon next to the class you'd like to
              cancel, click Cancel Reservation. If you have trouble cancelling
              or have any questions, please email us.
            </p>

            <p className="text-lg md:text-xl font-medium">
              What if I cancel late or don't show up to a free class?
            </p>
            <p className="font-light">
              If you are coming in for a free class, please note that the
              cancellation policy and no-show fees still apply. If you do not
              show up for a free class, you will be charged the full price of a
              Single Class.
            </p>
          </div>
          <div className="border-b border-black"></div>

          {/* Waitlist Section */}
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-3xl md:text-4xl font-bold">Waitlist</p>
            <p className="text-lg md:text-xl font-medium">
              What is the waitlist and how does it work?
            </p>
            <p className="font-light">
              If a class you'd like to take is full, we highly recommend putting
              yourself on the waitlist. In order to do so, you must purchase a
              class or membership. If you do not get a spot in the class, the
              class credit will be returned to your account. If a spot opens
              more than 1 hour before the start of class, you will be added to
              the class and receive an email confirmation.
            </p>
            <p className="font-light">
              All classes have a 12-hour cancellation policy, so if you're added
              to a class from the waitlist at any time after 12 hours before the
              start of class, be aware that the 12-hour cancellation policy
              still applies. If you are added to the class and don't remove
              yourself in time, you will lose the class credit or be charged a
              penalty fee if you are using a Legend Membership.
            </p>
            <p className="font-light">
              Any time prior to 1 hour before the start of class, if you are
              still on the waitlist and realize you no longer want a spot in
              class, please remove yourself from the waitlist, just like you
              would cancel a class, and the class credit will be returned to
              your account.
            </p>
            <p className="font-light">
              Please note that the waitlist locks and becomes void at the 1-hour
              mark prior to that class start time – at which point potential
              spots in the class are available on a first come first serve
              basis.
            </p>

            <p className="text-lg md:text-xl font-medium">
              How do I check if I'm on the waitlist?
            </p>
            <p className="font-light">
              To check your waitlist status, log in to your account and select
              My Classes. If you are on the waitlist, you will see your waitlist
              position. If you do not want this class, be sure to remove
              yourself from the waitlist or notify us and we'll remove you.
            </p>
          </div>
          <div className="border-b border-black"></div>

          {/* Studio Policies Section */}
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-3xl md:text-4xl font-bold">Studio Policies</p>
            <p className="text-lg md:text-xl font-medium">
              What are the Studio Etiquette policies?
            </p>
            <p className="font-light">
              The Studio Etiquette policies are in place to ensure that both you
              and your fellow guests have a mega good time. We thank you in
              advance for respecting our studio guidelines.
            </p>
            <p className="font-light">Don't forget to say hi!</p>
            <p className="font-light">
              Please check in with at front desk upon arrival.
            </p>
            <p className="font-light">No one likes wet grip socks!</p>
            <p className="font-light">
              Please remove your shoes at the entrance.
            </p>
            <p className="font-light">Just you and your Mega!</p>
            <p className="font-light">
              Please put all your belongings, save for your water bottle, in the
              lockers provided. Yes, that includes your jackets, car keys,
              phones, and purses! 🤗
            </p>
            <p className="font-light">
              Thank you for helping keep our studios looking neat and tidy and
              ensuring a safe experience for our trainers to move around.
            </p>
            <p className="font-light">
              If you have to de-layer during class (when the shakes get spicy),
              please store your sweaters in the pit of your mega. There should
              be no belongings in the surrounding area of your megaformer.
            </p>
            <p className="font-light">Keep it grippy!</p>
            <p className="font-light">
              Grip socks are mandatory for class, if you are not wearing them,
              our staff will request that you purchase a pair before taking
              class.
            </p>
            <p className="font-light">More shakes, less texts!</p>
            <p className="font-light">
              Please ensure your phone is on silent during class. We encourage
              you to leave it in your locker. If you must use your phone during
              class, we request that you exit the Megaformer area to do so to
              avoid disrupting other guests. Please note that filming during
              class is prohibited. Save the selfies for before or after!
            </p>

            <p className="text-lg md:text-xl font-medium">
              What is your sales and refund policy?
            </p>
            <p className="font-light">
              All sales of services are final. All services are non-refundable,
              transferrable, or exchangeable. All services must be pre-paid. We
              do not accept cash.
            </p>
            <p className="font-light">
              Returns of retail merchandise must be made within 7 days of
              purchase for a full refund. For exchanges or account credit,
              returns of retail merchandise must be made within 30 days of
              purchase. Merchandise must be unwashed, unworn, or unused with the
              original hangtags attached. Proof of payment must accompany the
              return. Final sale for scrunchies, and water bottles.
            </p>

            <p className="text-lg md:text-xl font-medium">
              What happens if I leave something behind?
            </p>
            <p className="font-light">
              Lagree Eliteform is not responsible for any lost or stolen
              property. We advise you to leave valuables at home and use the
              lockers on site. Any items left behind will be held in the lost
              and found for two weeks, at which point they will be donated.
            </p>

            <p className="text-lg md:text-xl font-medium">
              Are pets allowed in the studio?
            </p>
            <p className="font-light">
              We love your furry friends! However, due to safety considerations
              and out of respect for the experience of other guests, we cannot
              allow pets to accompany you during your class. If you have a
              service dog — please email{" "}
              <a href="mailto:info@lagreeeliteform.com" className="underline">
                info@lagreeeliteform.com
              </a>{" "}
              . We may ask if they are required because of a disability and what
              task they've been trained to perform.
            </p>

            <p className="text-lg md:text-xl font-medium">
              Are children allowed in the studio?
            </p>
            <p className="font-light">
              We do not have childcare on site. To respect the experience of
              other guests and for liability reasons, we don't allow children in
              the studio. Immobile children in car seats or strollers are
              permitted in our Mega Mama classes only. If you show up to the
              studio with your mini, we will re-credit your class and kindly ask
              you to return another time. We apologize for any inconvenience
              this may cause.
            </p>

            <p className="text-lg md:text-xl font-medium">
              Is there a minimum age requirement to take class?
            </p>
            <p className="font-light">
              The minimum age to take class is 16 years old. All clients under
              the age of 19 must have this additional waiver completed by a
              parent or guardian before taking their first class.
            </p>
          </div>
          <div className="border-b border-black"></div>

          {/* Medical Inquiries Section */}
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-3xl md:text-4xl font-bold">Medical Inquiries</p>
            <p className="text-lg md:text-xl font-medium">
              Can I take Lagree Eliteform if I'm pregnant?
            </p>
            <p className="font-light">
              Firstly, Congrats! If you were regularly taking Lagree Eliteform
              before you got pregnant, you can continue to take class as long as
              you feel comfortable and have your doctor's approval. Please
              discuss this class with your doctor before taking class. If you
              are new to Lagree Eliteform, we do not advise you to try it for
              the first time when pregnant. Doctors don't recommend taking a new
              workout when pregnant, especially something as core-intensive as
              Lagree Eliteform.
            </p>
            <p className="font-light">
              Your physician should clear any post-pregnancy activity.
              Typically, doctors recommend waiting at least 8 weeks from vaginal
              birth and 10-12 weeks from a c-section. Remember to be kind to
              your body and take your time getting back into a workout routine.
            </p>
            <p className="font-light">
              For our pregnant and postpartum moms, we highly recommend our Mega
              Mamma series. Email us or check out our class page for more info.
            </p>

            <p className="text-lg md:text-xl font-medium">
              Can I do Lagree Eliteform for injury recovery?
            </p>
            <p className="font-light">
              If you are recovering from knee, back, or shoulder surgery we
              would not advise taking class until your doctor clears you to do
              so. When ready to return, a private session may be a good option
              to consider as it will be tailored to meet your needs.
            </p>
          </div>
          <div className="border-b border-black"></div>

          {/* Contact Section */}
          <p className="text-base md:text-lg">
            Additional questions? Please reach out to us at
            <a href="mailto:info@lagreeeliteform.com" className="underline">
              {" "}
              info@lagreeeliteform.com
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FaqPolicies;
