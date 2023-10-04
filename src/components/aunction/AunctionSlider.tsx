'use client'

import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useEffect, useState } from 'react';

import { NftsTypes } from '@/types';
import ethToUsd from '../../utility/convertEthToUsd';
import { convertTimestampToTime, TimeConversionResult } from '@/utility/convertTime';
import Swal from 'sweetalert2';

interface ChildComponentProps {
  onNextClick: () => void;
  onPrevClick: () => void;
  currentItem: NftsTypes;
}

const AunctionSlider: React.FC<ChildComponentProps> = ({ onNextClick, onPrevClick, currentItem }) => {
  const [timeData, setTimeData] = useState<TimeConversionResult | null>(null);

  // Convirtiendo eth a usd:
  const ethAmount = parseFloat(currentItem.highestBid)
  const usdAmount = !isNaN(ethAmount) ? ethToUsd(ethAmount) : 0

  // Fraccionando el timestamp en horas, minutos y segundos:
  useEffect(() => {
    const jsonData = { endsAt: currentItem.endsAt };
    const { endsAt } = jsonData;
    const convertedTime = convertTimestampToTime(endsAt);
    setTimeData(convertedTime);
  }, [currentItem]);

  return (
    <>
      <div className='mx-auto mt-8 lg:ml-32 lg:mt-0'>
        <section className='flex flex-col'>
          <h1 className='text-neutral8 text-6xl tracking-wider leading-none font-black animate-fade-down animate-once animate-duration-500 animate-delay-300'>the creator network®</h1>
          <div className='mt-5 grid grid-cols-2 gap-12 md:gap-[33px]'>
            <section className='flex h-10 items-center animate-fade-right animate-once animate-duration-700 animate-delay-500'>
              <Image className='rounded-full w-12 h-12' src={currentItem.authorAvatar} alt='avatar' height={60} width={40} />
              <div className='flex flex-col ml-2 md:flex md:flex-shrink-0 '>
                <h2 className='text-neutral4'>Creator</h2>
                <h4 className='text-neutral8 font-semibold'>{currentItem.author}</h4>
              </div>
            </section>
            <section className='flex h-10 items-center animate-fade-left animate-once animate-duration-700 animate-delay-500'>
              <div className='p-2 bg-primary4 rounded-full'>
                <Image src='/Line.svg' alt='box' width={24} height={24} />
              </div>
              <div className='flex flex-col ml-2 '>
                <h2 className='text-neutral4'>Instant price</h2>
                <h3 className='text-neutral8 font-semibold'>{currentItem.instantPrice}</h3>
              </div>
            </section>
          </div>

          <div className='mt-10 text-neutral8 animate-fade-left animate-once animate-duration-700 animate-delay-300'>
            <article className='p-8 bg-neutral2 rounded-3xl '>
              <section className='flex flex-col text-center'>

                <div className='animate-fade-low animate-once animate-duration-700 animate-delay-500'>
                  <h2 className='font-medium'>Current Bid</h2>
                  <p className='text-5xl font-bold'>{currentItem.highestBid}</p>
                  <div className='text-neutral4 text-2xl font-semibold flex items-center gap-2 justify-center flex-1 tracking-wider'>
                    <p className='italic text-xs'>usd: </p>
                    <span>
                      ${usdAmount}
                    </span>
                  </div>
                </div>

                <div className='mt-6 text-center animate-fade-up animate-once animate-duration-700 animate-delay-500'>
                  <h2 className='font-medium'>Auction ending in</h2>
                  <div className='grid grid-cols-3 text-[32px] font-bold'>
                    <span>{timeData?.hours}</span>
                    <span>{timeData?.minutes}</span>
                    <span>{timeData?.seconds}</span>
                  </div>
                  <div className='grid grid-cols-3 text-neutral4 font-medium'>
                    <span>hrs</span>
                    <span>mins</span>
                    <span>secs</span>
                  </div>
                </div>

              </section>
            </article>
          </div>

          {/* BTN */}
          <section className='mt-10 mb-10 text-neutral8'>
            <button
              onClick={() => Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'This section is in the development stage!',
              })}
              className='w-full bg-primary1 rounded-full px-6 py-4 font-bold hover:bg-primary1/80 animate-fade-right animate-once animate-delay-700 animate-duration-1000'>Place a bid</button>
            <button
              onClick={() => Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'This section is in the development stage!',
              })}
              className='mt-2 w-full border border-neutral3 rounded-full px-6 py-4 font-bold hover:bg-neutral2/30 animate-fade-left animate-once animate-delay-700 animate-duration-1000'>View a item</button>
          </section>

          {/* BTN */}
          <section className='flex justify-center gap-2 md:flex md:justify-normal md:gap-2'>
            <button onClick={onPrevClick} className='p-2 border border-neutral3 rounded-full text-neutral4 active:animate-jump animate-once hover:bg-primary1 hover:text-neutral8'><FaArrowLeft /></button>
            <button onClick={onNextClick} className='p-2 border border-neutral3 rounded-full text-neutral4 active:animate-jump animate-once hover:bg-primary1 hover:text-neutral8'><FaArrowRight /></button>
          </section>

        </section>
      </div>
    </>

  )
}

export default AunctionSlider