import { useState, useEffect } from "react";
import { getPublicGists } from "../services/gistService";

function useGetPublicGists() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const onGetPublicGists = async () => {
      try {
        const { data } = await getPublicGists();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    onGetPublicGists();
  }, []);

  return { data, loading, error };
}

export default useGetPublicGists;
