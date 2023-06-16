import React from "react";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import TabularGrid from "components/tables/TabularGrid";
import ReportTabSectionHeader from "../ReportTabSectionHeader";
import { useUserReportQuery } from "store/services/reportApi";
import { StatusText } from "components/global/StatusText";
import { filterByDateAndTime } from "utils/dashboard/filters";

const UserReportTab = () => {
  const rolesList = ["User", "Admin", "SuperAdmin"];
  const userReportColumns = [
    {
      accessorKey: "id",
      header: "ID",
      size: 100,
    },
    {
      header: "First Name",
      accessorKey: "firstName",
    },
    {
      header: "Last Name",
      accessorKey: "lastName",
    },
    {
      header: "Email",
      accessorKey: "emailAddress",
    },
    {
      header: "Country",
      accessorKey: "country",
    },
    {
      header: "Blocked",
      accessorKey: "is_blocked",
      Cell: ({ cell }) =>
        cell.getValue() === true ? (
          <StatusText status={cell.getValue()} text="Active" />
        ) : (
          <StatusText status={cell.getValue()} text="Inactive" />
        ),
      filterVariant: "checkbox",
    },
    {
      header: "Verified",
      accessorKey: "verified",
      Cell: ({ cell }) =>
        cell.getValue() === true ? (
          <StatusText status={cell.getValue()} text="Verified" />
        ) : (
          <StatusText status={cell.getValue()} text="Not verified" />
        ),

      filterVariant: "checkbox",
    },
    {
      header: "Role",
      accessorKey: "role",
      filterVariant: "select",
      filterSelectOptions: rolesList,
    },
    {
      accessorFn: (row) =>
        row?.date_registered ? new Date(row.date_registered) : "",
      header: "Date Registered",
      accessorKey: "date_registered",
      Cell: ({ cell }) =>
        cell.getValue() ? new Date(cell.getValue()).toGMTString() : "",
      filterFn: "lessThanOrEqualTo",
      sortingFn: "datetime",
      Filter: ({ column }) => filterByDateAndTime(column),
    },
    {
      accessorFn: (row) => (row?.last_login ? new Date(row.last_login) : ""),
      header: "Last Login",
      accessorKey: "last_login",
      Cell: ({ cell }) =>
        cell.getValue() ? new Date(cell.getValue()).toGMTString() : "",
      filterFn: "lessThanOrEqualTo",
      sortingFn: "datetime",
      Filter: ({ column }) => filterByDateAndTime(column),
    },
    {
      header: "Searches Made",
      accessorKey: "number_of_searches_made",
    },
  ];

  const { data, isLoading, isFetching, isSuccess, isError, error } =
    useUserReportQuery();

  return (
    <Box px={1}>
      <ReportTabSectionHeader
        sectionTitle="Users report"
        sectionSubTitle="View extensive details about users of this platform"
      />
      <Box mt={3}>
        <Divider />
      </Box>
      <Box mt={5}>
        <TabularGrid
          columns={userReportColumns}
          data={isSuccess ? data : []}
          isLoading={isLoading}
          isError={isError}
          error={error}
          isFetching={isFetching}
          sectionName="Users Report"
        />
      </Box>
    </Box>
  );
};

export default UserReportTab;
