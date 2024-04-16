import React from 'react'
import { Button } from '@nextui-org/react'

const Card = () => {
  // Array of card details
  const cardDetails = [
    {
      title: 'Lamborghini Aventador',
      image: 'https://via.placeholder.com/600x400',
      leftDetails: [
        { label: 'Seats', value: '2' },
        { label: 'Luggage', value: '1' },
        { label: 'Doors', value: '2' },
        { label: 'Fuel', value: 'Petrol' }
      ],
      rightDetails: [
        { label: 'Horsepower', value: '700' },
        { label: 'Engine', value: '6.5L V12' },
        { label: 'Drive', value: '4WD' },
        { label: 'Type', value: 'Coupe' }
      ],
      price: '$500,000'
    },
    {
      title: 'Ferrari 488 GTB',
      image: 'https://via.placeholder.com/600x400',
      leftDetails: [
        { label: 'Seats', value: '2' },
        { label: 'Luggage', value: '1' },
        { label: 'Doors', value: '2' },
        { label: 'Fuel', value: 'Petrol' }
      ],
      rightDetails: [
        { label: 'Horsepower', value: '660' },
        { label: 'Engine', value: '3.9L V8' },
        { label: 'Drive', value: 'RWD' },
        { label: 'Type', value: 'Coupe' }
      ],
      price: '$300,000'
    },
    {
      title: 'Tesla Cybertruck',
      image: 'https://via.placeholder.com/600x400',
      leftDetails: [
        { label: 'Seats', value: '6' },
        { label: 'Storage', value: '6.5 ft' },
        { label: 'Doors', value: '4' },
        { label: 'Fuel', value: 'Electric' }
      ],
      rightDetails: [
        { label: 'Horsepower', value: '600' },
        { label: 'Battery', value: '250 kWh' },
        { label: 'Drive', value: 'AWD' },
        { label: 'Type', value: 'Truck' }
      ],
      price: '$70,000'
    },
    {
      title: 'Tesla Semi',
      image: 'https://via.placeholder.com/600x400',
      leftDetails: [
        { label: 'Seats', value: '2' },
        { label: 'Cargo Capacity', value: 'Unknown' },
        { label: 'Doors', value: '1' },
        { label: 'Fuel', value: 'Electric' }
      ],
      rightDetails: [
        { label: 'Horsepower', value: 'Unknown' },
        { label: 'Battery', value: 'Unknown' },
        { label: 'Drive', value: 'Unknown' },
        { label: 'Type', value: 'Truck' }
      ],
      price: 'Contact for Price'
    },
    {
      title: 'McLaren P1',
      image: 'https://via.placeholder.com/600x400',
      leftDetails: [
        { label: 'Seats', value: '2' },
        { label: 'Luggage', value: '2' },
        { label: 'Doors', value: '2' },
        { label: 'Fuel', value: 'Petrol' }
      ],
      rightDetails: [
        { label: 'Horsepower', value: '903' },
        { label: 'Engine', value: '3.8L V8 Hybrid' },
        { label: 'Drive', value: 'RWD' },
        { label: 'Type', value: 'Coupe' }
      ],
      price: '$1,350,000'
    },
    {
      title: 'Bugatti Chiron',
      image: 'https://via.placeholder.com/600x400',
      leftDetails: [
        { label: 'Seats', value: '2' },
        { label: 'Luggage', value: '1' },
        { label: 'Doors', value: '2' },
        { label: 'Fuel', value: 'Petrol' }
      ],
      rightDetails: [
        { label: 'Horsepower', value: '1500' },
        { label: 'Engine', value: '8.0L Quad-Turbo W16' },
        { label: 'Drive', value: 'AWD' },
        { label: 'Type', value: 'Coupe' }
      ],
      price: '$3,000,000'
    }
    // Add more exotic cars here
  ]

  // Ensure there are 24 cars in total
  const totalCars = cardDetails.length
  const remainingCars = 24 - totalCars
  for (let i = 0; i < remainingCars; i++) {
    cardDetails.push({
      title: 'Placeholder Car',
      image: 'https://via.placeholder.com/600x400',
      leftDetails: [
        { label: 'Seats', value: '?' },
        { label: 'Luggage', value: '?' },
        { label: 'Doors', value: '?' },
        { label: 'Fuel', value: '?' }
      ],
      rightDetails: [
        { label: 'Horsepower', value: '?' },
        { label: 'Engine', value: '?' },
        { label: 'Drive', value: '?' },
        { label: 'Type', value: '?' }
      ],
      price: 'Contact for Price'
    })
  }

  return (
    <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {cardDetails.map((card, index) => (
          <a
            key={index}
            className='group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            href='#'
          >
            <div className='aspect-w-16 aspect-h-11'>
              <img
                className='w-full object-cover rounded-xl'
                src={card.image}
                alt='Image Description'
              />
            </div>
            <div className='my-6'>
              <h3 className='text-xl font-semibold text-gray-800'>
                {card.title}
              </h3>
              {card.leftDetails.map((detail, index) => (
                <div className='flex justify-between' key={index}>
                  <p className='w-1/2 text-left'>
                    {detail.label}: {detail.value}
                  </p>
                  {/* Only display value on the right */}
                  {index < card.rightDetails.length && (
                    <p className='w-1/2 text-right'>
                      {card.rightDetails[index].label}:{' '}
                      {card.rightDetails[index].value}
                    </p>
                  )}
                </div>
              ))}
              <div className='flex justify-between mt-4'>
                <p className='w-1/2  text-left'>Per Hours</p>
              </div>

              <div className='flex justify-between mt-2'>
                <p className='w-1/2 text-left font-bold'>{card.price}</p>
                <p className='w-1/2 text-right'>
                  <Button className='bg-black text-white'>Button</Button>
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className='mt-12 text-center'>
        <a
          className='py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-blue-500 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
          href='#'
        >
          Read more
          <svg
            className='flex-shrink-0 size-4'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='m9 18 6-6-6-6' />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Card
