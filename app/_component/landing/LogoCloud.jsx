"use client";
import Image from "next/image";
import Logo from "@/public/Images/white-icon-logo.png";
import { BuildingLibraryIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";
import LogoPlaceholder from "@/public/Images/logo-placeholder-image.png";

export default function LogoCloud({ text }) {
  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-primary">
          {text}
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={LogoPlaceholder}
            alt="Transistor"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={LogoPlaceholder}
            alt="Transistor"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={LogoPlaceholder}
            alt="Transistor"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={LogoPlaceholder}
            alt="Transistor"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={LogoPlaceholder}
            alt="Transistor"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
