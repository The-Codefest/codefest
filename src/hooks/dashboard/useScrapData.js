import { API } from "services/api";
import { useState, useEffect } from "react";

const useScrapData = () => {
  const [scarpSite, setScrapSite] = useState([]);

  useEffect(() => {
    const search = async () => {
      try {
        const response = await API.post("/dashboard/report/result_sources/");
        const result = response?.data;
        const scrapSources = result?.data?.result_sources;
        const scarpImage = [];
        for (let search in scrapSources) {
          scarpImage.push({
            id: search,
            label: search,
            value: scrapSources?.[search],
          });
        }
        setScrapSite(scarpImage);
      } catch (error) {
        console.error(error);
      }
    };
    search();
  }, []);

  return scarpSite;
};

export default useScrapData;
