import { API } from "services/api";
import { useState, useEffect } from "react";

const useCountrySearch = () => {
  const [countrySearch, setCountrySearch] = useState([]);

  useEffect(() => {
    const search = async () => {
      try {
        const response = await API.post("/dashboard/report/");
        const result = response?.data;
        const countrySearchData = result?.data?.country_grpah;
        const countryArray = [];
        for (let search in countrySearchData) {
          countryArray.push({
            id: search,
            label: search,
            value: countrySearchData?.[search] + "%",
            search: countrySearchData?.[search],
          });
        }
        setCountrySearch(countryArray);
      } catch (error) {
        console.error(error);
      }
    };
    search();
  }, []);

  return countrySearch;
};

export default useCountrySearch;
