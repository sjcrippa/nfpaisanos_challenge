import Navbar from '@/components/nav/navbar';
import type { Metadata } from 'next';

import './globals.css'

export const metadata: Metadata = {
  title: 'NFPaisanos Challenge',
  description: 'Front-End Developer application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='max-w-screen-xl container p-8 md:px-40'>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
};
