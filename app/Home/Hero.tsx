import React from 'react'
import Link from 'next/link'
import BreadCrumbs from './BreadCrumbs'

const Home = () => {
  return (
    <div>
      <header className='bg-gray-900'>
        <div className='container px-6 py-16 mx-auto'>
          <div className='items-center lg:flex'>
            <div className='w-full lg:w-1/2'>
              <div className='lg:max-w-lg'>
                <h1 className='text-3xl font-semibold text-white lg:text-5xl'>
                  Unlock Endless Driving With RouteRover
                </h1>

                <p className='mt-3 text-gray-300'>
                  Embark on a journey of discovery and convenience with Route
                  Rover, your reliable navigator for exploring new horizons,
                  experiencing unforgettable adventures, and making every mile
                  memorable.
                </p>

                <div className='flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row'>
                  <Link
                    href='/rent-car'
                    className='block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-700'
                  >
                    Rent Car
                  </Link>
                  <Link
                    href='/rent-bike'
                    className='block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300'
                  >
                    Rent Bike
                  </Link>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
              <img
                className='w-full h-full lg:max-w-3xl rounded-xl'
                src='https://media.istockphoto.com/id/1150425295/photo/3d-illustration-of-generic-hatchback-car-perspective-view.webp?b=1&s=170667a&w=0&k=20&c=QKVzqIOrSi8pYPDM90tUOpECoLcfbe8GVIkJDBI7cb8='
                alt='Catalogue-pana.svg'
              />
            </div>
          </div>
        </div>
      </header>
      <BreadCrumbs />
    </div>
  )
}

export default Home
