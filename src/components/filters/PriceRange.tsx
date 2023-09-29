const PriceRange = () => {
  return (
    <>
      <div className="mt-0 w-[312px] lg:w-44 lg:mt-1">
        <p className="text-neutral5 text-xs">PRICE RANGE</p>
        <input className="w-full lg:w-44" type="range" name="price" min={0} max={10} />
        <div className="flex justify-between text-sm text-neutral8">
          <span>
            0.000 ETH
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
