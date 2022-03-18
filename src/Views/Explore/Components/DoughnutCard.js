import React from "react";
import { Doughnut } from "react-chartjs-2";
import {interpolateBlues} from "d3-scale-chromatic";
import {interpolateColors} from 'Common/colorGen'
const colorScale = interpolateBlues;

const colorRangeInfo = {
  colorStart: 0,
  colorEnd: 0.65,
  useEndAsStart: true,
};

const DoughnutCard = (props) => {
  const { fishes } = props;

  const data = {
    labels: fishes?.map((ele) => ele[0].toUpperCase()),
    datasets: [
      {
        label: "Fishes Dataset",
        data: fishes?.map((ele) => ele[1]),
        backgroundColor: interpolateColors(fishes?.length, colorScale, colorRangeInfo),
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "right",
      },
    },
  };
  return (
    <div className="w-full flex flex-col items-start justify-center gap-1 border-gray-100 border-2 rounded-md p-4 hover:shadow-lg transition-all ease-linear duration-100">
      <div className="font-semibold text-lg text-gray-900">Fish Species</div>
      <div className=" font-light text-xs text-gray-500 uppercase">
        Organized By Numbers (Quantity)
      </div>
      <div className="h-full w-full self-center">
        <Doughnut
          height={"100%"}
          width={"100%"}
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default DoughnutCard;
