"use client";
import { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isSignUpHovered, setIsSignUpHovered] = useState(false);

  const handleSignUpHover = () => {
    setIsSignUpHovered(true);
  };

  const handleSignUpLeave = () => {
    setIsSignUpHovered(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12 divide-x-2 divide-black">
            <a className=" text-teal-600 hidden md:inline" href="/">
              <img src="../logo.png" width="130" height="80" />
            </a>
            <div className="font-bold px-7">
              <div className="flex flex-col items-center">
                <div className="flex-grow text-3xl tracking-wider">PUMA</div>
                <div className="font-semibold">COMPUTING</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-md font-medium text-black">
                <li>
                  <a href="/">Home</a>
                </li>

                <li>
                  <a href="/events">Events</a>
                </li>

                <li>
                  <a href="/">News</a>
                </li>

                <li>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5">
                        Information
                        <ChevronDownIcon
                          className="-mr-1 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                ipe
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                ipe
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                alek
                              </a>
                            )}
                          </Menu.Item>
                          <form method="POST" action="#">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  type="submit"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block w-full px-4 py-2 text-left text-sm"
                                  )}
                                >
                                  alek
                                </button>
                              )}
                            </Menu.Item>
                          </form>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </li>

                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-1">
              <a
                className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black hover:text-white hover:bg-[#0C8CE9] duration-300"
                href="/auth/signin"
              >
                Sign In
              </a>

              <div className="hidden sm:flex">
                <a
                  className={`rounded-md px-5 py-2.5 text-sm font-medium hover:text-black hover:bg-white duration-300 ${
                    isSignUpHovered
                      ? "bg-[#0C8CE9] text-white"
                      : "bg-white text-[#0C8CE9]"
                  }`}
                  href="/auth/signup"
                  onMouseEnter={handleSignUpHover}
                  onMouseLeave={handleSignUpLeave}
                >
                  Sign Up
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}