import { useEffect, useState } from "react";

const useFetch = (category: string) => {
  const URL = `${process.env.EXPO_PUBLIC_API_URL}top-headlines?country=us&category=${category}&apiKey=${process.env.EXPO_PUBLIC_API_KEY}`;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(URL);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setLoading(false);
      setError(
        err instanceof Error ? err.message : "An unknown error occurred",
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, fetchData };
};

export default useFetch;
