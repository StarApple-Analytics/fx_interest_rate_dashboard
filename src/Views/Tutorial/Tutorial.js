import React from "react";
import { RiZoomInFill } from 'react-icons/ri';
import { AiOutlineExpandAlt, AiTwotoneSwitcher } from "react-icons/ai";

const Tutorial = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-14 relative w-full p-8">
      <div className=" row-span-1 gap-3 flex-col flex tracking-wide">
        <div className="text-slate-800 font-semibold text-sm">Overview</div>
        <div className=" text-black font-black text-3xl">
          Get started with JA Inflation Tracker
        </div>
        <div className="text-gray-700 text-xl font-light w-2/3">
          The JA Inflation Tracker works by scraping the monthly Consumer Price
          Index from the Bank Of Jamaica (BOJ){" "}
          <span className="font-semibold text-slate-800">
            <a href="https://boj.org.jm/statistics/real-sector/inflation/">
              official website
            </a>
          </span>
          , these rates are used to determine the Inlfation Rate of the local
          currency (JMD)
        </div>
        <div className="text-gray-900 text-xl font-medium w-2/3">
          The Y axis features the Consumer Price Index and The X axis features
          the Date
        </div>
      </div>
      <div className="gap-5 flex-col flex tracking-wide">
        <div className="text-slate-800 font-semibold text-sm">
          Chart Features
        </div>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-9 flex flex-col gap-1">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-slate-200 ">
              <RiZoomInFill className="w-3 h-3 text-blue-600" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">Zooming</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-600">
              Detailed TimeSereis Data
            </time>
            <p className="text-base font-normal text-gray-500 w-2/3">
              Using the mouse wheel you're able to zoom in and out on the chart,
              zooming in allows you to see the timeseries finer data.
            </p>
            <a href="https://gyazo.com/3a802bd648d48bce5cfa7de63ea381cf">
              <img
                src="https://i.gyazo.com/3a802bd648d48bce5cfa7de63ea381cf.gif"
                className="w-3/4"
                width="1600"
                alt="zooming-feature"
              />
            </a>
          </li>
          <li className="mb-10 ml-9 flex flex-col gap-1">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-slate-200 ">
              <AiOutlineExpandAlt className="w-3 h-3 text-blue-600" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              Panning /w Infinite Scroll
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-600">
              Navigate Timeseries Date
            </time>
            <p className="text-base font-normal text-gray-500 w-2/3">
              Using the mouse, you can drag on the chart to move from datapoints
              with infinity scroll.
            </p>
            <a
              className="w-full"
              href="https://gyazo.com/c1c1fe6aadb6b962618146c3d04dda77"
            >
              <img
                className="w-3/4"
                src="https://i.gyazo.com/c1c1fe6aadb6b962618146c3d04dda77.gif"
                alt="Panning Feature"
                width="1600"
              />
            </a>
          </li>
          <li className="mb-10 ml-9 flex flex-col gap-1 w-ful">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-slate-200 ">
              <AiTwotoneSwitcher className="w-3 h-3 text-blue-600" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              Range Switchers
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-600">
              Changing the forecast for the timeseries data
            </time>
            <p className="text-base font-normal text-gray-500 w-2/3">
              Currently only able to see the forecast monthly, 3-monthly and
              6-monthly
            </p>
            <a href="https://gyazo.com/40001706d08be831fc70821b193c989f">
              <img
                className="w-3/4"
                src="https://i.gyazo.com/40001706d08be831fc70821b193c989f.gif"
                alt="Range Switchers"
                width="1600"
              />
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Tutorial;
