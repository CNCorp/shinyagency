import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context";

export function useFetch(url) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    setLoading(true);
    fetchData();
  }, [url]);

  return { isLoading, data, error };
}

export function useTheme() {
  const { theme } = useContext(ThemeContext);
  return theme;
}
