import { useState, useEffect } from "react";
import { API } from "services/api";

const useDevice = () => {
  const [arcData, setArcData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.post("/dashboard/");
        const data = response?.data?.data?.device_graph;
        const pieDataArray = [];
        for (let device in data) {
          pieDataArray.push({
            id: device,
            label: device,
            value: data?.[device],
          });
        }
        setArcData(() => pieDataArray);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return arcData;
};

export default useDevice;
