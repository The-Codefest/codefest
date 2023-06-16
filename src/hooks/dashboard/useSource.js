import { useEffect, useState } from "react";
import { API } from "services/api";

const useSearchData = () => {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const response = await API.post("/dashboard/");
        const searchResults = response?.data;
        const results = searchResults?.data?.popular_searches;
        const keys = Object.keys(results).sort((a, b) => b - a);
        const sortedResults = keys.map((key, index) => {
          const { headline, link, size, source } = results[key];
          return {
            id: index + 1,
            key,
            link,
            source,
            headline,
            size,
          };
        });
        setSearch(sortedResults);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSearchData();
  }, []);

  return search || [];
};

export default useSearchData;
