import React from "react";
import { ResponsivePie } from "@nivo/pie";
import useReportPie from "../../../hooks/dashboard/useReportPie";
import { Box } from "@mui/material";
import Header from "../Header";

const Devices = () => {
  const deviceData = useReportPie();

  if (deviceData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Box display="flex" flexDirection="column">
      <Header subTitle="Pie chart for user search devices" />

      {/* PieChart */}
      <Box height="46.2vh">
        <ResponsivePie
          data={deviceData}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          sortByValue={true}
          padAngle={2}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          colors={{ scheme: "category10" }}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", "0.2"]],
          }}
          enableArcLinkLabels={false}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          enableArcLabels={false}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", "2"]],
          }}
          legends={[
            {
              anchor: "top",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: -38,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 25,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Devices;
