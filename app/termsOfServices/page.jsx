"use client";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/headerWhite";

const TermsOfServices = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="relative flex flex-col justify-center items-center w-full overflow-hidden">
        <Header />
      </div>
      <div className="bg-white text-black flex flex-col gap-5 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-48 py-44 max-w-full">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            Lagree Pulse – Terms of Service
          </h1>
          <p className="text-sm sm:text-base font-light mb-2">
            <span className="font-bold">Effective Date:</span> June 2025
          </p>
          <p className="text-sm sm:text-base font-light mb-6">
            <span className="font-bold">Welcome to Lagree Pulse.</span> These
            Terms of Service (<span className="font-bold">“Agreement”</span>)
            govern your use of our services, including but not limited to
            participation in fitness classes, events, online services, and
            access through any <span className="font-bold">Lagree Pulse</span>{" "}
            website, app, or studio location. Please read this Agreement
            carefully. By using our services, you agree to be bound by the terms
            outlined below.
          </p>
          <div className="border-b border-gray-500 w-full"></div>
          <h2 className="text-xl sm:text-2xl font-bold mt-6 mb-2">
            PART 1: RELEASE OF LIABILITY, WAIVER OF CLAIMS AND ASSUMPTION OF
            RISKS
          </h2>
          <p className="text-sm sm:text-base font-bold mb-2">
            PLEASE READ CAREFULLY
          </p>
          <p className="text-sm sm:text-base font-light mb-4">
            In consideration of being allowed to participate in the fitness
            classes, sessions, and use of{" "}
            <span className="font-bold">Lagree Pulse</span> facilities and
            online services (collectively, the{" "}
            <span className="font-bold">“Activities”</span>), you agree to the
            following:
          </p>
          <ol className="list-decimal ml-8 mb-4">
            <li className="mb-2">
              <span className="font-bold">Assumption of Risks</span>
              <br />
              You understand and accept that the Activities involve physical
              exertion and may expose you to risks, including serious injury or
              death. You acknowledge that:
              <ul className="list-disc ml-8 mt-1">
                <li>You are voluntarily participating in the Activities.</li>
                <li>
                  You are physically able to participate and have consulted a
                  doctor if needed.
                </li>
                <li>
                  You assume full responsibility for any injury, loss, or damage
                  resulting from your participation.
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <span className="font-bold">Release and Waiver</span>
              <br />
              You release Lagree Pulse and its affiliates, officers, employees,
              contractors, and agents (collectively, the “Releasees”) from any
              claims or liability arising from:
              <ul className="list-disc ml-8 mt-1">
                <li>
                  Participation in the Activities or use of Lagree Pulse
                  premises.
                </li>
                <li>The negligence of Lagree Pulse or the Releasees.</li>
                <li>
                  Any breach of duty or contract related to the Activities.
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <span className="font-bold">Indemnification</span>
              <br />
              You agree to indemnify and hold harmless Lagree Pulse and the
              Releasees from any and all third-party claims or liabilities
              related to your participation.
            </li>
            <li className="mb-2">
              <span className="font-bold">Personal Property</span>
              <br />
              Lagree Pulse is not responsible for any lost, stolen, or damaged
              personal property.
            </li>
            <li className="mb-2">
              <span className="font-bold">Limitation of Liability</span>
              <br />
              If any court finds the release invalid, Lagree Pulse's total
              liability shall not exceed the greater of:
              <br />
              (i) Total fees paid by you in the last six (6) months; or
              <br />
              (ii) $500.
            </li>
            <li className="mb-2">
              <span className="font-bold">Entire Agreement</span>
              <br />
              This Agreement is the complete and exclusive statement of
              understanding between the parties.
            </li>
            <li className="mb-2">
              <span className="font-bold">Severability</span>
              <br />
              If any provision is found to be invalid or unenforceable, the
              remainder shall remain in full force and effect.
            </li>
            <li className="mb-2">
              <span className="font-bold">Binding Effect</span>
              <br />
              This Agreement is binding on you and your heirs, executors, and
              permitted assigns.
            </li>
            <li className="mb-2">
              <span className="font-bold">Governing Law and Jurisdiction</span>
              <br />
              This Agreement shall be governed by the laws of British Columbia,
              Canada. Claims must be brought in the courts of British Columbia
              or Ontario, unless otherwise allowed under applicable consumer
              protection laws.
            </li>
            <li className="mb-2">
              <span className="font-bold">Language</span>
              <br />
              The parties have agreed that this Agreement be written in English.
              Les parties ont convenu que cette convention soit rédigée en
              anglais.
            </li>
            <li className="mb-2">
              <span className="font-bold">Authority</span>
              <br />
              If you are entering this Agreement on behalf of another person or
              entity, you confirm you have authority to do so.
            </li>
          </ol>
          <div className="border-b border-gray-500 w-full"></div>

          <h2 className="text-xl sm:text-2xl font-bold mt-6 mb-2">
            PART 2: GENERAL TERMS OF SERVICE
          </h2>
          <ol className="list-decimal ml-8 mb-4" start={12}>
            <li className="mb-2">
              <span className="font-bold">Payments</span>
              <br />
              All purchases are final unless otherwise stated.
              <br />
              Fees are payable as listed on our website or communicated at point
              of sale.
              <br />
              You agree to pay all applicable fees, including recurring
              memberships.
            </li>
            <li className="mb-2">
              <span className="font-bold">Cancellations & Refunds</span>
              <br />
              Cancellation policies vary depending on class type and package.
              <br />
              Late cancellations or no-shows may result in forfeiture of class
              credit.
              <br />
              Refunds are issued at Lagree Pulse's sole discretion.
            </li>
            <li className="mb-2">
              <span className="font-bold">Studio Policies</span>
              <br />
              You agree to comply with all posted or communicated studio rules.
              <br />
              You will treat all staff and clients with respect.
              <br />
              Disruptive or unsafe behavior may result in suspension or
              termination of your account.
            </li>
            <li className="mb-2">
              <span className="font-bold">Use of Facilities and Equipment</span>
              <br />
              You agree to use all equipment and facilities in a safe and
              responsible manner.
              <br />
              Any damage caused by misuse may result in liability.
            </li>
            <li className="mb-2">
              <span className="font-bold">Intellectual Property</span>
              <br />
              All content provided by Lagree Pulse including workouts, class
              formats, video content, trademarks, and logos are the property of
              Lagree Pulse. You may not reproduce, distribute, or display this
              content without express written permission.
            </li>
            <li className="mb-2">
              <span className="font-bold">Privacy</span>
              <br />
              Our use of your personal data is governed by our Privacy Policy.
              By using the Service, you consent to our data practices.
            </li>
          </ol>
          <div className="border-b border-gray-500 w-full"></div>

          <h2 className="text-xl sm:text-2xl font-bold mt-6 mb-2">
            Contact Information
          </h2>
          <p className="text-sm sm:text-base font-light">
            <span className="block">
              📧 Email:{" "}
              <a href="mailto:info@lagreepulse.com" className="underline">
                info@lagreepulse.com
              </a>
            </span>
            <span className="block">
              🌐 Website:{" "}
              <a
                href="https://www.lagreepulse.com"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.lagreepulse.com
              </a>
            </span>
          </p>
          <div className="border-b border-gray-500 mt-7 w-full"></div>

          <p className="text-sm sm:text-base font-semibold mt-4">
            © Lagree Pulse, June 2025. All rights reserved.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfServices;
