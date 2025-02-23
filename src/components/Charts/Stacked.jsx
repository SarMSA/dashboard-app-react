import React from "react";
import {
  Category,
  ChartComponent,
  Inject,
  Tooltip,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  StackingColumnSeries,
  DataLabel,
  LineSeries,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from "../../data/dummy";

const Stacked = ({ height, width }) => {
  const { themeMode } = useStateContext();
  // Create theme-specific axis configurations
  const primaryXAxis = {
    ...stackedPrimaryXAxis,
    labelStyle: {
      color: themeMode === "Dark" ? "#9CA3AF" : "",
    },
    lineStyle: {
      color: themeMode === "Dark" ? "#9CA3AF" : "",
    },
  };

  const primaryYAxis = {
    ...stackedPrimaryYAxis,
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
      height={height}
      width={width}
      primaryXAxis={primaryXAxis}
      primaryYAxis={primaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: "white" }}
    >
      <Inject services={[DataLabel, Tooltip, Legend, Category, StackingColumnSeries, LineSeries]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
