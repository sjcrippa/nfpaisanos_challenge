import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

function Auction() {
  return (
    <>
      <main className='mt-32 grid grid-cols-1 lg:grid lg:grid-cols-2 mb-28'>

        <div className=''>
          <Image className='rounded-3xl' src='/auction.png' alt='auction image' width={683} height={1024} />
        </div>

        <div className='mx-auto mt-8 lg:ml-32 lg:mt-0'>
          <section className='flex flex-col'>
            <h1 className='text-neutral8 text-6xl tracking-wider leading-none font-black'>the creator network®</h1>
            <div className='mt-5 grid grid-cols-2 gap-[33px]'>
              <section className='flex h-10 items-center'>
                <Image className='rounded-full' src='/avatar.png' alt='avatar' height={60} width={40} />
                <div className='flex flex-col ml-2'>
                  <h2 className='text-neutral4'>Creator</h2>
                  <h4 className='text-neutral8 font-semibold'>Don Paisano</h4>
                </div>
              </section>
              <section className='flex h-10 items-center'>
                {/* <Image src='' alt='user' height={20} width={20} /> */}
                <div className='p-2 bg-primary4 rounded-full '>
                  <div className='w-6 h-6 border-2 border-light rounded-md'></div>
                </div>
                <div className='flex flex-col ml-2'>
                  <h2 className='text-neutral4'>Instant price</h2>
                  <h3 className='text-neutral8 font-semibold'>3.5 ETH</h3>
                </div>
              </section>
            </div>

            <div className='mt-10 text-neutral8'>
              <article className='p-8 bg-neutral2 rounded-3xl '>
                <section className='flex flex-col text-center'>

                  <div>
                    <h2 className='font-medium'>Current Bid</h2>
                    <p className='text-5xl font-bold'>1.00 ETH</p>
                    <span className='text-neutral4 text-2xl font-semibold'>$3,618.36</span>
                  </div>

                  <div className='mt-6 text-center'>
                    <h2 className='font-medium'>Auction ending in</h2>
                    <div className='grid grid-cols-3 text-[32px] font-bold'>
                      <span>19</span>
                      <span>24</span>
                      <span>19</span>
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

            <section className='mt-10 mb-10 text-neutral8'>
              <button className='w-full bg-primary1 rounded-full px-6 py-4 font-bold'>Place a bid</button>
              <button className='mt-2 w-full border border-neutral3 rounded-full px-6 py-4 font-bold'>View a item</button>
            </section>

            <section className='flex justify-center md:flex md:gap-2'>
              <button className='p-2 text-neutral4'>
                <FaArrowLeft />
              </button>
              <button className='p-2 border border-neutral3 rounded-full text-neutral4'>
                <FaArrowRight />
              </button>

            </section>
          </section>
        </div>

      </main>
    </>
  )
}

export default Auction