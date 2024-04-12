import { useRef, useState } from 'react'

type Props = {}

const FaqsCard = (props: {
  faqsList: { q: string; a: string }
  idx: number
}) => {
  const answerElRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState(false)
  const [answerH, setAnswerH] = useState('0px')
  const { faqsList, idx } = props

  const handleOpenAnswer = () => {
    if (
      answerElRef.current &&
      answerElRef.current.firstChild instanceof HTMLElement
    ) {
      // Check if firstChild is an HTMLElement
      const answerElH = answerElRef.current.firstChild.offsetHeight // Access offsetHeight from firstChild
      setState(!state)
      setAnswerH(`${answerElH + 20}px`)
    }
  }

  return (
    <div
      className='space-y-3 mt-5 overflow-hidden border-b'
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className='cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium'>
        {faqsList.q}
        {state ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-gray-500 ml-2'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M20 12H4'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-gray-500 ml-2'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 4v16m8-8H4'
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className='duration-300 overflow-hidden' // Adjust the class to hide overflow
        style={{ height: state ? answerH : '0px' }} // Remove unnecessary curly braces
      >
        <div>
          <p className='text-gray-500'>{faqsList.a}</p>
        </div>
      </div>
    </div>
  )
}

const FAQs = (props: Props) => {
  const faqsList = [
    {
      q: 'What documents do I need to rent a vehicle?',
      a: "To rent a vehicle, you will typically need a valid driver's license, a credit card in your name for payment and security deposit purposes, and in some cases, additional identification such as a passport or government-issued ID."
    },
    {
      q: 'Can I choose a specific make and model of vehicle for my rental?',
      a: 'While we strive to accommodate preferences, vehicle make and model availability may vary based on location and current inventory. You can often select a vehicle category or class that meets your needs, and we all do our best to provide a suitable option within that category.'
    },
    {
      q: 'Are there any additional fees or charges I should be aware of?',
      a: 'In addition to the rental fee, there may be additional charges such as taxes, surcharges, insurance fees, and refueling fees. Its important to review the rental agreement carefully to understand all associated costs before confirming your reservation.'
    },
    {
      q: 'What is the fuel policy for rented vehicles?',
      a: 'Our standard fuel policy requires renters to return the vehicle with the same amount of fuel as when it was rented. Failure to do so may result in refueling charges at a premium rate. Some locations may offer options such as pre-purchase fuel or the choice to return the vehicle empty for an additional fee.'
    },
    {
      q: 'What is the rental duration and can I extend my rental period?',
      a: 'Rental durations are typically calculated on a daily basis, with options for short-term, long-term, and even hourly rentals depending on availability. If you need to extend your rental period, please contact our customer service team as soon as possible to make arrangements. Extensions are subject to availability and may incur additional charges.'
    }
  ]

  return (
    <section className='py-14'>
      <div className='max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8'>
        <div className='flex-1'>
          <div className='max-w-lg'>
            <h3 className='font-semibold text-indigo-600'>
              Frequently asked questions
            </h3>
            <p className='mt-3 text-gray-800 text-3xl font-extrabold sm:text-4xl'>
              All information you need to know
            </p>
          </div>
        </div>
        <div className='flex-1 mt-12 md:mt-0'>
          {faqsList.map((item, idx) => (
            <FaqsCard key={idx} idx={idx} faqsList={item} /> // Add key prop
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs
