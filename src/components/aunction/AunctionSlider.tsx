'use client'

import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useEffect, useState } from 'react';

import { NftsTypes } from '@/types';
import useCurrencyFetch from '../../hooks/useCurrencyFetch';
import convertETHtoUSD from '../../utility/convertEthToUsd';
import { convertTimestampToTime, TimeConversionResult } from '@/utility/convertTime';
import timeData from '../../../public/popular-aunctions.json'

interface ChildComponentProps {
  onNextClick: () => void;
  onPrevClick: () => void;
  currentItem: NftsTypes;
}

const AunctionSlider: React.FC<ChildComponentProps> = ({ onNextClick, onPrevClick, currentItem }) => {
  const { currencyData, loading } = useCurrencyFetch('/eth-usd.json');

  const ethValue = currentItem.instantPrice;

  const usdEquivalent = convertETHtoUSD(ethValue);

  const [timeData, setTimeData] = useState<TimeConversionResult | null>(null);

  useEffect(() => {
    // Simulación de carga de datos desde una API o JSON
    const jsonData = { endsAt: currentItem.endsAt }; // Reemplaza con tus datos reales

    const { endsAt } = jsonData;
    const convertedTime = convertTimestampToTime(endsAt);
    setTimeData(convertedTime);
  }, [currentItem]);

  return (
    <>
      <div className='mx-auto mt-8 lg:ml-32 lg:mt-0'>
        <section className='flex flex-col'>
          <h1 className='text-neutral8 text-6xl tracking-wider leading-none font-black'>the creator network®</h1>
          <div className='mt-5 grid grid-cols-2 gap-[33px]'>
            <section className='flex h-10 items-center'>
              <Image className='rounded-full' src={currentItem.authorAvatar} alt='avatar' height={60} width={40} />
              <div className='flex flex-col ml-2 flex-shrink-0'>
                <h2 className='text-neutral4'>Creator</h2>
                <h4 className='text-neutral8 font-semibold'>{currentItem.author}</h4>
              </div>
            </section>
            <section className='flex h-10 items-center'>
              {/* <Image src='' alt='user' height={20} width={20} /> */}
              <div className='p-2 bg-primary4 rounded-full'>
                <div className='w-6 h-6 border-2 border-light rounded-md'></div>
              </div>
              <div className='flex flex-col ml-2'>
                <h2 className='text-neutral4'>Instant price</h2>
                <h3 className='text-neutral8 font-semibold'>{currentItem.instantPrice}</h3>
              </div>
            </section>
          </div>

          <div className='mt-10 text-neutral8'>
            <article className='p-8 bg-neutral2 rounded-3xl '>
              <section className='flex flex-col text-center'>

                <div>
                  <h2 className='font-medium'>Current Bid</h2>
                  <p className='text-5xl font-bold'>{currentItem.highestBid}</p>
                  <span className='text-neutral4 text-2xl font-semibold'>${currencyData?.usd}</span>
                </div>

                <div className='mt-6 text-center'>
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
            <button className='w-full bg-primary1 rounded-full px-6 py-4 font-bold'>Place a bid</button>
            <button className='mt-2 w-full border border-neutral3 rounded-full px-6 py-4 font-bold'>View a item</button>
          </section>

          {/* BTN */}
          <section className='flex justify-center md:flex md:justify-normal md:gap-2'>
            <button onClick={onPrevClick} className='p-2 text-neutral4'><FaArrowLeft /></button>
            <button onClick={onNextClick} className='p-2 border border-neutral3 rounded-full text-neutral4'><FaArrowRight /></button>
          </section>

        </section>
      </div>
    </>

  )
}

export default AunctionSlider