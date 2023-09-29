'use client'

import { createContext, useContext, useState } from 'react';
import nfts from '../../public/aunctions.json';
import { NftsTypes } from '@/types';

type FiltersContextType = {
  currentCategory: string;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
  filteredItems: NftsTypes[]
  handleCategoryClick: (type: string) => void
};

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState('All items');

  const filteredItems = nfts.data.filter((item) => {
    if (currentCategory === 'All items') {
      return true;
    } else {
      return item.type === currentCategory;
    }
  });

  const handleCategoryClick = (type: string) => {
    setCurrentCategory(type);
  };

  return (
    <FiltersContext.Provider
      value={{
        currentCategory,
        setCurrentCategory,
        filteredItems,
        handleCategoryClick
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
