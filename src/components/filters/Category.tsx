import { useFilter } from '@/context/FiltersContext';

const Category = () => {
  const { currentCategory, handleCategoryClick } = useFilter();

  return (
    <section>
      <div className='mt-8 mb-8 flex md:flex md:justify-end md:mt-0 md:mb-0 md:w-full gap-3 font-bold text-sm'>
        <button
          className={`w-32 px-3 py-[6px] rounded-full text-neutral4 focus:bg-neutral8 focus-within:text-neutral2 active:scale-110 active:transition-all ${currentCategory === 'All items' ? 'bg-neutral8 text-neutral2' : ''
            }`}
          onClick={() => handleCategoryClick('All items')}
        >
          <span>All items</span>
        </button>
        <button
          className={`px-3 py-[6px] rounded-full text-neutral4 focus:bg-neutral8 focus-within:text-neutral2 active:scale-110 active:transition-all ${currentCategory === 'Art' ? 'bg-neutral8 text-neutral2' : ''
            }`}
          onClick={() => handleCategoryClick('Art')}
        >
          <span>Art</span>
        </button>
        <button
          className={`px-3 py-[6px] rounded-full text-neutral4 focus:bg-neutral8 focus-within:text-neutral2 active:scale-110 active:transition-all ${currentCategory === 'Photography' ? 'bg-neutral8 text-neutral2' : ''
            }`}
          onClick={() => handleCategoryClick('Photography')}
        >
          <span>Photography</span>
        </button>
      </div>
    </section>
  );
};

export default Category;
