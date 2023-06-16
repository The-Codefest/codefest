//Date Picker Imports
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const searchReportColumns = [
  {
    header: "Search Date and Time",
    accessorKey: "search_date_and_time",
  },
  {
    header: "Search Image Hash",
    accessorKey: "search_image_hash",
  },
  {
    header: "Search Image Size",
    accessorKey: "search_image_size",
  },
  {
    header: "Search Image Format",
    accessorKey: "search_image_format",
  },
  {
    header: "Number of Matching Results",
    accessorKey: "number_of_matching_results",
  },
  {
    header: "Name of User",
    accessorKey: "full_name_of_user",
  },
  {
    header: "ID of User",
    accessorKey: "id_of_user",
  },
  {
    header: "Country of User",
    accessorKey: "country_of_user",
  },
  {
    header: "IP Address of User",
    accessorKey: "ip_address_of_user",
  },
  {
    header: "Search Duration",
    accessorKey: "search_duration",
  },
  {
    header: "Most Popular Source in Results",
    accessorKey: "most_popular_source_in_results",
  },
  {
    header: "Device Used",
    accessorKey: "device_used",
  },
  {
    header: "Browser Used",
    accessorKey: "browser_used",
  },
  {
    header: "Browser Version",
    accessorKey: "browser_version",
  },
];

export const userReportColumns = [
  {
    accessorKey: "id",
    header: "ID",
    size: 40,
  },
  {
    header: "First Name",
    accessorKey: "first_name",
  },
  {
    header: "Last Name",
    accessorKey: "last_name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Country",
    accessorKey: "country",
  },
  {
    header: "Active",
    accessorKey: "is_active",
    // accessorFn: (originalRow) => (originalRow.isActive ? "true" : "false"), //must be strings
    Cell: ({ cell }) => (cell.getValue() === true ? "Active" : "Inactive"),
    filterVariant: "checkbox",
  },
  {
    header: "Verified",
    accessorKey: "verified",
    Cell: ({ cell }) =>
      cell.getValue() === true ? "Verified" : "Not Verified",
    filterVariant: "checkbox",
  },
  {
    header: "Admin",
    accessorKey: "is_admin",
    Cell: ({ cell }) => (cell.getValue() === true ? "Admin" : "Regular User"),
    filterVariant: "checkbox",
  },
  {
    header: "Date Joined",
    accessorKey: "date_joined",
    filterFn: "lessThanOrEqualTo",
    sortingFn: "datetime",
    // accessorFn: (row) => new Date(row.date_joined), //convert to Date for sorting and filtering
    Filter: ({ column }) => (
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
    ),
  },
  {
    header: "Last Logged In",
    accessorKey: "last_logged_in",
  },
  {
    header: "Searches Made",
    accessorKey: "number_of_searches_made",
  },
];


// TODO: get the date filter to work

export const scrapingReportColumns = [
  {
    header: "Website",
    accessorKey: "website",
  },
  {
    header: "Images Scraped From Site",
    accessorKey: "number_of_scraped_images_from_site",
  },
  {
    header: "Percentage of Images",
    accessorKey: "percentage_of_images_from_this_website",
  },
  {
    header: "Unique Images Scraped From Site",
    accessorKey: "number_of_unique_images",
  },
  {
    header: "Unique Times in Search Results",
    accessorKey: "unique_number_of_times_in_search_results",
  },
];

// TODO: get the date filter to work
