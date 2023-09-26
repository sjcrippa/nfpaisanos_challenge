import Aunction from '@/components/aunction/Aunction';
import Search from '@/components/search/SearchBar';
import TimeRange from '@/components/filters/TimeRange';
import MainContent from '@/components/content/MainContent';
import Footer from '@/components/footer/Footer';

const Home = () => {
  return (
    <>
      <Aunction />
      <Search />
      <TimeRange />
      <MainContent />
      <Footer />
    </>
  );
};

export default Home
