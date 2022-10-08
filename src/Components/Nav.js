import React, { useState } from "react";
import logo from "../Images/logo.png";
import { Transition } from "@headlessui/react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="">
        <div className=" pr-28 pl-28 xxs:pr-10 xxm:pr-8 xxs:pl-10 xxm:pl-8 smm:pl-20 smm:pr-20 xms:pl-20 xms:pr-20">
          <div className="flex items-center justify-between h-16">
            <div className="flex justify-between w-screen">
              <div className="flex-shrink-0">
                <img className="w-12" src={logo} alt="skdl log" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-b space-x-4">
                  <ul className="nav-links flex justify-between w-80 font-medium xxs:absolute xxm:absolute xms:absolute">
                    <li>
                      <a href="/" className="border-b-2 border-green">
                        Home
                      </a>
                    </li>

                    <li>
                      <a href="#newsletter">Newsletter</a>
                    </li>

                    <li>
                      <a href="/features">Features</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-black inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black h-screen text-white"
              >
                <ul className="nav-links flex flex-col items-center justify-between h-80 mt-10 font-medium ">
                  <li>
                    <a href="/" className="border-b-2 border-green ">
                      Home
                    </a>
                  </li>

                  <li>
                    <a href="#newsletter">Newsletter</a>
                  </li>

                  <li>
                    <a href="/features">Features</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
