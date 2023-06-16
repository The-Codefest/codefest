import { API } from "services/api";
import { useState, useEffect } from "react";

const useReportUsers = () => {
  const [lineData, setLineData] = useState([]);
  useEffect(() => {
    const userGraph = async () => {
      try {
        const graphData = await API.post("/dashboard/report/");
        const response = graphData?.data;
        const data = response?.data?.visitors_graph;
        const Id = Object.keys(data);

        const registered_visitors = data?.registed_visitors?.map(
          (visitors) => ({
            ...visitors,
            id: Id[0],
          })
        );
        const unregistered_visitors = data?.registed_visitors?.map(
          (visitors) => ({
            ...visitors,
            id: Id[1],
          })
        );
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
    userGraph();
  }, []);
  return { lineData };
};

export default useReportUsers;
