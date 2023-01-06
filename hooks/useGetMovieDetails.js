import React from "react";
import { API_KEY, api_url } from "../constants/keys";

import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const useGetMoviesData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [movieID,setMovieID]=useState("")
  const movieDetails = `${api_url}/movie/${movieID}?api_key=${API_KEY}&language=en-US`;
  const tvDetails = `${api_url}/tv/${movieID}?api_key=${API_KEY}&language=en-US`;

  const fetchData = useCallback(async () => {
    try {
      const endpoint1 = await axios.get(movieDetails);
      const endpoint2 = await axios.get(tvDetails);
      const results1 = endpoint1.data.results;
      const results2 = endpoint2.data.results;
      const filteredResults = [results1, results2]
        .flat()
        .filter((val) => val !== undefined)
        .map((result) => {
          return Object.fromEntries(
            Object.entries(result).filter(([key, value]) => value !== undefined)
          );
        });
      setData(filteredResults);
    } catch (error) {
      setError(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error };
};

export default useGetMoviesData;
