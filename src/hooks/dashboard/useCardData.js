import React, { useState, useEffect } from "react";
import { API } from "services/api";

const useCardData = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const cardData = async () => {
      const response = await API.post("/dashboard/");
      const data = response?.data?.data;
      const {
        registered_users: registeredUsers,
        unregistered_users: unregisteredUsers,
        total_search_made: totalSearchMade,
        no_results: searchWithNoResults,
      } = data;
      const cardDetails = {
        registeredUsers,
        unregisteredUsers,
        totalSearchMade,
        searchWithNoResults,
      };
      setCardData(cardDetails);
    };
    cardData();
  }, []);
  return cardData;
};

export default useCardData;
