import { useState, useEffect, useCallback, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/context";

const useGetData = (endpoint) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  //   const { data, setData } = useContext(AppContext);
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(endpoint);
      setData(response.data.results);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [endpoint, navigator]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading };
};

export default useGetData;
