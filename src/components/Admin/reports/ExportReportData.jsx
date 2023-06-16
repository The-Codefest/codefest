import React from "react";
import { Typography, Button } from "@mui/material";
import { ExportToCsv } from "export-to-csv";
import StyledMenu from "components/styledComponents/StyledMenu.styles";
import MenuItem from "@mui/material/MenuItem";
import { BsFiletypeCsv, BsFilePdf, BsFileExcel } from "react-icons/bs";
import { TiExport } from "react-icons/ti";
import { utils, writeFileXLSX } from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

export const ExportData = ({
  table,
  data,
  columns,
  sectionName,
  isDataLoading,
  isError,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExportDataAsCsv = React.useCallback(() => {
    const csvOptions = {
      fieldSeparator: ",",
      quoteStrings: '"',
      decimalSeparator: ".",
      showLabels: true,
      useBom: true,
      useKeysAsHeaders: true,
      filename: sectionName,
    };
    const csvExporter = new ExportToCsv(csvOptions);
    const selectedRows = table.getSelectedRowModel();

    if (selectedRows?.rows?.length > 0) {
      csvExporter.generateCsv(selectedRows.rows.map((row) => row?.original));
    } else {
      csvExporter.generateCsv(
        table.getPrePaginationRowModel()?.rows?.map((row) => row?.original)
      );
    }
  }, [table, sectionName]);

  const handleExportDataAsExcel = React.useCallback(() => {
    const selectedRows = table.getSelectedRowModel();
    const fileName = `${sectionName}.xlsx`;

    if (selectedRows?.rows?.length > 0) {
      const workBook = utils.book_new();
      const worksheet = utils.json_to_sheet(
        selectedRows?.rows?.map((row) => row.original)
      );
      utils.book_append_sheet(workBook, worksheet, "Report");
      writeFileXLSX(workBook, fileName);
    } else {
      const workBook = utils.book_new();
      const worksheet = utils.json_to_sheet(
        table.getPrePaginationRowModel()?.rows?.map((row) => row.original)
      );
      utils.book_append_sheet(workBook, worksheet, "Report");
      writeFileXLSX(workBook, fileName);
    }
  }, [table, sectionName]);

  const handleExportDataAsPdf = () => {
    const selectedRows = table.getSelectedRowModel();
    const fileName = `${sectionName}.pdf`;

    if (selectedRows?.rows?.length > 0) {
      const doc = new jsPDF({
        orientation: "landscape",
      });

      doc.autoTable({
        styles: {
          fontSize: 8,
        },
        columns: columns?.map((column) => ({
          header: column.header,
          dataKey: column.accessorKey,
        })),
        body: selectedRows?.rows?.map((row) => ({
          ...row?.original,
          date_registered: new Date(
            row?.original?.date_registered
          )?.toGMTString(),
          last_login: row?.original?.last_login
            ? new Date(row?.original?.last_login)?.toGMTString()
            : null,
        })),
      });

      doc.save(fileName);
    } else {
      const doc = new jsPDF({
        orientation: "landscape",
      });

      doc.autoTable({
        styles: {
          fontSize: 8,
        },
        columns: columns?.map((column) => ({
          header: column.header,
          dataKey: column.accessorKey,
        })),
        body: table.getPrePaginationRowModel()?.rows?.map((row) => ({
          ...row?.original,
          date_registered: new Date(
            row?.original?.date_registered
          )?.toGMTString(),
          last_login: row?.original?.last_login
            ? new Date(row?.original?.last_login)?.toGMTString()
            : null,
        })),
      });

      doc.save(fileName);
    }
  };

  return (
    <>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        startIcon={<TiExport />}
        sx={{
          textTransform: "capitalize",
          fontSize: "16px",
          cursor: isDataLoading ? "not-allowed" : "pointer",
        }}
        disabled={isDataLoading || isError}
      >
        Export Data
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          disableRipple
          sx={{ textTransform: "capitalize" }}
          onClick={() => handleExportDataAsCsv()}
        >
          <BsFiletypeCsv />
          <Typography ml={1}>As CSV</Typography>
        </MenuItem>
        <MenuItem
          disabled={table.getRowModel().rows.length === 0}
          disableRipple
          sx={{ textTransform: "capitalize" }}
          onClick={() => handleExportDataAsExcel()}
        >
          <BsFileExcel />
          <Typography ml={1}>As Excel</Typography>
        </MenuItem>
        <MenuItem
          disableRipple
          sx={{ textTransform: "capitalize" }}
          onClick={() => handleExportDataAsPdf()}
        >
          <BsFilePdf />
          <Typography ml={1}>As PDF</Typography>
        </MenuItem>
      </StyledMenu>
    </>
  );
};
