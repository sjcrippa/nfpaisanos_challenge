// Este hook va a consumir los datos de cualquier api o .json que se le pase como valor al parametro "url".

import { NftsTypes } from '@/types';
import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<NftsTypes[] | null>(null);
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
        setData(jsonData.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;