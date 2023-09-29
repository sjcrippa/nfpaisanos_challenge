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
};

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState('All items');
  const [priceRange, setPriceRange] = useState([0, 10]);
  const [selectedPrice, setSelectedPrice] = useState<number[]>(priceRange);
  const [hasInteractedWithPriceRange, setHasInteractedWithPriceRange] = useState(false);

  // Logica para filtrar items segun su categoria:
  const filteredItems = nfts.data.filter((item) => {
    const instantPrice = parseFloat(item.instantPrice)
    
    if (currentCategory === 'All items' && instantPrice >= priceRange[0] && instantPrice <= priceRange[1]) {
      return true;
    } else if (item.type === currentCategory && instantPrice >= priceRange[0] && instantPrice <= priceRange[1]) {
      return;
    }

    if (!hasInteractedWithPriceRange) {
      // Si no ha interactuado con el rango, mostrar todos los elementos
      return true;
    }
  });
  const handleCategoryClick = (type: string) => {
    setCurrentCategory(type);
  };

  // Logica para filtrar items segun su precio:
  const filterByPrice = (minPrice: number, maxPrice: number) => {
    setPriceRange([minPrice, maxPrice]);
    setHasInteractedWithPriceRange(true)
  };

  // Manejador para el cambio en el input de rango
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseFloat(event.target.value);
    setSelectedPrice([newPrice]);
  };

  // Manejador para aplicar el filtrado cuando el usuario suelta el control del input de rango
  const handlePriceFilter = () => {
    filterByPrice(selectedPrice[0], selectedPrice[0] + 1);
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
