import Navbar from '@/components/nav/navbar';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google'

import './globals.css'

export const metadata: Metadata = {
  title: 'NFPaisanos Challenge',
  description: 'Front-End Developer application',
  keywords: "paisanos, nft's, front-end, ecommerce"
};

const poppins = Poppins({
  style: ['normal'],
  subsets: ['latin'],
  weight: '200'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className='max-w-screen-xl mx-auto container p-8 md:px-40'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
};
