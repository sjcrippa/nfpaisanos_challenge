import { BiSearchAlt2 } from 'react-icons/bi';

function Search() {
  return (
    <>
      <section className='mb-8'>
        <form action="" className='flex justify-between'>
          <input className='text-sm md:text-2xl font-medium w-full bg-dark text-neutral8 border border-neutral3 rounded-xl pl-4 py-2 md:border-0 md:pl-0 md:decoration-0' type="text" name="search" placeholder='Type your keywords...' />
          <button className='p-3 rounded-full absolute translate-x-[300px] md:bg-primary1 md:translate-x-0 md:relative md:p-4' type='submit'>
            <span className='text-neutral8 text-2xl md:text-base'>
              <BiSearchAlt2 />
            </span>
          </button>
        </form>
      </section>
    </>
  )
}

export default Search;
