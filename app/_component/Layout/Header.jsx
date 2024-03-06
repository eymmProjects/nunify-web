"use client";
import { useState } from "react";
import { Dialog, Menu } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "@/public/Images/white-icon-logo.png";
import LogoRios from "@/public/Images/Rios_Logo.png";
import VideoPlaceholder from "@/public/Images/Video-placeholder.png";
import Link from "next/link";

const navigation = [
  { name: "Solutions", href: "#" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "#" },
  { name: "Company", href: "#" },
];

const dropdownMenuItems = [
  { href: "/branding", label: "Branding" },
  { href: "/marketing", label: "Marketing/ Automation" },
  { href: "/data", label: "Data" },
  { href: "/manpower", label: "Manpower" },
  { href: "/financing", label: "Financing" },
  { href: "/dispo", label: "Dispo" },
  { href: "/tools", label: "Tools" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hovering, setHovering] = useState(null);
  const [HoveringPlatform, setHoveringPlatform] = useState(null);

  return (
    <div className="bg-primary">
      <header className="fixed inset-x-0 top-0 z-50  bg-primary ">
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
              <Image className="w-20 h-20" src={LogoRios} alt="" />
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
            <div className="">
              <a
                className="flex items-center text-sm font-semibold leading-6 text-white"
                onMouseEnter={() => {
                  setHovering(true);
                }}
              >
                Platform
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
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                as={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* dropdown menuss  */}
          {/* // Dropdown menu component */}
          {hovering && (
            <Menu as="div" className="relative bg-white">
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black-400 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                style={{ top: "80%", right: "280px" }}
              >
                {dropdownMenuItems.map((item) => (
                  <Menu.Item key={item.href}>
                    {({ active }) => (
                      <Link
                        href={item.href}
                        className={classNames(
                          active ? "bg-gray-300" : "",
                          "block px-4 py-2 text-sm bg-primary text-gray-200 hover:bg-secondary hover:text-white"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
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
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:col-span-2 xl:col-auto">
                All in One Real Estate
                <span className="text-textCyan">Investing Software</span>
              </h1>
              <p className="text-lg leading-8 text-white my-8">
                Replace every Tool you use all in a single place.
              </p>
              <p className="text-lg leading-8 text-white">
                Creating a website for inbound marketing, AI auto Follow up,
                Data Pull and skiptracing, Cold Callers, Lending, Dispo,
                Contracts and more. Our system will handle every step of your
                Real Estate Investing business.
              </p>
              <div className="mt-10 flex  items-center ">
                <a
                  href="#"
                  className="inline-flex rounded-full bg-textCyan px-8 py-4 text-sm font-semibold text-primary shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:text-white focus-visible:outline-indigo-600 hover:text-white"
                >
                  Talk to us
                  <ChevronRightIcon
                    className="  h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <div className="mt-10 max-w-lg w-full sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 overflow-hidden rounded-md">
              <Image
                src={VideoPlaceholder}
                alt=""
                layout="responsive"
                width={500}
                height={500}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        {/* <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" /> */}
      </div>
    </div>
  );
}
