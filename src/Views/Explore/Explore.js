import React, { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";
import { useQuery } from "react-query";
import { timeseriesFetcher } from "Common/fetchers";
import Template from "Assets/RS.INF.01.xls";
import { ChartComponent } from "./Components";
import { fromUnixTime, format } from "date-fns";

const Explore = () => {
  const { data: timeDataset, isLoading } = useQuery(
    timeseriesFetcher.keys.fetch,
    timeseriesFetcher.getData
  );

  const [monthlyTimeSeriesData, setMonthlyTimeSeriesData] = useState([]);
  const [sixMonthlyTimeSeriesData, setSixMonthlyTimeSeriesData] = useState([]);
  const [threeMonthlytimeSeriesData, setThreeMonthlyTimeSeriesData] = useState(
    []
  );
  const downloadTemplate = () => {
    var link = document.createElement("a");
    link.download = "RS.INF.01.xls";
    link.href = Template;
    link.click();
  };

  useEffect(() => {
    if (!isLoading) {

      const timeStamps = timeDataset?.data?.date_ranges?.map(
        (timestamp, idx) => {
          return {
            time: format(fromUnixTime(timestamp[0]), "yyyy-MM-dd"),
            value: timestamp[1],
          };
        }
      );
      const MonthlyTimestamps = timeStamps;
      
      const ThreeMonthlyTimestamps = timeStamps?.filter((_, idx) => {
        return idx % 3
      });

      const SixMonthlyTimestamps = timeStamps?.filter((_, idx) => {
        return idx % 6;
      });
      setMonthlyTimeSeriesData(MonthlyTimestamps);
      setThreeMonthlyTimeSeriesData(ThreeMonthlyTimestamps);
      setSixMonthlyTimeSeriesData(SixMonthlyTimestamps);
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
        <ChartComponent monthly={monthlyTimeSeriesData} threeMonthly={threeMonthlytimeSeriesData} sixMonthly={sixMonthlyTimeSeriesData} />
      </div>
    </div>
  );
};

export default Explore;
