import Auction from '@/components/auction/auction';
import Search from '@/components/search/search';
import OrderBy from '@/components/filters/orderBy';
import Content from '@/components/content/content';
import Footer from '@/components/footer/footer';

export default function Home() {
  return (
    <>
      <Auction />
      <Search />
      <OrderBy />
      <Content />
      <Footer />
    </>
  );
};

