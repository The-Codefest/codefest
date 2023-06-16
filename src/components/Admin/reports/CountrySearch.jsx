import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, LinearProgress } from "@mui/material";
import useCountrySearch from "hooks/dashboard/useCountryData";

const CountrySearch = () => {
  const countrySearch = useCountrySearch();
  const columns = [
    {
      field: "label",
      headerName: "Country",
      width: 200,
      flex: 1,
    },
    {
      field: "search",
      headerName: "% of Search",
      width: 200,
      flex: 1,
      renderCell: (params) => (
        <LinearProgress
          variant="determinate"
          value={params.value}
        ></LinearProgress>
      ),
    },
    {
      field: "value",
      headerName: "",
      width: 200,
      flex: 1,
    },
  ];

  return (
    <Box>
      <Box height="44.5vh">
        <DataGrid rows={countrySearch} columns={columns} />
      </Box>
    </Box>
  );
};

export default CountrySearch;
