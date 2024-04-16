import React from "react";

type Props = {};

const LoService = (props: Props) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Explore Our Local Rental Locations
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Begin Your Journey of Exploration and Discovery with Our Comprehensive
          and Hassle-Free Rental Services, Designed to Enhance Every Moment of
          Your Travel Experience
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src="https://media.istockphoto.com/id/905996466/photo/havana-cuba-downtown-skyline.webp?b=1&s=170667a&w=0&k=20&c=DHiDOkt6Z72kTu1PUAszQNi6VS8j42bh2-PIxU9qCNk="
              alt=""
            />

            <h1 className="mt-4 text-2xl text-gray-700 capitalize dark:text-white group-hover:text-white">
              Havana, Cuba:
            </h1>

            <p className="mt-2 text-gray-500 text-sm capitalize dark:text-gray-300 group-hover:text-gray-300">
              Explore Havana&apos;s colorful streets with our classic car
              rentals.
            </p>
          </div>

          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src="https://media.istockphoto.com/id/1468064391/photo/aerial-photo-of-belfast-cityscape-in-northern-ireland.webp?b=1&s=170667a&w=0&k=20&c=I9-LWw3W2ClUkcNzoNBSbSuL4zb88y_HgTyWOPagKlA="
              alt=""
            />

            <h1 className="mt-4 text-2xl text-gray-700 capitalize dark:text-white group-hover:text-white">
              Belfast, N. Ireland:
            </h1>

            <p className="mt-2 text-gray-500 text-sm capitalize dark:text-gray-300 group-hover:text-gray-300">
              Discover Northern Ireland&apos;s beauty with our scenic road
              trips.
            </p>
          </div>

          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src="https://media.istockphoto.com/id/802893644/photo/aerial-view-of-downtown-miami-florida.webp?b=1&s=170667a&w=0&k=20&c=H-XDlDn232mWML90oL4x0nMbc9K_TUPOpf9rVIeFun0="
              alt=""
            />

            <h1 className="mt-4 text-2xl text-gray-700 capitalize dark:text-white group-hover:text-white">
              Miami, Florida:
            </h1>

            <p className="mt-2 text-gray-500 text-sm capitalize dark:text-gray-300 group-hover:text-gray-300">
              Cruise Miami&apos;s beaches in luxury with our car rentals.
            </p>
          </div>

          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src="https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFnb3MlMjBuaWdlcmlhfGVufDB8fDB8fHww"
              alt=""
            />

            <h1 className="mt-4 text-2xl text-gray-700 capitalize dark:text-white group-hover:text-white">
              Lagos, Nigeria:
            </h1>

            <p className="mt-2 text-gray-500 text-sm capitalize dark:text-gray-300 group-hover:text-gray-300">
              Zip through Lagos&apos; streets with our motorbike rentals.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src="https://media.istockphoto.com/id/1692200722/photo/panoramic-tourist-attractions-in-the-city-park-of-tokyo-asia-business-concept-image-panoramic.webp?b=1&s=170667a&w=0&k=20&c=qyciqWOt0Ot0ebAXnWLyClDOs1B2zUb8qohR2sqgAI0="
              alt=""
            />

            <h1 className="mt-4 text-2xl text-gray-700 capitalize dark:text-white group-hover:text-white">
              Tokyo, Japan:
            </h1>

            <p className="mt-2 text-gray-500 text-sm capitalize dark:text-gray-300 group-hover:text-gray-300">
              Navigate Tokyo&apos;s energy with our compact car rentals.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src="https://media.istockphoto.com/id/926529270/photo/stunning-wide-angle-aerial-drone-view-of-the-sydney-harbour-with-the-opera-house-a-cruise-ship.webp?b=1&s=170667a&w=0&k=20&c=ROEjAPdb3dEy7VBKWiuDjePQSF97zyfp1CRtJnVDFM0="
              alt=""
            />

            <h1 className="mt-4 text-2xl text-gray-700 capitalize dark:text-white group-hover:text-white">
              Sydney, Australia:
            </h1>

            <p className="mt-2 text-gray-500v text-sm capitalize dark:text-gray-300 group-hover:text-gray-300">
              Explore Ausie&apos;s landmarks with our versatile rentals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoService;
