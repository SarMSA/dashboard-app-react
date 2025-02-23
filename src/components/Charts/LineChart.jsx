import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  Legend,
  DateTime,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const LineChart = () => {
  const { themeMode } = useStateContext();
  const legendTextColor = themeMode === "Dark" ? "#9CA3AF" : "";

  // Create theme-specific axis configurations
  const primaryXAxis = {
    ...LinePrimaryXAxis,
    labelStyle: {
      color: themeMode === "Dark" ? "#9CA3AF" : "",
    },
    lineStyle: {
      color: themeMode === "Dark" ? "#9CA3AF" : "",
    },
  };

  const primaryYAxis = {
    ...LinePrimaryYAxis,
    labelStyle: {
      color: themeMode === "Dark" ? "#9CA3AF" : "",
    },
    lineStyle: {
      color: themeMode === "Dark" ? "#9CA3AF" : "",
    },
  };
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={primaryXAxis}
      primaryYAxis={primaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={themeMode === "Dark" ? "#33373E" : "#fff"}
      height="420"
      legendSettings={{ textStyle: { color: legendTextColor } }}
    >
      <Inject services={[LineSeries, Legend, DateTime, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
