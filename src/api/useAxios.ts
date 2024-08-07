import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { baseApiUrl } from "../config/constants";

axios.defaults.baseURL = baseApiUrl;

interface UseAxiosProps {
  url: string;
}

const useAxios = ({ url }: UseAxiosProps) => {
  const [response, setResponse] = useState<AxiosResponse | any>();
  const [error, setError] = useState<AxiosError | string>("");
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setResponse(res.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { response, error, loading };
};

export default useAxios;
