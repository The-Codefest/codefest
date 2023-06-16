import { useState, useEffect } from "react";
import axios from "axios";
import { API } from "services/api";

export const useMap = () => {
  const [locationData, setLocationData] = useState([]);
  const getLatLng = async (location) => {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        location
      )}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
    );
    const result = response.data.results[0];
    if (result && result.geometry) {
      return result.geometry.location;
    } else {
      throw new Error("Unable to geocode location");
    }
  };

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await API.post("/dashboard/");
        const locations = response?.data;
        const countryGraph = Object.entries(locations?.data?.country_graph);
        const countryData = await Promise.all(
          countryGraph.map(async ([name, count]) => {
            const latLng = await getLatLng(name);
            return { name, count, lat: latLng.lat, lng: latLng.lng };
          })
        );
        setLocationData(countryData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLocationData();
  }, []);

  return locationData;
};
