"use client";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import VideoPlaceholder from "@/public/Images/Video-placeholder.png";

import Image from "next/image";
import { CheckIcon } from "@heroicons/react/20/solid";
import LogoPlaceholder from "@/public/Images/logo-placeholder-image.png";

export default function InfoBlocksHeader({ showImageRight = false }) {
  const dataLink = [
    {
      text: "Do you want to build a website?",
      link: "/services/it-consulting-services-for-businesses#",
    },
  ];
  // console.log("imageSrc", imageSrc);
  const button = {
    link: "#",
  };

  return (
    <div
      className={`relative isolate ${
        showImageRight ? "bg-secondary  text-white" : " bg-gray-100"
      }`}
    >
      <div className="pt-14 mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Elevate Your Event Experience with our Event Technology Platform{" "}
        </p>
        <h2 className="text-base font-semibold leading-7 text-secondary mt-2 ">
          To power your next In-Person, Virtual and Hybrid Event{" "}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Whether you’re getting started or an established pro, our powerful
          event management platform helps with every phase of event cycle.
        </p>
      </div>
      <div
        className={`mx-auto max-w-7xl px-3 py-2 sm:py-20 lg:flex lg:items-center  `}
      >
        <Image
          src={VideoPlaceholder}
          width={500}
          height={500}
          alt=""
          className="mt-16 sm:mt-24 lg:mt-0 flex-shrink sm:flex-shrink-0 lg:flex-shrink-0 lg:flex-grow w-full sm:w-auto rounded-lg"
        />
        <div
          className={`mx-auto max-w-2xl lg:mx-0 lg:flex-auto  ${
            showImageRight ? "lg:order-last text-white" : ""
          }`}
        >
          <div className={`py-3 px-3 lg:col-span-2 lg:px-8 `}>
            <CheckIcon
              className={`${
                showImageRight
                  ? " text-white max-h-20 object-contain lg:col-span-1"
                  : "max-h-20 object-contain bg-white text-primary lg:col-span-1 rounded-lg shadow-xl"
              }`}
            />

            <h2
              className={`
            ${
              showImageRight
                ? " text-white text-sm bold my-8 font-bold leading-7 "
                : " text-sm bold my-8 font-bold leading-7 text-primary"
            }
           `}
            >
              VIRTUAL STAGE
            </h2>
            <h2
              className={`${
                showImageRight
                  ? " text-white text-2xl font-semibold leading-10"
                  : "text-2xl font-semibold leading-10 text-primary"
              } `}
            >
              Your gateway to a better livestream & On-demand video experienc
            </h2>

            <h2
              className={`${
                showImageRight
                  ? "mt-3 text-md   font-medium leading-7 text-white"
                  : "mt-3 text-md   font-normal leading-7 text-gray-600"
              } `}
            >
              Our live & on-demand video solution is built for events, not
              meetings. We know you need flexible streaming experiences – go
              live from a web-camera or a studio or stream a 4K video with no
              lag/sound issues or integrate Zoom. We have all video capabilities
              to streamline your virtual experience and wow remote guests.
            </h2>
            <ul
              role="list"
              className="mt-5 space-y-4 text-sm leading-6 text-gray-600"
            ></ul>
            <div className="mt-3 flex items-center gap-x-6">
              <a
                href={button.link}
                className={`rounded-full bg-primary-green px-8 py-3 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary-green-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                ${showImageRight ? "bg-textCyan" : " bg-secondary"}
                `}
              >
                Learn More
                {/* <span aria-hidden="true">→</span> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
