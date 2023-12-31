import Navbar from '@/components/navbar/Navbar';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google'

import './globals.css'
import { FiltersProvider } from '@/context/FiltersContext';

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
        <FiltersProvider>
          <main className='max-w-screen-xl mx-auto p-8 md:px-40'>
            <Navbar />
            {children}
          </main>
        </FiltersProvider>
      </body>
    </html>
  )
};
