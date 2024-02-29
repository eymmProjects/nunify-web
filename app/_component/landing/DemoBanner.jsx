import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function DemoBanner({ text, paragraph }) {
  return (
    <div className="bg-[#312A52] py-6 sm:py-14">
      <div className="bg-darkPurple text-white border-white  shadow-all-around shadow-violet-950   p-6 rounded-lg d max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className=" max-w-2xl mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-8">
              Ready to test-drive our product?
            </h2>
            <p>
              Get a guided walk-through of nunify’s event technology platform to
              experience why we’re setting new standards for webinars, virtual
              events, in-person events, and Hybrid events!
            </p>
          </div>
          <div className="flex gap-x-4">
            <button
              type="submit"
              className="flex items-center rounded-full bg-secondary  text-textCyan px-8 py-3 text-sm font-semibold border-2 border-textCyan shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book Demo now
              <ChevronRightIcon className=" h-3 w-3 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
