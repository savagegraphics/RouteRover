import React from 'react'

type Props = {}

const SingleCard = (props: Props) => {
  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-lg px-4 md:px-8'>
        <div className='grid gap-8 sm:grid-cols-2'>
          <div className='flex flex-col items-center h-[20rem] justify-center sm:items-start md:py-24 lg:px-32 lg:py-32 bg-gray-300 lg:-mr-[8rem] z-10 lg:mt-12 rounded-xl'>
            <h2 className='text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl'>
              Winter Collection
            </h2>
            <p className='mt-2 text-lg'>By Luis Vuitton</p>
            <p className='mt-4 mb-8 max-w-md text-gray-500'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
              iusto, cumque dolores sit odio ex.Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Aliquam iusto, cumque dolores sit
              odio ex.Lorem ipsum,
            </p>
          </div>
          <div className='relative h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto lg:mb-8 lg:w-[42rem]'>
            <img
              src='https://images.unsplash.com/photo-1590642916589-592bca10dfbf?auto=format&q=75&fit=crop&w=600'
              loading='lazy'
              alt='Photo by @heydevn'
              className='absolute inset-0 h-full w-full object-cover object-center'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCard
