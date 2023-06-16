import * as React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import SearchReportTab from "components/dashboard/reports/SearchReportTab";
import UserReportTab from "components/dashboard/reports/UserReportTab";
import ScrapingReportTab from "components/dashboard/reports/ScrapingReportTab";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const Tab = styled(TabUnstyled)`
  color: ${grey[700]};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  padding: 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${grey[100]};
  }

  &:focus {
    color: ${grey[500]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${grey[100]};
    color: ${grey[900]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)(
  ({ theme }) => `
  fontFamily: Lato;
  width: 100%;
  font-size: 0.875rem;
`
);

// TODO: move this out, and use lato font
const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  min-width: 400px;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: start;
  justify-content: start;
  align-content: space-between;
  `
);

export default function Report() {
  return (
    <Box>
      <TabsUnstyled defaultValue={0}>
        <TabsList>
          <Tab>Search report</Tab>
          <Tab>User report</Tab>
          <Tab>Scraping report</Tab>
        </TabsList>
        <TabPanel value={0}>
          <SearchReportTab />
        </TabPanel>
        <TabPanel value={1}>
          <UserReportTab />
        </TabPanel>
        <TabPanel value={2}>
          <ScrapingReportTab />
        </TabPanel>
      </TabsUnstyled>
    </Box>
  );
}
