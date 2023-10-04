'use client'

import Image from "next/image";
import { AdjustmentsVerticalIcon } from '@heroicons/react/20/solid';

import useFetch from '@/hooks/useFetch';
import Loader from "../loader/Loader";
import PriceRange from "@/components/filters/PriceRange";
import TimeRange from "../filters/TimeRange";
import SearchBar from "../search/SearchBar";
import { useFilter } from "@/context/FiltersContext";
import ClearFilterBtn from "../common/ClearFilterBtn";
import Likes from "../filters/Likes";
import Colors from "../filters/Colors";
import Category from "../filters/Category";
import { useEffect, useState } from "react";

const MainContent = () => {
  const url = '/aunctions.json'
  const { data } = useFetch(url);
  const { filteredItems } = useFilter()
  const [noProductsFound, setNoProductsFound] = useState<boolean>(false);

  useEffect(() => {
    // Verificar si no se encontraron productos coincidentes
    if (filteredItems.length === 0) {
      setNoProductsFound(true);
    } else {
      setNoProductsFound(false);
    }
  }, [filteredItems]);

  return (
    <>
      <SearchBar />
      <div className="flex flex-col md:flex md:flex-row md:justify-between items-center">
        <TimeRange />
        <Category />
      </div>
      <main className="flex flex-col mx-auto lg:flex lg:flex-row">

        <section className="flex flex-col">
          <PriceRange />
          <Likes />
          <Colors />
          <ClearFilterBtn />
        </section>

        <div className="grid grid-cols-1 mx-auto sm:grid sm:grid-cols-2 sm:gap-8 xl:grid xl:grid-cols-3 xl:gap-8 mt-8 xl:ml-24">

          {!data ? <Loader /> : filteredItems.map((nft) => (
            <div key={nft.id} className="mt-8 md:mt-0 mb-8">
              <section className="w-full h-[550px] lg:w-64 md:h-[474px] bg-neutral2 rounded-[20px] animate-fade-right animate-duration-500 animate-once">
                <div className="p-3">
                  <Image
                    className="rounded-[20px]"
                    src={nft.media.image}
                    alt="nft image"
                    width={297.56}
                    height={417.79} />
                  <div className="card-body py-5">
                    <div className="flex flex-1 justify-between">
                      <h2 className="text-neutral8">{nft.author}</h2>
                      <div className="border-2 border-primary4 w-[71px] h-[26px] rounded items-center text-center">
                        <span className="px-2 font-extrabold text-xs text-primary4">{nft.instantPrice}</span>
                      </div>
                    </div>
                    <div className="flex flex-1 justify-between my-3">
                      <div className="flex">
                        <Image
                          className="rounded-full bg-primary1 border-2 border-neutral3"
                          src={nft.authorAvatar}
                          alt="mini avatar"
                          width={24}
                          height={24} />
                        <Image
                          className="rounded-full bg-primary2 border-2 border-neutral3"
                          src={nft.authorAvatar}
                          alt="mini avatar"
                          width={24}
                          height={24} />
                        <Image
                          className="rounded-full bg-primary3 border-2 border-neutral3"
                          src={nft.authorAvatar}
                          alt="mini avatar"
                          width={24}
                          height={24} />
                      </div>
                      <p className="text-neutral6 text-sm">{nft.stock} in stock</p>
                    </div>

                    <div className="w-full h-[1px] bg-neutral3 rounded-sm"></div>

                    <div className="flex justify-between mt-3 items-center text-neutral4">
                      <div className="flex gap-1 items-center">
                        <AdjustmentsVerticalIcon className="w-5 h-5 text-neutral4" />
                        <p className="text-xs">{nft.highestBid}</p>
                      </div>
                      <button className="text-xs">New bid 🔥</button>
                    </div>
                  </div>
                </div>

              </section>
            </div>
          ))}

        </div>

        {noProductsFound &&
          <div className="w-full mb-24">
            <Image className="mx-auto animate-jump-in animate-once animate-delay-300 animate-duration-500" src='/not-found.png' alt="not-found" width={500} height={500}/>
            <h2 className="text-2xl text-center text-primary3 italic font-bold animate-fade-left animate-once animate-delay-700 animate-duration-500">Oops!</h2>
            <h3 className="text-xl text-center text-primary3 italic font-bold animate-fade-right animate-once animate-delay-1000 animate-duration-500"> No succesfull match up 😭</h3>
          </div>
        }
      </main>
    </>
  )
}

export default MainContent;
