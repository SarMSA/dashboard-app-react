import React from "react";
import { Header } from "../../components";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  DateTime,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Area = () => {
  const { themeMode } = useStateContext();
  const legendTextColor = themeMode === "Dark" ? "#9CA3AF" : "";

  // Create theme-specific axis configurations
  const primaryXAxis = {
    ...areaPrimaryXAxis,
    labelStyle: {
      color: themeMode === "Dark" ? "#9CA3AF" : "",
    },
    lineStyle: {
      color: themeMode === "Dark" ? "#9CA3AF" : "",
    },
  };

  const primaryYAxis = {
    ...areaPrimaryYAxis,
    labelStyle: {
      color: themeMode === "Dark" ? "#9CA3AF" : "",
    },
    lineStyle: {
      color: themeMode === "Dark" ? "#9CA3AF" : "",
    },
  };
  return (
    <div className="m-4 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category={"Chart"} title={"inflation Rate in Percentage"} />
      <div className="w-full"></div>
      <ChartComponent
        id="area-charts"
        primaryXAxis={primaryXAxis}
        primaryYAxis={primaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={themeMode === "Dark" ? "#33373E" : "#fff"}
        height="420"
        legendSettings={{ textStyle: { color: legendTextColor } }}
      >
        <Inject services={[SplineAreaSeries, Legend, DateTime]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
