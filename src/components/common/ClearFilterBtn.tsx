'use client'

import { useFilter } from "@/context/FiltersContext";

const ClearFiltersButton = () => {
  const { clearFilters, appliedFilters } = useFilter();

  if (!appliedFilters) {
    return null;
  }

  return (
    <>
      <div className="w-16">
        <button
          className="bg-light text-dark"
          onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </>
  );
};

export default ClearFiltersButton;
