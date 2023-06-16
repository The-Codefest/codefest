import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const filterByDateAndTime = (column) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      onChange={(newValue) => {
        column.setFilterValue(newValue);
      }}
      slotProps={{
        textField: {
          helperText: "Filter Mode: Less Than",
          sx: { minWidth: "120px" },
          variant: "standard",
        },
      }}
      value={column.getFilterValue()}
    />
  </LocalizationProvider>
);
