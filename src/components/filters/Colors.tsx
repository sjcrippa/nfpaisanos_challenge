'use client'

import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { useFilter } from '@/context/FiltersContext'

const Colors = () => {
  const [open, setOpen] = useState(false)
  const { handleColorChange, selectedColor } = useFilter();


  return (
    <Menu as="div" className="flex flex-col mx-auto w-full">
      <div className='w-full mb-3'>

        <h2 className='text-neutral5 text-xs font-bold mb-3'>OPEN</h2>

        <Menu.Button onClick={() => setOpen(!open)} className="flex justify-between w-full h-12 items-center rounded-xl bg-white px-4 pr-2 py-2 text-sm border border-neutral3 text-neutral8">
          {selectedColor}
          {open
            ? <ChevronUpIcon className="flex justify-end text-neutral4 border border-neutral3 rounded-full h-5 w-5" aria-hidden="true" />
            : <ChevronDownIcon className="flex justify-end text-neutral4 border border-neutral3 rounded-full h-5 w-5" aria-hidden="true" />
          }
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className='flex flex-col'>

          <Menu.Items className="z-10 shadow-lg focus:outline-none border border-neutral3 rounded-xl bg-neutral2">
            <div className="p-2 text-neutral7 font-medium">
              <ul className='font-medium'>
                <Menu.Item>
                  <li className='text-sm mb-[10px]'>
                    <button
                      onClick={() => handleColorChange('All colors')}
                      className='w-full p-2 flex items-center rounded-xl gap-2 text-primary1 hover:bg-dark hover:text-neutral8'>
                      <div className='w-6 h-6 rounded-full border-2 border-primary1'></div>
                      All colors
                    </button>
                  </li>
                </Menu.Item>
                <Menu.Item>
                  <li className='text-sm mb-[10px]'>
                    <button
                      onClick={() => handleColorChange('black')}
                      className='w-full flex p-2 items-center rounded-xl gap-2 hover:bg-dark hover:text-neutral8'>
                      <div className='w-6 h-6 rounded-full bg-dark'></div>
                      Black
                    </button>
                  </li>
                </Menu.Item>
                <Menu.Item>
                  <li className='text-sm mb-[10px]'>
                    <button
                      onClick={() => handleColorChange('green')}
                      className='w-full flex p-2 items-center rounded-xl gap-2 hover:bg-dark hover:text-neutral8'>
                      <div className='w-6 h-6 rounded-full bg-primary4'></div>
                      Green
                    </button>
                  </li>
                </Menu.Item>
                <Menu.Item>
                  <li className='text-sm mb-[10px]'>
                    <button
                      onClick={() => handleColorChange('pink')}
                      className='w-full flex p-2 items-center rounded-xl gap-2 hover:bg-dark hover:text-neutral8'>
                      <div className='w-6 h-6 rounded-full bg-primary3'></div>
                      Pink
                    </button>
                  </li>
                </Menu.Item>
                <Menu.Item>
                  <li className='text-sm mb-[10px]'>
                    <button
                      onClick={() => handleColorChange('purple')}
                      className='w-full flex p-2 items-center rounded-xl gap-2 hover:bg-dark hover:text-neutral8'>
                      <div className='w-6 h-6 rounded-full bg-primary2'></div>
                      Purple
                    </button>
                  </li>
                </Menu.Item>

              </ul>
            </div>
          </Menu.Items>
        </div>

      </Transition >

      <div className='my-6 w-full h-[0.5px] bg-neutral3 rounded'></div>

    </Menu >
  )
}

export default Colors