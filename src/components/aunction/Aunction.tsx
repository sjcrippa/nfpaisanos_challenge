'use client'

import Image from 'next/image'
import { useState } from 'react'

import useFetch from '@/hooks/useFetch'
import AunctionSlider from './AunctionSlider'
import Loader from '../loader/Loader'

const Aunction = () => {
  const url = '/popular-aunctions.json'
  const { data } = useFetch(url);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Avanzar al siguiente artículo en el slider
  const onNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (data ? data.length : 0));
  };

  // Retroceder al artículo anterior en el slider
  const onPrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (data ? data.length : 0)) % (data ? data.length : 0));
  };

  // Validando que data no sea null:
  if (!data || data.length === 0) {
    return <Loader />
  }

  const currentItem = data[currentIndex];

  return (
    <>
      <main className='mt-32 grid grid-cols-1 lg:grid lg:grid-cols-2 mb-28'>
        <Image
          className='rounded-2xl animate-fade-right animate-once animate-delay-300 shadow-lg shadow-neutral3/60'
          src={currentItem.media.image} alt='logo'
          width={683}
          height={1024} />
        <AunctionSlider
          onNextClick={onNextClick}
          onPrevClick={onPrevClick}
          currentItem={currentItem} />
      </main>
    </>
  )
}

export default Aunction