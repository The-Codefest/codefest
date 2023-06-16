import React from "react";
import MaterialReactTable from "material-react-table";
import { Box, Divider, MenuItem, Icon, Menu } from "@mui/material";
import ReportTabSectionHeader from "components/dashboard/ReportTabSectionHeader";
import {
  useGetUsersListQuery,
  useUpdateUserStatusMutation,
} from "store/services/usersManagementApi";
import { StatusText } from "components/global/StatusText";
import { filterByDateAndTime } from "utils/dashboard/filters";
import { IoEllipsisVertical } from "react-icons/io5";
import { ImLock, ImUnlocked } from "react-icons/im";

const newTableColumns = [
  {
    header: "User Id",
    accessorKey: "id",
    size: 100,
  },
  {
    header: "Full Name",
    accessorKey: "fullName",
  },
  {
    header: "Email",
    accessorKey: "emailAddress",
  },
  {
    accessorFn: (row) => (row?.last_login ? new Date(row.last_login) : ""),
    header: "Last login",
    accessorKey: "last_login",
    Cell: ({ cell }) =>
      cell.getValue() ? new Date(cell.getValue()).toGMTString() : "",
    filterFn: "lessThanOrEqualTo",
    sortingFn: "datetime",
    Filter: ({ column }) => filterByDateAndTime(column),
  },
  {
    header: "Role",
    accessorKey: "role",
    size: 120,
  },
  {
    header: "Verified",
    accessorKey: "verified",
    size: 100,
    Cell: ({ cell }) =>
      cell.getValue() === true ? (
        <StatusText status={cell.getValue()} text="verified" />
      ) : (
        <StatusText status={cell.getValue()} text="not verified" />
      ),
    filterVariant: "checkbox",
  },
  {
    header: "Account Status",
    accessorKey: "is_blocked",
    size: 100,
    Cell: ({ cell }) => (
      <Icon sx={{ color: "grey" }}>
        {cell?.getValue() === true ? <ImLock /> : <ImUnlocked />}
      </Icon>
    ),
  },
];

export default function UsersManagement() {
  const { data, isLoading, isFetching, isSuccess, isError, error } =
    useGetUsersListQuery();
  const [updateUserStatus, { isLoading: isUpdating }] =
    useUpdateUserStatusMutation();

  const tableColumns = React.useMemo(() => newTableColumns, []);
  const tableData = React.useMemo(() => data, [data]);

  // TODO: fix this later
  const [userId, setUserId] = React.useState();

  // Related to menu for blocking and unblocking
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box px={1}>
      <ReportTabSectionHeader
        sectionTitle="Manage Users from This Interface"
        sectionSubTitle="Block users"
      />
      <Box my={3}>
        <Divider />
      </Box>

      <MaterialReactTable
        state={{
          isLoading,
          showAlertBanner: isError,
          showProgressBars: isFetching,
        }}
        columns={tableColumns}
        data={isSuccess ? tableData : []}
        enableStickyHeader
        enableStickyFooter
        enableRowActions
        positionPagination="bottom"
        positionToolbarAlertBanner="bottom"
        enableGlobalFilterModes
        muiTableHeadCellProps={{
          sx: {
            fontWeight: "bold",
            fontSize: "14px",
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            paddingLeft: "1.5em",
          },
        }}
        muiTableContainerProps={{
          sx: {
            maxHeight: "calc(100vh - 300px)",
          },
        }}
        muiToolbarAlertBannerProps={
          isError
            ? {
                color: "error",
                children: `Something went wrong with fetching the data ${error}`,
              }
            : undefined
        }
        renderRowActions={({ row }) => (
          <Box>
            <Icon
              sx={{
                cursor: "pointer",
                color: "gray",
              }}
              onClick={(e) => {
                console.log(row?.original?.id);
                setUserId(row?.original?.id);
                handleClick(e);
              }}
              // onClick={handleClick}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <IoEllipsisVertical />
            </Icon>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  boxShadow: "0 1px 1px rgba(0,0,0,0.1)",
                },
              }}
            >
              <MenuItem
                onClick={() => {
                  updateUserStatus(userId);
                  handleClose();
                }}
                disabled={isUpdating}
              >
                Change Account Status
              </MenuItem>
            </Menu>
          </Box>
        )}
        displayColumnDefOptions={{
          "mrt-row-actions": {
            header: "Actions",
          },
        }}
        enableColumnResizing
        positionActionsColumn="last"
      />
    </Box>
  );
}
