import { API } from "services/api";
import { useState, useEffect } from "react";

const useLineData = () => {
  const [lineData, setLineData] = useState([]);
  useEffect(() => {
    const lineGraph = async () => {
      try {
        const graphData = await API.post("/dashboard/");
        const response = graphData?.data?.data;
        const Id = Object.keys(response);

        const registered_visitors =
          response?.visitors_graph?.registed_visitors?.map((visitors) => ({
            ...visitors,
            id: Id[0],
          }));
        const unregistered_visitors =
          response?.visitors_graph?.unregisted_visitors?.map((visitors) => ({
            ...visitors,
            id: Id[1],
          }));
        const _registered_visitors = registered_visitors.map((value) => ({
          x: value.date_search,
          y: value.count,
          id: value.id,
        }));
        const _unregistered_visitors = unregistered_visitors.map((value) => ({
          x: value.date_search,
          y: value.count,
          id: value.id,
        }));

        setLineData([
          { id: "registered_visitors", data: _registered_visitors },
          { id: "unregistered_visitors", data: _unregistered_visitors },
        ]);
      } catch (error) {
        console.error(error);
      }
    };
    lineGraph();
  }, []);
  return { lineData };
};

export default useLineData;
