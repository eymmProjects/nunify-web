import React from "react";
import "../../app/globals.css";
import Nav from "../../app/_component/Layout/Nav";
import Footer from "@/app/_component/Layout/Footer";
import PricingCard from "./PricingCards";
export const Pricing = () => {
  return (
    <main>
      <Nav />
      <div className="bg-white/95 px-6 mt-24 py-32 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            Get the help you need
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transparent & Flexible Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            “Nunify event app platform is extremely easy to use and navigate. I
            loved the ability to seamlessly interact with attendees and custom
            branding opportunities”
          </p>
        </div>
      </div>

      {/*  */}
      <div className="bg-white/95 px-6 py-12 sm:py-22 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <PricingCard />
        </div>
      </div>
      <div className="bg-white/95 px-6 py-12 sm:py-22 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <PricingCard />
        </div>
      </div>
      <div className="bg-white/95 px-6 py-12 sm:py-22 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <PricingCard />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Pricing;
