import React from "react";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import TabularGrid from "components/tables/TabularGrid";
import ReportTabSectionHeader from "../ReportTabSectionHeader";
import { useSearchReportQuery } from "store/services/reportApi";
import { capitalizeFirstWord } from "utils/format";
import { filterByDateAndTime } from "utils/dashboard/filters";

const SearchReportTab = () => {
  const searchReportColumns = [
    {
      accessorFn: (row) => (row?.date_search ? new Date(row.date_search) : ""),
      header: "Search Date",
      accessorKey: "date_search",
      Cell: ({ cell }) => new Date(cell.getValue()).toDateString(),
      filterFn: "lessThanOrEqualTo",
      sortingFn: "datetime",
      Filter: ({ column }) => filterByDateAndTime(column),
    },
    {
      header: "Matching Results",
      accessorKey: "number_of_matching_results",
    },
    {
      header: "Country",
      accessorKey: "country",
      Cell: ({ cell }) => `${capitalizeFirstWord(cell.getValue())}`,
    },
    {
      header: "IP Address of User",
      accessorKey: "ip_address",
    },
    {
      header: "Top Source",
      accessorKey: "most_popular_source_in_results",
      Cell: ({ cell }) => `${cell.getValue() ? cell.getValue() : "-"}`,
    },
    {
      header: "Device",
      accessorKey: "device",
      Cell: ({ cell }) => `${capitalizeFirstWord(cell.getValue())}`,
    },
    {
      header: "Browser",
      accessorKey: "device_family",
    },
    {
      header: "Browser Version",
      accessorKey: "browser_version",
    },
    {
      header: "Search Made By",
      accessorKey: "full_name_of_user",
      Cell: ({ cell }) =>
        `${cell.getValue() ? cell.getValue() : "Anonymous User"}`,
    },
  ];
  const { data, isLoading, isFetching, error, isSuccess, isError } =
    useSearchReportQuery();

  return (
    <Box px={1}>
      <ReportTabSectionHeader
        sectionTitle="Search report"
        sectionSubTitle="View extensive details about image searches performed on the platform"
      />
      <Box mt={3}>
        <Divider />
      </Box>
      <Box mt={5}>
        <TabularGrid
          columns={searchReportColumns}
          data={isSuccess ? data : []}
          isLoading={isLoading}
          isError={isError}
          isFetching={isFetching}
          error={error}
          sectionName="Search Report"
        />
      </Box>
    </Box>
  );
};

export default SearchReportTab;
