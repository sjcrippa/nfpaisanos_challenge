import Auction from '@/components/auction/auction';
import Search from '@/components/search/search';
import OrderBy from '@/components/filters/orderBy';
import PriceRange from '@/components/filters/priceRange';
import Content from '@/components/content/content';
import Footer from '@/components/footer/footer';

export default function Home() {
  return (
    <>
      <Auction />
      <Search />
      <OrderBy />
      <PriceRange />
      <Content />
      <Footer />
    </>
  );
};

