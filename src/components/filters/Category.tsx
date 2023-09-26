import React from 'react'

const Category = () => {
  return (
    <section className='w-full'>
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
    </section>
  )
}

export default Category