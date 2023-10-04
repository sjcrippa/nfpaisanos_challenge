'use client'

import nfts from '../../public/aunctions.json';
import { createContext, useContext, useState } from 'react';
import { NftsTypes } from '@/types';

type FiltersContextType = {
  currentCategory: string;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
  filteredItems: NftsTypes[];
  handleCategoryClick: (type: string) => void;
  priceRange: number[];
  filterByPrice: (minPrice: number, maxPrice: number) => void;
  selectedPrice: number[]
  handlePriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePriceFilter: () => void;
  appliedFilters: boolean;
  clearFilters: () => void;
  selectedColor: string;
  handleColorChange: (color: string) => void;
};

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState('All items');
  const [priceRange, setPriceRange] = useState([0, 10]);
  const [selectedPrice, setSelectedPrice] = useState<number[]>(priceRange);
  const [hasInteractedWithPriceRange, setHasInteractedWithPriceRange] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState(false);
  const [selectedColor, setSelectedColor] = useState('All colors');

  // Logica para filtrar items segun su categoria:
  const filteredItems = nfts.data.filter((item) => {
    const instantPrice = parseFloat(item.instantPrice);

    const categoryMatch = currentCategory === 'All items' || item.type === currentCategory;
    const priceRangeMatch = instantPrice >= priceRange[0] && instantPrice <= priceRange[1];
    const colorMatch = selectedColor === 'All colors' || item.attributes.color === selectedColor;

    // Mostrar items que coincidan con la categoría o el rango de precio
    if ((categoryMatch && priceRangeMatch && colorMatch) || (!hasInteractedWithPriceRange && categoryMatch && colorMatch)) {
      return true;
    }

    return false;
  });

  const handleCategoryClick = (type: string) => {
    setCurrentCategory(type);
  };

  // New function to filter items by color
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setAppliedFilters(true);
  };

  // Logica para filtrar items segun su precio:
  const filterByPrice = (minPrice: number, maxPrice: number) => {
    setPriceRange([minPrice, maxPrice]);
    setHasInteractedWithPriceRange(true);
    setAppliedFilters(true);
  };

  // Manejador para el cambio en el input de rango:
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseFloat(event.target.value);
    setSelectedPrice([newPrice]);
  };

  // Logica para aplicar el filtrado cuando el usuario suelta el control del input de rango:
  const handlePriceFilter = () => {
    filterByPrice(selectedPrice[0], selectedPrice[0] + 1);
  };

  // Logica para limpiar los filtros:
  const clearFilters = () => {
    setCurrentCategory('All items');
    setSelectedColor('All colors')
    setPriceRange([0]);
    setHasInteractedWithPriceRange(false);
    setAppliedFilters(false); // Se borran los filtros
  };

  return (
    <FiltersContext.Provider
      value={{
        currentCategory,
        setCurrentCategory,
        filteredItems,
        handleCategoryClick,
        priceRange,
        filterByPrice,
        selectedPrice,
        handlePriceChange,
        handlePriceFilter,
        appliedFilters,
        clearFilters,
        selectedColor,
        handleColorChange,
      }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useCategory debe ser utilizado dentro de un CategoryProvider');
  }
  return context;
};