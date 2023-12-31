'use client'

import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { useFilter } from '@/context/FiltersContext'

const TimeRange = () => {
  const [open, setOpen] = useState(false)
  const { handleAntiquity, selectedAntiquity } = useFilter()

  const handleOptionSelect = (antiquityValue: any) => {
    handleAntiquity(antiquityValue);
    setOpen(false); // Cerrar el dropdown despues de seleccionar una opcion.
  };

  return (
    <Menu as="div" className="flex flex-col mx-auto w-full">
      <div className='w-full mb-3'>
        <Menu.Button onClick={() => setOpen(!open)} className="flex justify-between w-full lg:w-44 h-12 items-center rounded-xl bg-white px-4 pr-2 py-2 text-sm border border-neutral3 text-neutral8">
        {selectedAntiquity}
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
          <Menu.Items className="z-10 shadow-lg focus:outline-none border border-neutral3 rounded-xl bg-neutral2 md:w-44">
            <div className="p-1">
              <Menu.Item>
                <button
                  onClick={() => handleOptionSelect("Newest")}
                  className="w-full p-2 items-center text-start text-neutral7 hover:bg-dark hover:text-neutral8 rounded-xl"
                >
                  Newest
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => handleOptionSelect("Oldest")}
                  className="w-full p-2 items-center text-start text-neutral7 hover:bg-dark hover:text-neutral8 rounded-xl"
                >
                  Oldest
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </div>
      </Transition>
    </Menu>
  )
}

export default TimeRange