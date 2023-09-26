import Aunction from '@/components/aunction/Aunction';
import Search from '@/components/search/SearchBar';
import TimeRange from '@/components/filters/TimeRange';
import Footer from '@/components/footer/Footer';
import MainContent from '@/components/content/MainContent';

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
