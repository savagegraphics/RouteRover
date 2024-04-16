import React from 'react'
import Select from './Select'
import Selectone from './Selectone'
import Search from './Search'
import Exoticar from '@/public/exoticar.jpg'

type Props = {}

const BreadCrumbs = (props: Props) => {
  return (
    <div className='mb-16'>
      <div className='relative px-4 sm:px-0'>
        <div className='absolute inset-0 h-1/2' />
        <div className='relative grid mx-auto overflow-hidden bg-white divide-y rounded-xl shadow sm:divide-y-0 sm:max-w-screen-sm md:grid-cols-3 lg:grid-cols-5 lg:max-w-screen-xl'>
          <div className='inline-block p-8 text-center items-center'>
            <p className='font-bold tracking-wide text-gray-800'>
              <Search />
            </p>
          </div>
          <div className='inline-block p-8 text-center items-center'>
            <p className='font-bold tracking-wide text-gray-800'>
              <Selectone />
            </p>
          </div>
          <div className='inline-block p-8 text-center items-center'>
            <p className='font-bold tracking-wide text-gray-800'>
              <Select />
            </p>
          </div>
          <div className='inline-block p-8 text-center items-center'>
            <p className='font-bold tracking-wide text-gray-800'>
              <Selectone />
            </p>
          </div>
          <div className='inline-block p-8 text-center items-center'>
            <p className='font-bold tracking-wide text-gray-800'>
              <Select />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumbs
