"use client";
import { useState } from "react";
import { Dialog, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "@/public/Images/white-icon-logo.png";
import VideoPlaceholder from "@/public/Images/Video-placeholder.png";
import Link from "next/link";

const navigation = [
  { name: "Platform", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Blog", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hovering, setHovering] = useState(null);

  return (
    <div className="bg-primary">
      <header className="absolute bg-primary inset-x-0 top-0 z-50">
        <nav
          onMouseLeave={() => {
            setHovering(null);
          }}
          className="mx-auto  flex max-w-7xl items-center justify-between p-5 "
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <img className="h-8 w-auto" src={Logo} alt="" /> */}
              <Image className="" src={Logo} alt="" />
            </a>
          </div>
          <div className="flex-1 flex items-center justify-end">
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}

            {/* dropdown menu */}
            <div className="">
              <a
                className="flex items-center text-sm font-semibold leading-6 text-white"
                onMouseEnter={() => {
                  setHovering(true);
                }}
              >
                Company
                <svg
                  className="ml-2 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            {/* dropdown menu end */}
          </div>
          {/* dropdown menuss  */}
          {hovering && (
            // <
            <Menu as="div" className="relative bg-white">
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black-400 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                style={{ top: "70%", left: "-80px" }}
              >
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/about"
                      className={classNames(
                        active ? "bg-gray-300" : "",
                        "block px-4 py-2 text-sm bg-primary text-gray-200  hover:text-black"
                      )}
                    >
                      About
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/blog"
                      className={classNames(
                        active ? "bg-gray-300" : "",
                        "block px-4 py-2 text-sm bg-primary text-gray-200 hover:text-black"
                      )}
                    >
                      Blog
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/career"
                      className={classNames(
                        active ? "bg-gray-300" : "",
                        "block px-4 py-2 text-sm bg-primary text-gray-200 hover:text-black"
                      )}
                    >
                      Career
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu>
          )}

          {/* // */}

          <div className="hidden lg:flex  ml-16 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image className="" src={Logo} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="relative isolate overflow-hidden pt-14 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:col-span-2 xl:col-auto">
              Stress-Free Event Management Software
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-white my-8">
                Event Technology you’ll love.
              </p>
              <p className="text-lg leading-8 text-white">
                Collect registrations, manage guest list RSVP, sell tickets,
                launch your branded event app and event website , speed up
                onsite checkin, gamify your event, and more. It’s everything you
                need, all from one platform.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-full bg-textCyan px-8 py-2 text-sm font-semibold text-primary shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:text-white focus-visible:outline-indigo-600 hover:text-white"
                >
                  Talk to us
                  <i>
                    <chevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </i>
                </a>
              </div>
            </div>
            <Image
              src={VideoPlaceholder}
              alt=""
              className=" mt-10 aspect-[6/5] w-full max-w-lg rounded-md object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 "
            />
          </div>
        </div>
        {/* <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" /> */}
      </div>
    </div>
  );
}
