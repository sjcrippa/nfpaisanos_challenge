'use client'

import Image from 'next/image'
import { useState } from 'react'

import useFetch from '@/hooks/useFetch'
import AunctionSlider from './AunctionSlider'

const Aunction = () => {
  const url = '/popular-aunctions.json'
  const { data, loading, error } = useFetch(url);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const onNextClick = () => {
    // Avanzar al siguiente artículo en el slider
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (data ? data.length : 0));
  };

  const onPrevClick = () => {
    // Retroceder al artículo anterior en el slider
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (data ? data.length : 0)) % (data ? data.length : 0));
  };

  if (!data || data.length === 0) {
    return <div className='text-light'>{loading}</div>;
  }

  const currentItem = data[currentIndex];

  return (
    <>
      <main className='mt-32 grid grid-cols-1 lg:grid lg:grid-cols-2 mb-28'>

        {/* {data?.map((currentItem) => (
          <div key={currentItem.id}>
            <Image src={currentItem.media.image} alt='logo' width={683} height={1024} />
          </div>
        ))} */}
        <Image className='rounded-2xl' src={currentItem.media.image} alt='logo' width={683} height={1024} />

        <AunctionSlider onNextClick={onNextClick} onPrevClick={onPrevClick} currentItem={currentItem} />

      </main>
    </>
  )
}

export default Aunction