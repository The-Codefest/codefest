import React from "react";
import { Box, Stack, Divider, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import SearchCountByCountryMap from "components/dashboard/maps/SearchCountByCountryMap";
import StatsItem from "components/dashboard/Analytics/StatsItem";
import SearchesByRegisteredAndUnregisteredUsers from "components/dashboard/charts/SearchesByRegisteredAndUnregisteredUsers";
import SearchCountByDevice from "components/dashboard/charts/SearchCountByDevice";
import SearchCountTopCountryList from "components/dashboard/SearchCountTopCountryList";
import SearchCountByBrowserUsed from "components/dashboard/SearchCountByBrowserUsed";
import MostPopularSearchSources from "components/dashboard/MostPopularSearchSources";
import MostIndexedWebsites from "components/dashboard/MostIndexedWebsites";
import {
  useGetUsersAndSearchStatsQuery,
  useGetCountryAndDeviceStatsQuery,
  useGetMostPopularSearchSourcesQuery,
  useGetMostIndexedWebsitesQuery,
  useGetSearchesMadeByUsersStatsQuery,
  useGetTopCountriesBySearchMapDataQuery,
} from "store/services/dashboardStatsApi";

import { capitalizeText } from "utils/format";
import ContentDisplay from "components/dashboard/ContentDisplay";

const GridItem = styled(Grid)(({ theme }) => ({
  border: "1px solid #ECECEC",
}));

const Dashboard = () => {
  const {
    data: statsData,
    error: statsDataError,
    isLoading: isStatsLoading,
    isError: isStatsError,
    isSuccess: isStatsSuccess,
  } = useGetUsersAndSearchStatsQuery();
  const {
    data: countryAndDeviceStats,
    isLoading: isCountryAndDeviceStatsLoading,
    isError: isCountryAndDeviceStatsError,
    isSuccess: isCountryAndDeviceStatsSuccess,
  } = useGetCountryAndDeviceStatsQuery();
  const {
    data: mostPopularSearchSources,
    isLoading: isMostPopularSearchSourcesLoading,
    isError: isMostPopularSearchSourcesError,
    isSuccess: isMostPopularSearchSourcesSuccess,
  } = useGetMostPopularSearchSourcesQuery();
  const {
    data: mostIndexedWebsites,
    isLoading: isMostIndexedWebsitesLoading,
    isError: isMostIndexedWebsitesError,
    isSuccess: isMostIndexedWebsitesSuccess,
  } = useGetMostIndexedWebsitesQuery();
  const {
    data: graphData,
    isLoading: isGraphDataLoading,
    isError: isGraphDataError,
    isSuccess: isGraphDataSuccess,
  } = useGetSearchesMadeByUsersStatsQuery();
  const {
    data: mapData,
    isLoading: isMapDataLoading,
    isSuccess: isMapDataSuccess,
    isError: isMapDataError,
  } = useGetTopCountriesBySearchMapDataQuery();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* NUMERICAL STATISTICS  */}
        <GridItem item xs={12} sm={6} md={4} lg={3}>
          <ContentDisplay
            isLoading={isStatsLoading}
            isError={isStatsError}
            error={statsDataError}
          >
            {isStatsSuccess &&
              Object.keys(statsData)?.map((stat_key) => (
                <StatsItem
                  title={capitalizeText(stat_key)}
                  value={statsData[stat_key]}
                  key={stat_key}
                />
              ))}
          </ContentDisplay>
        </GridItem>

        {/* GRAPH OF REGISTERED AND UNREGISTERED USERS */}
        <GridItem item xs={12} sm={6} md={8} lg={9}>
          <ContentDisplay
            isLoading={isGraphDataLoading}
            isError={isGraphDataError}
          >
            {isGraphDataSuccess && (
              <SearchesByRegisteredAndUnregisteredUsers
                graphData={graphData}
                isGraphDataSuccess
              />
            )}
          </ContentDisplay>
        </GridItem>

        {/* MAP */}
        <GridItem item xs={12} sm={6} md={8} lg={9}>
          <ContentDisplay isLoading={isMapDataLoading} isError={isMapDataError}>
            {isMapDataSuccess && (
              <SearchCountByCountryMap
                mapData={mapData}
                isMapDataSuccess={isMapDataSuccess}
              />
            )}
          </ContentDisplay>
        </GridItem>

        {/* COUNT BY COUNTRY, DEVICE, AND BROWSER */}
        <GridItem item xs={12} sm={6} md={4} lg={3}>
          <Stack spacing={2}>
            <ContentDisplay
              isLoading={isCountryAndDeviceStatsLoading}
              isError={isCountryAndDeviceStatsError}
            >
              {isCountryAndDeviceStatsSuccess && (
                <SearchCountTopCountryList
                  topCountriesBySearch={
                    countryAndDeviceStats?.search_by_country
                  }
                />
              )}
            </ContentDisplay>
            <Divider />
            <ContentDisplay
              isLoading={isCountryAndDeviceStatsLoading}
              isError={isCountryAndDeviceStatsError}
            >
              {isCountryAndDeviceStatsSuccess && (
                <SearchCountByDevice
                  searchCountByDevice={countryAndDeviceStats?.search_by_device}
                />
              )}
            </ContentDisplay>
            <Divider />
            <ContentDisplay
              isLoading={isCountryAndDeviceStatsLoading}
              isError={isCountryAndDeviceStatsError}
            >
              {isCountryAndDeviceStatsSuccess && (
                <SearchCountByBrowserUsed
                  numberOfSearchCountByBrowser={
                    countryAndDeviceStats?.search_by_browser
                  }
                />
              )}
            </ContentDisplay>
          </Stack>
        </GridItem>

        {/* TOP X */}
        <GridItem item xs={12} sm={6}>
          <ContentDisplay
            isLoading={isMostPopularSearchSourcesLoading}
            isError={isMostPopularSearchSourcesError}
          >
            {isMostPopularSearchSourcesSuccess && (
              <MostPopularSearchSources
                popularSearchSources={mostPopularSearchSources}
              />
            )}
          </ContentDisplay>
        </GridItem>
        <GridItem item xs={12} sm={6}>
          <ContentDisplay
            isLoading={isMostIndexedWebsitesLoading}
            isError={isMostIndexedWebsitesError}
          >
            {isMostIndexedWebsitesSuccess && (
              <MostIndexedWebsites mostIndexedWebsites={mostIndexedWebsites} />
            )}
          </ContentDisplay>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;
