'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export const useGetArticle = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [articles, setArticles] = useState([]);

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const base = `https://cdn.builder.io/api/v3/content/articles?apiKey=${apiKey}`;

  useEffect(() => {
    const getArticle = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(base);

        if (response.status === 200) {
          setArticles(response.data.results[0].data.articles);
        }
      } catch (error) {
        setIsLoading(false);
        setError(error.response.data.error);
      }
    };
    getArticle();
  }, []);

  return { isLoading, error, articles };
};

export default useGetArticle;
