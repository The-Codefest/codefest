import React from "react";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import TabularGrid from "components/tables/TabularGrid";
import ReportTabSectionHeader from "../ReportTabSectionHeader";
import { useScrapingReportQuery } from "store/services/reportApi";

const ScrapingReportTab = () => {
  const scrapingReportColumns = [
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
      Cell: ({ cell }) => `${cell.getValue()}%`,
    },
  ];

  const { data, isLoading, isFetching, isSuccess, isError, error } =
    useScrapingReportQuery();

  return (
    <Box px={1}>
      <ReportTabSectionHeader
        sectionTitle="Scraping report"
        sectionSubTitle="View extensive details about indexing of images in our database"
      />
      <Box mt={3}>
        <Divider />
      </Box>
      <Box mt={5}>
        <TabularGrid
          columns={scrapingReportColumns}
          data={isSuccess ? data : []}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          error={error}
          sectionName="Scraping Report"
        />
      </Box>
    </Box>
  );
};

export default ScrapingReportTab;
