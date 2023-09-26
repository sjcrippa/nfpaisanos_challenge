import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col">
        <div className="flex flex-1 absolute left-0 right-0">
          <div className="h-[1px] w-screen bg-neutral3 "></div>
        </div>

        <section className="w-full mt-20 mx-auto">
          <div className="flex flex-col gap-y-5 items-center justify-center">
            <div className="flex gap-2">
              <Image src='/frame.png' alt="logo" width={32} height={32} />
              <h2 className="text-neutral7 font-extrabold text-2xl">
                <Link href='/'>NFPaisanos</Link>
              </h2>
            </div>
            <h3 className="text-neutral7">The New Creative Economy.</h3>
          </div>

          <div className="w-full h-[1px] bg-neutral3 mt-12"></div>

          <div className="mt-8 mb-8 text-center">
            <h4 className="text-xs text-neutral4">Created with ❤ by <b className="font-semibold">S.J.Crippa.</b></h4>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer;
