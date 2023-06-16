import { useEffect, useState } from "react";
import { API } from "services/api";
import { now, SevenDays } from "utils/DateFormat";
import { showAlert } from "store/features/alertSlice";
import { useDispatch } from "react-redux";

export default function useAnalyTics() {
  const [realTime, setRealTime] = useState([]);
  const [tableData, setTableData] = useState([]);

  const [loadingRealTime, setLoadingRealTime] = useState(false);
  const [loadingTable, setLoadingTable] = useState(false);
  const [minute, setMinute] = useState(29);

  const [customTags, setCustomTags] = useState([]);
  const [loadingtags, setLoadingtags] = useState(false);
  const [dateRange, setDateRange] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();

  const handleDateRangeChange = async (value) => {
    setIsLoading(true);
    const formattedDates = value.map((date) => {
      const d = new Date(date);
      const year = d.getFullYear();
      const month = `0${d.getMonth() + 1}`.slice(-2);
      const day = `0${d.getDate()}`.slice(-2);
      return `${year}-${month}-${day}`;
    });

    setDateRange(value);

    if (formattedDates[0] === formattedDates[1]) {
      dispatch(
        showAlert(["info", "Start date should not be the same as end date"])
      );
      setIsLoading(false);
    } else {
      try {
        const start = formattedDates[0];
        const end = formattedDates[1];

        setIsLoading(true);
        const [tableResponse, customResponse] = await Promise.all([
          API.get(`/dashboard/event_metrics/?sd=${start}&ed=${end}`),
          API.post("/dashboard/gtm_metric/", {
            start_date: start,
            end_date: end,
          }),
        ]);

        setTableData(tableResponse?.data);
        setCustomTags(customResponse?.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    }
  };

  const handleChange = async (event) => {
    setIsLoading(true);
    setMinute(event.target.value);

    const fetchRealTime = async () => {
      setLoadingRealTime(true);

      try {
        const response = await API.post("/dashboard/realtime_metrics/", {
          time_range: event.target.value,
        });

        setRealTime(response?.data);
        setLoadingRealTime(false);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setLoadingRealTime(false);
        setIsLoading(false);
      }
    };
    fetchRealTime();
  };

  useEffect(() => {
    const CustomTag = async () => {
      setLoadingtags(true);

      try {
        const response = await API.post("/dashboard/gtm_metric/", {
          start_date: SevenDays,
          end_date: now,
        });

        setCustomTags(response?.data);
        setLoadingtags(false);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setLoadingtags(false);
        setIsLoading(false);
      }
    };
    CustomTag();
  }, []);

  useEffect(() => {
    const getTableData = async () => {
      setLoadingTable(true);

      try {
        const response = await API.get(
          `/dashboard/event_metrics/?sd=${SevenDays}&ed=${now}`
        );
        setTableData(response?.data);
        setLoadingTable(false);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setLoadingTable(false);
        setIsLoading(false);
      }
    };

    getTableData();
  }, []);

  useEffect(() => {
    const fetchRealTime = async () => {
      setLoadingRealTime(true);
      try {
        const response = await API.post("/dashboard/realtime_metrics/", {
          time_range: minute,
        });
        setRealTime(response?.data);
        setLoadingRealTime(false);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setLoadingRealTime(false);
        setIsLoading(false);
      }
    };
    fetchRealTime();
  }, [minute]);

  return [
    realTime,
    tableData,
    minute,
    handleChange,
    loadingRealTime,
    loadingTable,
    handleDateRangeChange,
    dateRange,
    customTags,
    loadingtags,
    isLoading,
    isError,
  ];
}
