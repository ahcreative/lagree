"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#F4F4F3] text-black py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto  md:px-20">
        {/* Main content grid - switches to column on mobile */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:items-start">
          {/* Newsletter Signup */}

          {/* Links Columns - side by side on mobile, spaced on desktop */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between md:justify-start gap-8 md:gap-16 w-full md:w-auto">
              {/* Links Column 1 */}
              <div className="underline">
                <h3 className="font-bold text-base mb-2">LINKS</h3>
                <ul className="space-y-1 font-medium">
                  <li>
                    <Link href="/first-timers" className="hover:underline">
                      FIRST TIMERS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/termsOfServices"
                      className="hover:underline"
                      target="_blank"
                    >
                      Terms of Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/gift-card" className="hover:underline">
                      GIFT CARDS
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Links Column 2 */}
              <div className="underline">
                <ul className="space-y-1 font-medium md:mt-8">
                  <li>
                    <Link href="/private-sessions" className="hover:underline">
                      PRIVATE SESSIONS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/studiopolicies"
                      className="uppercase hover:underline"
                    >
                      Studio Policies
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="hover:underline">
                      CAREERS
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
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
          </div>

          <div className="space-y-4 w-full md:w-auto">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold uppercase text-xl mb-2">
                Be the first to know
              </h3>
              <p className="font-medium text-sm mb-3 md:mb-5">
                Community events, sales and promotions. <br />
                Don't miss the good stuff.
              </p>
              <Link href={"/contact"}>
                <div>
                  <button className="bg-none border border-black text-black hover:bg-black hover:text-white py-3 px-28 rounded font-medium  transition-colors duration-300">
                    SIGN UP HERE
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Partnership Call */}

        {/* Copyright & Land Acknowledgment */}
        <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
          <p className="text-xs md:text-sm">
            © Lagree Pulse Fitness Ltd., All right reserved.
          </p>
        </div>
        <noscript>
          Please enable JavaScript to view the
          <a href="https://marianatek.com/?ref_noscript" rel="nofollow">
            Web Integrations by Mariana Tek.
          </a>
        </noscript>
      </div>

      {/* Mariana Tek Web Integrations Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
              (function () {
                // Set tenant name here
                var TENANT_NAME = 'lagreepulse.sandbox';
                var d = document;
                var sA = ['polyfills', 'js'];
                for (var i = 0; i < sA.length; i++) {
                  var s = d.createElement('script');
                  s.src = 'https://' + TENANT_NAME + '.marianaiframes.com/' + sA[i];
                  s.setAttribute('data-timestamp', +new Date());
                  (d.head || d.body).appendChild(s);
                }
              })();
            `,
        }}
      ></script>
    </footer>
  );
};

export default Footer;
