'use client'

import { useState } from 'react'
import nft from '../../../public/aunctions.json'

const Category = () => {
  const [currentCategory, setCurrentCategory] = useState('All items')
  const filteredItems = nft.data.filter((item) => {
    if (currentCategory === 'All items') {
      return true
    } else {
      return item.type === currentCategory
    }
  })

  const handleCategoryClick = (type: string) => {
    setCurrentCategory(type)
  }

  return (
    <section>
      <div className='mt-8 mb-8 flex md:flex md:justify-end md:mt-0 md:mb-0 md:w-full gap-3 font-bold text-sm'>
        <button
          className={`w-32 px-3 py-[6px] rounded-full text-neutral4 focus:bg-neutral8 focus-within:text-neutral2 ${currentCategory === 'All items' ? 'bg-neutral8 text-neutral2' : ''
            }`}
          onClick={() => handleCategoryClick('All items')}
        >
          <span>All items</span>
        </button>
        <button
          className={`px-3 py-[6px] rounded-full text-neutral4 focus:bg-neutral8 focus-within:text-neutral2 ${currentCategory === 'Art' ? 'bg-neutral8 text-neutral2' : ''
            }`}
          onClick={() => handleCategoryClick('Art')}
        >
          <span>Art</span>
        </button>
        <button
          className={`px-3 py-[6px] rounded-full text-neutral4 focus:bg-neutral8 focus-within:text-neutral2 ${currentCategory === 'Photography' ? 'bg-neutral8 text-neutral2' : ''
            }`}
          onClick={() => handleCategoryClick('Photography')}
        >
          <span>Photography</span>
        </button>
      </div>
    </section>
  )
}

export default Category