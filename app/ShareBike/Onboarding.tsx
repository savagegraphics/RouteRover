import React from 'react'

type Props = {}

const Onboarding = (props: Props) => {
  return (
    <div className='bg-gray-300'>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='grid gap-6 row-gap-10 lg:grid-cols-2'>
          <div className='relative lg:mr-16 bg-white rounded-xl p-12'>
            <form className='max-w-md mx-auto'>
              <div className='mb-6'>
                <h2 className='text-xl font-bold'>Get Started</h2>
                <p className='text-sm semibold'>Submit The Form To Start</p>
              </div>
              <div className='relative z-0 w-full mb-5 group'>
                <input
                  type='email'
                  name='floating_email'
                  id='floating_email'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='floating_email'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Email address
                </label>
              </div>
              <div className='relative z-0 w-full mb-5 group'>
                <input
                  type='password'
                  name='floating_password'
                  id='floating_password'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='floating_password'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Password
                </label>
              </div>
              <div className='relative z-0 w-full mb-5 group'>
                <input
                  type='password'
                  name='repeat_password'
                  id='floating_repeat_password'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='floating_repeat_password'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Confirm password
                </label>
              </div>
              <div className='grid md:grid-cols-2 md:gap-6'>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='text'
                    name='floating_first_name'
                    id='floating_first_name'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=' '
                    required
                  />
                  <label
                    htmlFor='floating_first_name'
                    className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    First name
                  </label>
                </div>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='text'
                    name='floating_last_name'
                    id='floating_last_name'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=' '
                    required
                  />
                  <label
                    htmlFor='floating_last_name'
                    className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Last name
                  </label>
                </div>
              </div>
              <div className='grid md:grid-cols-2 md:gap-6'>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='tel'
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    name='floating_phone'
                    id='floating_phone'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=' '
                    required
                  />
                  <label
                    htmlFor='floating_phone'
                    className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Phone number (123-456-7890)
                  </label>
                </div>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='text'
                    name='floating_company'
                    id='floating_company'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=' '
                    required
                  />
                  <label
                    htmlFor='floating_company'
                    className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Company (Ex. Google)
                  </label>
                </div>
              </div>
              <button
                type='submit'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Submit
              </button>
            </form>
          </div>
          <div className='lg:py-6 lg:pl-16'>
            <div className='mb-6'>
              <h2 className='text-2xl font-bold'>Easy Onboarding </h2>
            </div>
            <div className='flex'>
              <div className='flex flex-col items-center mr-4'>
                <div>
                  <div className='flex items-center justify-center w-10 h-10 border rounded-full'>
                    <svg
                      className='w-4 text-gray-600'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      viewBox='0 0 24 24'
                    >
                      <line
                        fill='none'
                        strokeMiterlimit='10'
                        x1='12'
                        y1='2'
                        x2='12'
                        y2='22'
                      />
                      <polyline
                        fill='none'
                        strokeMiterlimit='10'
                        points='19,15 12,22 5,15'
                      />
                    </svg>
                  </div>
                </div>
                <div className='w-px h-full bg-gray-300' />
              </div>
              <div className='pt-1 pb-8'>
                <p className='mb-2 text-lg font-bold'>Step 1</p>
                <p className='text-gray-700'>
                  All recipes are written using certain conventions, which
                  define the characteristics of common ingredients. The rules
                  vary from place to place.
                </p>
              </div>
            </div>
            <div className='flex'>
              <div className='flex flex-col items-center mr-4'>
                <div>
                  <div className='flex items-center justify-center w-10 h-10 border rounded-full'>
                    <svg
                      className='w-4 text-gray-600'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      viewBox='0 0 24 24'
                    >
                      <line
                        fill='none'
                        strokeMiterlimit='10'
                        x1='12'
                        y1='2'
                        x2='12'
                        y2='22'
                      />
                      <polyline
                        fill='none'
                        strokeMiterlimit='10'
                        points='19,15 12,22 5,15'
                      />
                    </svg>
                  </div>
                </div>
                <div className='w-px h-full bg-gray-300' />
              </div>
              <div className='pt-1 pb-8'>
                <p className='mb-2 text-lg font-bold'>Step 2</p>
                <p className='text-gray-700'>
                  The first mate and his Skipper too will do their very best to
                  make the others comfortable in their tropic island nest.
                  Michael Knight a young loner.
                </p>
              </div>
            </div>
            <div className='flex'>
              <div className='flex flex-col items-center mr-4'>
                <div>
                  <div className='flex items-center justify-center w-10 h-10 border rounded-full'>
                    <svg
                      className='w-4 text-gray-600'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      viewBox='0 0 24 24'
                    >
                      <line
                        fill='none'
                        strokeMiterlimit='10'
                        x1='12'
                        y1='2'
                        x2='12'
                        y2='22'
                      />
                      <polyline
                        fill='none'
                        strokeMiterlimit='10'
                        points='19,15 12,22 5,15'
                      />
                    </svg>
                  </div>
                </div>
                <div className='w-px h-full bg-gray-300' />
              </div>
              <div className='pt-1 pb-8'>
                <p className='mb-2 text-lg font-bold'>Step 3</p>
                <p className='text-gray-700'>
                  Tell them I hate them. Is the Space Pope reptilian!? Tell her
                  she looks thin. Hello, little man. I will destroy you!
                </p>
              </div>
            </div>
            <div className='flex'>
              <div className='flex flex-col items-center mr-4'>
                <div>
                  <div className='flex items-center justify-center w-10 h-10 border rounded-full'>
                    <svg
                      className='w-6 text-gray-600'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <polyline
                        fill='none'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeMiterlimit='10'
                        points='6,12 10,16 18,8'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='pt-1'>
                <p className='mb-2 text-lg font-bold'>Success</p>
                <p className='text-gray-700' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Onboarding
