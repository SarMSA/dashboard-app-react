import React from "react";
import { Header } from "../../components";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  DataLabel,
  Tooltip,
  Category,
  ColumnSeries,
} from "@syncfusion/ej2-react-charts";
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Bar = () => {
  const { themeMode } = useStateContext();
  const legendTextColor = themeMode === "Dark" ? "#9CA3AF" : "";

  // Create theme-specific axis configurations
  const primaryXAxis = {
    ...barPrimaryXAxis,
    labelStyle: {
      color: themeMode === "Dark" ? "#9CA3AF" : "",
    },
    lineStyle: {
      color: themeMode === "Dark" ? "#9CA3AF" : "",
    },
  };

  const primaryYAxis = {
    ...barPrimaryYAxis,
    labelStyle: {
      color: themeMode === "Dark" ? "#9CA3AF" : "",
    },
    lineStyle: {
      color: themeMode === "Dark" ? "#9CA3AF" : "",
    },
  };
  return (
    <div className="m-4 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category={"Bar"} title={"Olympic Medal Counts - RIO"} />
      <div className="w-full"></div>
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
        <Inject services={[ColumnSeries, Legend, DataLabel, Category, Tooltip]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
      ;
    </div>
  );
};

export default Bar;
