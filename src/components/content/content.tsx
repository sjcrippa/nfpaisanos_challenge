import Image from "next/image";
import PriceRange from "../filters/priceRange";
import { AdjustmentsVerticalIcon } from '@heroicons/react/20/solid'


function Content() {
  return (
    <>
      <main className="flex flex-col mx-auto md:w-full md:flex">
        <section className="w-full md:-mr-14">
          <PriceRange />
        </section>

        <div className="mt-8 mx-auto md:mt-0 flex gap-8 mb-8">
          <section className="w-64 h-[474px] bg-neutral2 rounded-[20px]">
            <div className="p-3">
              <Image className="rounded-[20px]" src='/auction.png' alt='img-card' width={297.56} height={417.79} />
              <div className="card-body py-5">
                <div className="flex flex-1 justify-between">
                  <h2 className="text-neutral8">Card tag</h2>
                  <div className="border-2 border-primary4 w-[68px] h-[26px] rounded items-center">
                    <span className="px-2 font-extrabold text-xs text-primary4">2.45 ETH</span>
                  </div>
                </div>
                <div className="flex flex-1 justify-between my-3">
                  <div className="flex">
                    <Image className="rounded-full bg-primary1 border-2 border-neutral3" src='/avatar.png' alt="mini avatar" width={24} height={24} />
                    <Image className="rounded-full bg-primary2 border-2 border-neutral3" src='/avatar.png' alt="mini avatar" width={24} height={24} />
                    <Image className="rounded-full bg-primary3 border-2 border-neutral3" src='/avatar.png' alt="mini avatar" width={24} height={24} />
                  </div>
                  <p className="text-neutral6 text-sm">3 in stock</p>
                </div>

                <div className="w-full h-[1px] bg-neutral3 rounded-sm"></div>

                <div className="flex justify-between mt-3 items-center text-neutral4">
                  <div className="flex gap-1 items-center">
                    <AdjustmentsVerticalIcon className="w-5 h-5 text-neutral4" />
                    <p className="text-xs">Highest bid</p>
                  </div>
                  <p className="text-xs">New bid 🔥</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Content;
