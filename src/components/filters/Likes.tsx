'use client'

import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'

const Likes = () => {
  const [open, setOpen] = useState(false)

  return (
    <Menu as="div" className="flex flex-col mx-auto mb-6 w-full">
      <div className='w-full mb-3'>

        <div className='my-6 w-full h-[0.5px] bg-neutral3 rounded'></div>

        <h2 className='text-neutral5 text-xs font-bold mb-3'>LIKES</h2>

        <Menu.Button onClick={() => setOpen(!open)} className="flex justify-between w-full h-12 items-center rounded-xl bg-white px-4 pr-2 py-2 text-sm border border-neutral3 text-neutral8">
          Most liked
          {open
            ? <ChevronUpIcon className="flex justify-end text-neutral4 border border-neutral3 rounded-full h-5 w-5" aria-hidden="true" />
            : <ChevronDownIcon className="flex justify-end text-neutral4 border border-neutral3 rounded-full h-5 w-5" aria-hidden="true" />
          }
        </Menu.Button>
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
        <Menu.Items className="z-10 shadow-lg focus:outline-none border border-neutral3 rounded-xl bg-neutral2">
          <div className="p-1 h-12">
            <Menu.Item>
              <button className='w-full p-2 items-center rounded-xl text-sm mb-[10px] text-start text-neutral7'>
                Less liked
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Likes