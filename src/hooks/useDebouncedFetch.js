import { useState, useEffect, useCallback } from "react";

/**
 @description useDebouncedFetch custom  hook takes a fetch function and a delay as parameters. 
 It returns the fetched data, loading state, error state, 
 and a function to update the search term.
 */

const useDebouncedFetch = (fetchFunction, delay) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * @param ()=>
   * @param number
   */
  const debounce = useCallback((func, wait) => {
    let timeout;
    return function (...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  const debouncedFetch = useCallback(
    debounce(async (term) => {
      try {
        setLoading(true);
        const { data } = await fetchFunction(term);
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }, delay),
    [debounce, delay, fetchFunction]
  );

  useEffect(() => {
    if (searchTerm) {
      debouncedFetch(searchTerm);
    } else {
      setData(null);
    }
  }, [debouncedFetch, searchTerm]);

  return { data, loading, error, setSearchTerm };
};

export default useDebouncedFetch;
