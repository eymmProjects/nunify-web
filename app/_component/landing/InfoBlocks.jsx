"use client";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import VideoPlaceholder from "@/public/Images/Video-placeholder.png";

import Image from "next/image";
import { CheckIcon } from "@heroicons/react/20/solid";
import LogoPlaceholder from "@/public/Images/logo-placeholder-image.png";

export default function InfoBlocks({ showImageRight = false }) {
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
      <div
        className={`mx-auto max-w-7xl px-6 py-4 sm:py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-10  `}
      >
        <div
          className={`mx-auto max-w-2xl lg:mx-0 lg:flex-auto  ${
            showImageRight ? "lg:order-last text-white" : ""
          }`}
        >
          <div className={`py-6 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12`}>
            <CheckIcon
              className={`${
                showImageRight
                  ? " text-white max-h-20 object-contain lg:col-span-1"
                  : "max-h-20 object-contain text-primary lg:col-span-1"
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
                className={`rounded-md bg-primary-green px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary-green-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                ${showImageRight ? "bg-textCyan" : " bg-secondary"}
                `}
              >
                Learn More
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <Image
          src={VideoPlaceholder}
          width={500}
          height={500}
          alt=""
          className="mt-16 sm:mt-24 lg:mt-0 flex-shrink sm:flex-shrink-0 lg:flex-shrink-0 lg:flex-grow w-full sm:w-auto rounded-lg"
        />
      </div>
    </div>
  );
}
