import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import { persons } from "data/persons";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

import {
  useSortBy,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  useTable,
} from "react-table";

function TheTable({ columns, data }) {
  // Use the state and functions returned from useTable to build the UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Render the UI for the table
  return (
    <Box>
      <Box
        sx={{
          px: 1,
        }}
      >
        Filters
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer {...getTableProps()} sx={{ maxHeight: 440 }}>
          <Table stickyHeader>
            <TableHead>
              {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <TableCell
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      sx={{}}
                    >
                      {column.render("Header")}
                      <Typography
                        fontSize="16px"
                        display="inline"
                        ml={1}
                        alignSelf="center"
                      >
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <AiOutlineArrowDown />
                          ) : (
                            <AiOutlineArrowUp />
                          )
                        ) : (
                          ""
                        )}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  prepareRow(row);
                  return (
                    <TableRow
                      {...row.getRowProps()}
                      hover
                      role="checkbox"
                      tabIndex={-1}
                    >
                      {row.cells.map((cell) => {
                        return (
                          <TableCell {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

function TabularData() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
          },
          {
            Header: "Visits",
            accessor: "visits",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Profile Progress",
            accessor: "profileProgress",
          },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(() => persons, []);

  return (
    <div>
      <CssBaseline />
      <TheTable columns={columns} data={data} />
    </div>
  );
}

export default TabularData;
