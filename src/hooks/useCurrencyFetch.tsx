// Este hook consume los datos en el archivo eth-usd.json para que sean renderizados en el AunctionSlider.

import { useEffect, useState } from 'react';

interface CurrencyData {
  eth: string;
  usd: string;
}

const useCurrencyFetch = (url: string) => {
  const [currencyData, setCurrencyData] = useState<CurrencyData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error: falla en la respueta del sistema!');
        }
        const jsonData = await response.json();
        setCurrencyData(jsonData);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { currencyData, loading, error };
};

export default useCurrencyFetch;
