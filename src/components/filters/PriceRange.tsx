import { useFilter } from "@/context/FiltersContext";
import { ChangeEvent, useEffect, useState } from "react";

const PriceRange = () => {
  const { selectedPrice, handlePriceChange, handlePriceFilter } = useFilter()

  return (
    <>
      <div className="mt-0 w-[312px] lg:w-44 lg:mt-1">
        <p className="text-neutral5 text-xs">PRICE RANGE</p>
        <input
          className="w-full lg:w-44 custom-range"
          type="range"
          name="price"
          min={0}
          max={10}
          value={selectedPrice[0]}
          onChange={handlePriceChange}
          onMouseUp={handlePriceFilter}
          onTouchStart={(event) => {
            const fakeChangeEvent = {
              target: event.target as HTMLInputElement,
            } as ChangeEvent<HTMLInputElement>;

            handlePriceChange(fakeChangeEvent);
          }}
          onTouchEnd={() => {
            handlePriceFilter();
          }}
        />
        <div className="flex justify-between text-sm text-neutral8">
          <span>
            {selectedPrice} ETH
          </span>
          <span>
            10 ETH
          </span>
        </div>
      </div>
    </>
  )
}

export default PriceRange;
