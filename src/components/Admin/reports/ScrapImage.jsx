import React from "react";
import { ResponsivePie } from "@nivo/pie";
import useScrapData from "hooks/dashboard/useScrapData";
import { Box } from "@mui/material";
import Header from "../Header";

const ScrapImage = () => {
  const scarpSite = useScrapData();

  if (scarpSite.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <Box display="flex" flexDirection="column">
      <Header subTitle="Images per url" />
      <Box sx={{ height: "47vh" }}>
        <ResponsivePie
          data={scarpSite}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          startAngle={-94}
          innerRadius={0.6}
          padAngle={2}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          colors={{ scheme: "paired" }}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          enableArcLinkLabels={false}
          arcLinkLabel="value"
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          enableArcLabels={false}
          arcLabel="id"
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          //   legends={[
          //     {
          //       anchor: "bottom",
          //       direction: "row",
          //       itemsSpacing: 5,
          //       itemsPerRow: 3,
          //       itemsPerColumn: 4,
          //       itemWidth: 50,
          //       itemHeight: 20,
          //       justify: false,
          //       padding: 10,
          //       translateX: 20,
          //       translateY: -230,
          //       itemTextColor: "#999",
          //       itemDirection: "right",
          //       itemOpacity: 1,
          //       symbolSize: 18,
          //       symbolShape: "circle",
          //       effects: [
          //         {
          //           on: "hover",
          //           style: {
          //             itemTextColor: "#000",
          //           },
          //         },
          //       ],
          //     },
          //   ]}
        />
      </Box>
    </Box>
  );
};

export default ScrapImage;
