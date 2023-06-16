import React from "react";
import { Box, Grid } from "@mui/material";
import { Divider } from "@mui/material";
import ReportTabSectionHeader from "components/dashboard/ReportTabSectionHeader";

import AnalyticsTable from "components/tables/AnalyticsTable";
import RealTime from "components/dashboard/Analytics/RealTime";
import useAnalyTics from "hooks/dashboard/useAnalyTics";
import UploadMethods from "components/dashboard/Analytics/UploadMethods";
import RealTimeSkeleton from "components/dashboard/Analytics/Skeletons.jsx/RealTimeSkeleton";

import TableSkeleton from "components/dashboard/Analytics/Skeletons.jsx/TableSkeleton";
import UploadMethSkeleton from "components/dashboard/Analytics/Skeletons.jsx/UploadMeths";
import TestFile from "components/BarChartAnalytics";
import ContentDisplay from "components/dashboard/ContentDisplay";

export default function Analytics() {
  const [
    realTime,
    tableData,
    minute,
    handleChange,
    loadingRealTime,
    loadingTable,
    handleDateRangeChange,
    dateRange,
    customTags,
    loadingtags,
    isError,
    error,
  ] = useAnalyTics();

  return (
    <Box display="flex" flexDirection="column">
      <ReportTabSectionHeader
        sectionTitle="User Analytics"
        sectionSubTitle="Page view, Page scroll, Button clicks, etc"
        dateRange={dateRange}
        handleDateRangeChange={handleDateRangeChange}
        tableData={tableData}
        loadingtags={loadingtags}
      />

      <Box my={3}>
        <Divider />
      </Box>

      <Box>
        <Grid container spacing={3} columns={12}>
          <Grid item xs={12} md={12} lg={3}>
              {loadingRealTime ? (
                <RealTimeSkeleton />
              ) : (
                <RealTime
                  data={realTime}
                  minute={minute}
                  handleChange={handleChange}
                />
              )}
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
              <TestFile loading={loadingTable} tableData={tableData} />
          </Grid>
          <Grid item xs={12} md={12} lg={3}>
              {loadingtags ? (
                <UploadMethSkeleton />
              ) : (
                <UploadMethods customTags={customTags} />
              )}
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
              {loadingTable ? (
                <TableSkeleton />
              ) : (
                <AnalyticsTable row={tableData} />
              )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
