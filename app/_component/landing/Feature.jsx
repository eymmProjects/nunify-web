import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    nameSmall: "Interations",
    name: "Tap into the power of real-time analytics and user-data",
    description:
      "Your event is ready to become the ultimate data source for marketers and community leaders. Our data-driven AI platform captures millions of data points across the event cycle. We provide audience segmentation that enhances deeper engagement post-event",
    icon: CloudArrowUpIcon,
  },
  {
    nameSmall: "AROUND THE CLOCK 24X7 SUPPORT",
    name: "Nunify playtform interations to conenct to any system",
    description:
      "Your event is ready to become the ultimate data source for marketers and community leaders. Our data-driven AI platform captures millions of data points across the event cycle. We provide audience segmentation that enhances deeper engagement post-event",
    icon: CloudArrowUpIcon,
  },
  {
    nameSmall: "BACKEND BRILLIANCE",
    name: "Tap into the power of real-time analytics and user-data",
    description:
      "Your event is ready to become the ultimate data source for marketers and community leaders. Our data-driven AI platform captures millions of data points across the event cycle. We provide audience segmentation that enhances deeper engagement post-event",
    icon: CloudArrowUpIcon,
  },
  {
    nameSmall: "BACKEND BRILLIANCE",
    name: "Tap into the power of real-time analytics and user-data",
    description:
      "Your event is ready to become the ultimate data source for marketers and community leaders. Our data-driven AI platform captures millions of data points across the event cycle. We provide audience segmentation that enhances deeper engagement post-event",
    icon: CloudArrowUpIcon,
  },
];

export default function Feature() {
  return (
    <div className="bg-secondary py-14 sm:py-12">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 p-10 bg-[#262639]">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-primary">
            All this, With the best DIY event management system you've ever
            used.
          </h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            All this, With the best DIY event management system you've ever
            used.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col  space-y-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-white">
                  <feature.icon
                    className="h-16 w-16 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <dt className="text-base font-semibold leading-7 text-white">
                  {feature.nameSmall}
                </dt>
                <dt className="text-base font-semibold leading-7 text-white">
                  {feature.name}
                </dt>
                <dd className="text-base leading-7 text-white">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
