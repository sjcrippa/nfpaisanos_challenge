'use client'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function OrderBy() {
  return (
    <Menu as="div" className="flex flex-col md:flex md:flex-row w-full">
      <div className='w-full'>
        <Menu.Button className="flex justify-between w-full md:w-48 rounded-xl bg-white px-4 pr-2 py-2 text-sm border border-neutral3 text-neutral8">
          Newest
          <ChevronDownIcon className="flex justify-end text-neutral3 border border-neutral3 rounded-full h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <div className='mt-8 mb-8 flex md:flex md:justify-end md:mt-0 md:mb-0 md:w-full gap-3 font-bold text-sm'>
        <button className='px-3 py-[6px] rounded-full text-neutral4 focus:bg-neutral8 focus-within:text-neutral2'>
          <span>All items</span>
        </button>
        <button className='px-3 py-[6px] rounded-full text-neutral4 focus:bg-neutral8 focus-within:text-neutral2'>
          <span>Art</span>
        </button>
        <button className='px-3 py-[6px] rounded-full text-neutral4 focus:bg-neutral8 focus-within:text-neutral2'>
          <span>Photography</span>
        </button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute mt-10 z-10 w-56 origin-right bg-white shadow-lg focus:outline-none backdrop-blur-lg border border-neutral3 rounded-xl">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-neutral8' : 'text-neutral8',
                    'block px-4 py-2 text-sm'
                  )}
                >Oldest</a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default OrderBy