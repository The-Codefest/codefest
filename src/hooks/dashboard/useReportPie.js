import { useState, useEffect } from "react";
import { API } from "services/api";

const useReportPie = () => {
  const [deviceData, setDeviceData] = useState([]);

  useEffect(() => {
    const fetchDeviceData = async () => {
      try {
        const response = await API.post("/dashboard/report/");
        const deviceData = response?.data?.data?.device_graph;
        const deviceArray = [];
        for (let device in deviceData) {
          deviceArray.push({
            id: device,
            label: device,
            value: deviceData?.[device],
          });
        }
        setDeviceData(() => deviceArray);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDeviceData();
  }, []);

  return deviceData;
};

export default useReportPie;
