'use client'
import { useState } from 'react';
import { HiOutlineMenuAlt4, HiX } from 'react-icons/hi'

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(false)

  return (
    <>
      <header className='max-w-screen-xl'>
        <nav className="flex h-20 justify-between">

          <div className="flex items-center gap-8">
            <div className="flex gap-2 items-center">
              <Image src='/frame.svg' alt="logo" width={32} height={32} />
              <h1 className="text-neutral7 font-extrabold text-2xl">
                <Link href='/'>NFPaisanos</Link>
              </h1>
            </div>

            <div className="hidden lg:flex lg:bg-neutral3 w-0.5 h-5 rounded-md"></div>

            <ul className="hidden lg:flex lg:flex-1 lg:gap-8 lg:items-center lg:align-middle">
              <li className="text-neutral4 text-sm font-sans font-bold"><Link href='/discover'>Discover</Link></li>
              <li className="text-neutral4 text-sm font-sans font-bold"><Link href='/about'>What We Do</Link></li>

            </ul>
          </div>

          <div className="hidden lg:flex lg:items-center ">
            <button className="px-4 py-3 border-2 border-neutral4 rounded-full hover:bg-neutral8 hover:text-dark transition-all duration-200 text-neutral8 text-sm font-sans font-bold hover:border-neutral8">
              Connect Wallet
            </button>
          </div>

          {/* SIDEBAR MENU: */}
          
          <button
            className='flex lg:hidden items-center'
            onClick={() => setSideMenu(!sideMenu)}>
            <span className='text-neutral4 w-5 h-4'>
              {!sideMenu ? <HiOutlineMenuAlt4 /> : <HiX />}
            </span>
          </button>

          <nav className=
            {`flex w-1/3 mt-16 lg:items-center sm:px-4 lg:gap-3 text-md z-10 h-screen bg-neutral3 bg-opacity-70 fixed rounded-md transition-color duration-500 ease-in lg:hidden ${!sideMenu ? '-right-[100%]' : 'fixed right-0 shadow-lg shadow-dark'}`}>
            <ul className='flex flex-col mt-5 gap-5 mx-auto text-neutral8 font-bold'>
              <Link className='flex gap-3 text-sm font-bold border-b border-b-neutral8' href={'/discover'}>Discover</Link>
              <Link className='flex gap-3 text-sm font-bold border-b border-b-neutral8' href={"/about"} >About</Link>
            </ul>
          </nav>
        </nav>
      </header>
    </>
  )
}

export default Navbar;