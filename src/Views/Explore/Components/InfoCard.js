import React from "react";

const InfoCard = props => {

const {title, subtitle, value} = props;
  return (
    <div className="w-full flex flex-col items-start justify-center gap-1 border-gray-100 border-2 rounded-md p-4 hover:shadow-lg transition-all ease-linear duration-100">
          <div className="font-semibold text-lg text-gray-900">{ title}</div>
          <div className="text-sm font-thin text-gray-400">{subtitle}</div>
          <div className="text-4xl font-bold text-blue-700 mt-3">{value}</div>
    </div>
  );
};

export default InfoCard;
