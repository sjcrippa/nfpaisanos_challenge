import WhatWeDo from "@/app/about/page"
import Discover from "@/app/discover/page"
import Image from "next/image";

function Nav (){
  return (
    <>
      <nav className="max-w-screen-xl flex h-20 justify-between">

        <div className=" flex items-center gap-8">
          <div className="flex gap-2 items-center">
            <Image src='/frame.png' alt="logo" width={32} height={32} />
            <h1 className="text-neutral7 font-bold text-2xl">NFPaisanos</h1>
          </div>

          <div className="bg-neutral3 w-0.5 h-5 rounded-md"></div>

          <ul className="flex flex-1 gap-8 items-center align-middle">
            <li><Discover /></li>
            <li><WhatWeDo /></li>
          </ul>
        </div>

        <div className="flex items-center ">
          <button className="px-4 py-3 border-2 border-neutral4 rounded-full hover:bg-neutral8 hover:text-dark transition-all duration-200 text-neutral8 text-sm font-sans font-bold hover:border-neutral8">
            Connect Wallet
          </button>
        </div>
      </nav>
    </>
  )
}

export default Nav;