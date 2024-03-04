"use client";

import VideoPlaceholder from "@/public/Images/Video-placeholder.png";
import { FaAdversal } from "react-icons/fa";

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
          Turn all of your investment tasks into single click automations.
        </p>
        <h2 className="text-base font-semibold leading-7 text-secondary mt-2 ">
          All connected and working together
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Whether your just getting started or a seasoned veteran, Our powerful
          Real Estate Investment System will handle every aspect of your
          business.
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
          <div className={`py-3 px-3  lg:col-span-2 lg:px-8 `}>
            <FaAdversal
              size={50}
              className={`${
                showImageRight
                  ? " text-white object-contain lg:col-span-1"
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
              MARKETING AND ADVERTISING
            </h2>
            <h2
              className={`${
                showImageRight
                  ? " text-white text-2xl font-semibold leading-10"
                  : "text-2xl font-semibold leading-10 text-primary"
              } `}
            >
              Create a website, branded to you. With a single click.
            </h2>

            <h2
              className={`${
                showImageRight
                  ? "mt-3 text-md   font-medium leading-7 text-white"
                  : "mt-3 text-md   font-normal leading-7 text-gray-600"
              } `}
            >
              Inbound warm leads are the life blood of any business, and yours
              is no different. With one click of a button we create a branded
              website for you. Where potential sellers can submit their property
              for you to buy. This not only improves credibility, but gives you
              a stream of warm leads coming in.
            </h2>
            <h2
              className={`${
                showImageRight
                  ? "mt-3 text-md   font-medium leading-7 text-white"
                  : "mt-3 text-md   font-normal leading-7 text-gray-600"
              } `}
            >
              If you want more leads you can purchase one of our advertising
              packages and we will send paid traffic to your site.
            </h2>
            <h2
              className={`${
                showImageRight
                  ? "mt-3 text-md   font-medium leading-7 text-white"
                  : "mt-3 text-md   font-normal leading-7 text-gray-600"
              } `}
            >
              Don’t want to follow up with your leads? Just turn on our AI
              automated follow up. And our AI will have a conversation to
              qualify the lead automatically.
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
