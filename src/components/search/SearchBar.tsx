import { BiSearchAlt2 } from 'react-icons/bi';

const SearchBar = () => {
  return (
    <>
      <section className='mb-8'>
        <form action="" className='flex justify-between'>
          <div className='flex flex-row border border-neutral3 w-full rounded-xl justify-between md:border-0'>
            <input className='text-sm md:text-2xl font-medium bg-dark rounded-xl text-neutral8 pl-4 py-2 md:border-0 md:pl-1' type="text" name="search" placeholder='Type your keywords...' />
            <button className='p-3 rounded-full md:bg-primary1 md:translate-x-0 md:relative md:p-4' type='submit'>
              <span className='text-neutral4 md:text-neutral8 text-xl'>
                <BiSearchAlt2 />
              </span>
            </button>
          </div>
        </form>
      </section >
    </>
  )
}

export default SearchBar;
