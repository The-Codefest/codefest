import React, { useState, useEffect } from "react";
import { API } from "services/api";

export default function useStatistics() {
  const [data, setData] = useState([]);
  const [days, setDays] = useState(14);

  const handleDays = async (event) => {
    setDays(event.target.value);
    try {
      const response = await API.post("/dashboard/stats/", {
        time_period: event.target.value,
      });
      setData(response?.data);
    } catch (error) {}
  };

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await API.post("/dashboard/stats/", {
          time_period: days,
        });
        setData(response?.data);
      } catch (error) {}
    };
    fetchStatistics();
  }, []);
  return [data, handleDays];
}
