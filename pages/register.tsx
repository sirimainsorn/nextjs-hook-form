import MainLayout from '@/layouts/MainLayout'
import React from 'react'

export default function RegisterPage() {
  return (
    <main className='grid min-h-full place-items-center bg-white px-6 py-14 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <img
          className='mx-auto h-10 w-auto'
          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
          alt='Your Company'
        />
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          Create your account
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-md'>
        <form className='space-y-6' action='#' method='POST'>
          <div>
            <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
              Your email
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <label htmlFor='fullName' className='block text-sm font-medium leading-6 text-gray-900'>
              Full Name
            </label>
            <div className='mt-2'>
              <input
                id='fullName'
                name='fullName'
                type='text'
                autoComplete='fullName'
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Password
              </label>
            </div>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='mt-10 space-y-10'>
            <fieldset>
              <div className='mt-6 space-y-3'>
                <div className='relative flex gap-x-3'>
                  <div className='flex h-6 items-center'>
                    <input
                      id='comments'
                      name='comments'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                    />
                  </div>
                  <div className='text-sm leading-6'>
                    <label htmlFor='comments' className='text-gray-500'>
                      I accept the{' '}
                      <a
                        href='#'
                        className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
                      >
                        Terms of Use
                      </a>{' '}
                      and{' '}
                      <a
                        href='#'
                        className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
                      >
                        Privacy Policy.
                      </a>
                    </label>
                  </div>
                </div>
                <div className='relative flex gap-x-3'>
                  <div className='flex h-6 items-center'>
                    <input
                      id='candidates'
                      name='candidates'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                    />
                  </div>
                  <div className='text-sm leading-6'>
                    <label htmlFor='candidates' className='text-gray-500'>
                      Email me about product updates and resources.
                    </label>
                  </div>
                </div>
                {/* <div className='relative flex gap-x-3'>
                  <div className='flex h-6 items-center'>
                    <input
                      id='offers'
                      name='offers'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                    />
                  </div>
                  <div className='text-sm leading-6'>
                    <label htmlFor='offers' className='font-medium text-gray-900'>
                      Offers
                    </label>
                    <p className='text-gray-500'>
                      Get notified when a candidate accepts or rejects an offer.
                    </p>
                  </div>
                </div> */}
              </div>
            </fieldset>
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Create an account
            </button>
          </div>
        </form>
        <p className='mt-10 text-center text-sm text-gray-500'>
          Already have an account?{' '}
          <a href='#' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
            Login here.
          </a>
        </p>
      </div>
    </main>
  )
}

RegisterPage.layout = MainLayout
