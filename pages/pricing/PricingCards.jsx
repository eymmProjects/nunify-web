import {
  CheckIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
const product = {
  name: "Event App Pricing",
  price: "$220",

  highlights: [
    "200+ SVG icons in 3 unique styles",
    "Compatible with Figma, Sketch, and Adobe XD",
    "Drawn on 24 x 24 pixel grid",
  ],
  addons: ["Expo", "Web app", "White-label", "Live Stream", "24x7 Support"],
};

export default function PricingCard() {
  return (
    <div className="bg-gray-50 sm:rounded-lg max-w-7xl">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center">
          <div className="">
            <div className="mt-4">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>

              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>
              <p className="mt-2 text-sm text-gray-500"></p>
            </div>
            <div className=" border-gray-200 pt-4">
              <div className="prose prose-sm mt-4 text-gray-500">
                <ul role="list">
                  {product.highlights.map((highlight) => (
                    <div key={highlight} className="mt-6 flex items-center">
                      <CheckIcon
                        className="h-5 w-5 flex-shrink-0 text-green-500"
                        aria-hidden="true"
                      />

                      <li>{highlight}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="text-2xl font-medium text-gray-900">Add-ons</h3>

              <div className="prose prose-sm mt-4 text-gray-500">
                <ul role="list" className="flex flex-row flex-wrap gap-4">
                  {" "}
                  {/* Added flex-wrap and gap for responsiveness and spacing */}
                  {product.addons.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      {" "}
                      {/* Use index as key if highlight is not unique */}
                      <CheckIcon
                        className="h-5 w-5 flex-shrink-0 text-green-500 mr-2" // Added margin right for spacing between icon and text
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* another col */}
          <div className="mt-4 mx-auto text-center">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Price Start At
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
            <div className="my-5  items-center ">
              <p className="mt-6 text-lg leading-8 text-gray-600">150 Logins</p>
              <div className="flex flex-col text-center">
                <a
                  href="#"
                  className="mx-auto  mt-5 inline-flex rounded-full bg-textCyan px-8 py-4 text-sm font-semibold text-primary shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:text-white focus-visible:outline-indigo-600 hover:text-white"
                >
                  Watch Demo
                  <ChevronRightIcon
                    className="  h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#"
                  className="mx-auto mt-5 inline-flex rounded-full bg-textCyan px-8 py-4 text-sm font-semibold text-primary shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:text-white focus-visible:outline-indigo-600 hover:text-white"
                >
                  Create Account
                  <ChevronRightIcon
                    className="  h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <p className="mt-2 text-sm text-gray-500"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
