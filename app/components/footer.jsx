import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#F4F4F3] text-black py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto px-4 md:px-20">
        {/* Main content grid - switches to column on mobile */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:items-start">
          {/* Newsletter Signup */}
          <div className="space-y-4 w-full md:w-auto">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-xl mb-2">STAY CONNECTED</h3>
              <p className="font-medium text-sm mb-3 md:mb-5">
                Community events, sales and promotions. <br />
                Don't miss the good stuff.
              </p>
            </div>
          </div>

          {/* Links Columns - side by side on mobile, spaced on desktop */}
          <div className="flex flex-row justify-between md:justify-end gap-8 md:gap-16 w-full md:w-auto">
            {/* Links Column 1 */}
            <div className="underline">
              <h3 className="font-bold text-base mb-2">LINKS</h3>
              <ul className="space-y-1 font-medium">
                <li>
                  <Link href="/gift-card" className="hover:underline">
                    GIFT CARDS
                  </Link>
                </li>
                {/* <li>
                  <Link href="/careers" className="hover:underline">
                    CAREERS
                  </Link>
                </li>
                <li>
                  <Link href="/social" className="hover:underline">
                    SOCIAL
                  </Link>
                </li> */}
                <li>
                  <Link href="/first-timers" className="hover:underline">
                    FIRST TIMERS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="hover:underline"
                    target="_blank"
                  >
                    COMMUNITY INITIATIVES
                  </Link>
                </li>
                <li>
                  <Link href="/private-sessions" className="hover:underline">
                    PRIVATE SESSIONS
                  </Link>
                </li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div className="underline">
              <h3 className="font-bold text-base mb-2 md:hidden">MORE</h3>
              <ul className="space-y-1 font-medium md:mt-8">
                <li>
                  <Link href="/faq-policies" className="hover:underline">
                    FAQ + POLICIES
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    CONTACT US
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-services" className="hover:underline">
                    TERMS OF SERVICE
                  </Link>
                </li>
                <li>
                  <Link href="/the-studios" className="hover:underline">
                    LOCATIONS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Partnership Call */}
        <div className="mt-8 md:mt-10">
          <p className="text-sm md:text-base">
            <span className="font-bold">
              Are you a brand or creator Looking to collaborate?
            </span>{" "}
            Get in touch{" "}
            <a
              href="mailto:setarehkopahi@gmail.com?"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              HERE
            </a>
            .
          </p>
        </div>

        {/* Copyright & Land Acknowledgment */}
        <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
          <p className="text-xs md:text-sm">
            © Lagree Eliteform Fitness Ltd., All right reserved.
          </p>
          <p className="text-xs md:text-sm">
            Lagree Elitform operates on the traditional, ancestral, and unceded
            territory of the Sḵwx̱wú7mesh (Squamish), Səl̓ílwətaʔ (Tsleil-Waututh)
            and xʷməθkʷəy̓əm (Musqueam) Nations. To learn more about the land
            visit -{" "}
            <a
              href="https://www.whose.land/en/"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              https://www.whose.land/en/
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
