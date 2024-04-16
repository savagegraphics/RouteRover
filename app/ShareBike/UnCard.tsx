import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
    <section className='p-6 bg-white text-gray-800'>
      <div className='container grid gap-6 mx-auto lg:-mr-[4rem] text-center lg:grid-cols-2 xl:grid-cols-5'>
        <div className='w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-100'>
          <h2 className='text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl'>
            Winter Collection
          </h2>
          <p className='mt-2 text-lg'>By Luis Vuitton</p>
          <p className='mt-4 mb-8 max-w-md text-gray-500'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            iusto, cumque dolores sit odio ex.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Aliquam iusto, cumque dolores sit odio
            ex.Lorem ipsum,
          </p>
          <a
            href='#'
            className='group mt-auto flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-black px-6 py-2 text-white transition'
          >
            <span className='group flex w-full items-center justify-center rounded py-1 text-center font-bold'>
              {' '}
              Shop now{' '}
            </span>
            <svg
              className='flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              />
            </svg>
          </a>
        </div>

        <img
          src='https://source.unsplash.com/random/480x360'
          alt=''
          className='object-cover items-end w-full lg:w-[32rem] h-[24rem] rounded-md xl:col-span-3 bg-gray-500'
        />
      </div>
    </section>
  )
}

export default Card
