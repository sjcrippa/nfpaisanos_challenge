'use client'

import { useFilter } from "@/context/FiltersContext";
import { HiX } from 'react-icons/hi'


const ClearFiltersButton = () => {
  const { clearFilters, appliedFilters } = useFilter();

  if (!appliedFilters) {
    return null;
  }

  return (
    <>
      <div className="w-full mt-6">
        <button
          className="flex items-center gap-2"
          onClick={clearFilters}>
            <HiX className='rounded-full bg-neutral7 text-dark'/>
          <span className="text-neutral7">
            Reset Filter
          </span>
        </button>
      </div>
    </>
  );
};

export default ClearFiltersButton;
