import Nav from '@/components/nav/nav';
import type { Metadata } from 'next';

import './globals.css'
import Auction from '@/components/auction/auction';
import Search from '@/components/search/search';
import OrderBy from '@/components/filters/orderBy';
import PriceRange from '@/components/filters/priceRange';
import Content from '@/components/content/content';
import Footer from '@/components/footer/footer';

export const metadata: Metadata = {
  title: 'NFPaisanos Challenge',
  description: 'Front-End Developer application',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className='max-w-screen-xl container p-8 md:px-40'>
        <main>
          {children}
          <Nav />
          <Auction />
          <Search />
          <OrderBy />
          <PriceRange />
          <Content />
          <Footer />
        </main>
      </body>
    </html>
  )
};

export default RootLayout;

