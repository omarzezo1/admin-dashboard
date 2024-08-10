import { ResponsiveLine } from "@nivo/line";
import { mockLineData } from "../../data/mockData";
import { useEffect, useState } from "react";

const Line = () => {
  const [mode, setMode] = useState("");
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setMode(localStorage.getItem("theme"));
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [window.localStorage.getItem("theme")]);
  return (
    <ResponsiveLine
      data={mockLineData}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 40,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -50,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: mode === "dark" ? "#FFF" : "#333333",
            },
          },
          legend: {
            text: {
              fill: mode === "dark" ? "#FFF" : "#333333",
            },
          },
          ticks: {
            line: {
              stroke: "#CCC",
            },
            text: {
              fill: mode === "dark" ? "#FFF" : "#333333",
            },
          },
        },
        legends: {
          title: {
            text: {
              fill: "#333333",
            },
          },
          text: {
            fill: mode === "dark" ? "#FFF" : "#333333",
          },
          ticks: {
            text: {
              fill: "#333333",
            },
          },
        },
      }}
    />
  );
};

export default Line;
