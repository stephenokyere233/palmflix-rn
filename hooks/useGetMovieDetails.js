import { API_KEY, api_url } from "../constants/keys";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useGetMoviesData = (id, mediaType = "movie") => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!id) return;

    setLoading(true);
    const detailsUrl = `${api_url}${mediaType}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,credits,recommendations,similar`;

    try {
      const response = await axios.get(detailsUrl);
      setMovie(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [id, mediaType]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { movie, loading, error };
};

export default useGetMoviesData;
