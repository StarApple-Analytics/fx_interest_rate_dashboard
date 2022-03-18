import React, { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";
import { useQuery } from "react-query";
import { timeseriesFetcher } from "Common/fetchers";
import Template from "Assets/RS.INF.01.xls";
import { ChartComponent } from "./Components";
import {fromUnixTime, format} from 'date-fns'

const Explore = () => {
  const { data: timeDataset, isLoading } = useQuery(
    timeseriesFetcher.keys.fetch,
    timeseriesFetcher.getData
  );

  const [timeSeriesData, setTimeSeriesData] = useState([
    { time: "2018-12-22", value: 32.51 },
    { time: "2018-12-23", value: 31.11 },
    { time: "2018-12-24", value: 27.02 },
    { time: "2018-12-25", value: 27.32 },
    { time: "2018-12-26", value: 25.17 },
    { time: "2018-12-27", value: 28.89 },
    { time: "2018-12-28", value: 25.46 },
    { time: "2018-12-29", value: 23.92 },
    { time: "2018-12-30", value: 22.68 },
    { time: "2018-12-31", value: 22.67 },
  ]);
  const downloadTemplate = () => {
    var link = document.createElement("a");
    link.download = "RS.INF.01.xls";
    link.href = Template;
    link.click();
  };

  useEffect(() => {
    if (!isLoading) {
      const timestamps = timeDataset?.data?.date_ranges?.map((timestamp) => {
        return {
          time: format(fromUnixTime(timestamp[0]), "yyyy-MM-dd"),
          value: timestamp[1],
        };
      });
      setTimeSeriesData(timestamps)
    }
  }, [isLoading, timeDataset]);

  return (
    <div className="grid grid-row gap-8 relative w-full ml-11 mt-3">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="col-span-full text-md font-semibold text-gray-500">
            Inflation Tracker
          </div>
          <div className="col-span-full text-sm font-light text-gray-600">
            Monitoring Jamaica's Monthly Inflation Rate
          </div>
        </div>
        <button
          type="button"
          onClick={() => downloadTemplate()}
          className="text-white bg-slate-800 hover:bg-slate-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
        >
          <BsDownload className="mr-2 -ml-1 w-5 h-5" />
          Inflation Data
        </button>
      </div>
      <div className="w-full mt-36 h-4/5">
        <ChartComponent data={timeSeriesData} />
      </div>
    </div>
  );
};

export default Explore;
