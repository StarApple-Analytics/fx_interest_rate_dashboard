import React from "react";
import { Bar } from "react-chartjs-2";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ChartCard = (props) => {
  const {
    fishes_verticalLengths,
    fishes_horizontalLengths,
    fishes_diagonalLengths,
    fishes_widths,
    fishes_heights,
  } = props;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const heightsLabels = fishes_heights?.map(({ species }) => species.toUpperCase());
  const widthsLabels = fishes_widths?.map(({ species }) =>
    species.toUpperCase()
  );
  const verticalLengthLabels = fishes_verticalLengths?.map(({ species }) =>
    species.toUpperCase()
  );
  const horizontalLengthLabels = fishes_horizontalLengths?.map(({ species }) =>
    species.toUpperCase()
  );
  const diagonalLengthLabels = fishes_diagonalLengths?.map(({ species }) =>
    species.toUpperCase()
  );

  const heightData = {
    labels: heightsLabels,
    datasets: [
      {
        label: "Species Average Height",
        data: fishes_heights.map(({ avg_height }) => avg_height),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Species Maximum Height",
        data: fishes_heights.map(({ max_height }) => max_height),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const widthData = {
    labels: widthsLabels,
    datasets: [
      {
        label: "Species Average Width",
        data: fishes_widths.map(({ avg_width }) => avg_width),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Species Maximum Width",
        data: fishes_widths.map(({ max_width }) => max_width),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const verticalLengthData = {
    labels: verticalLengthLabels,
    datasets: [
      {
        label: "Species Average Vertical Length",
        data: fishes_verticalLengths.map(
          ({ avg_vertical_length }) => avg_vertical_length
        ),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Species Maximum Vertical Length",
        data: fishes_verticalLengths.map(
          ({ max_vertical_length }) => max_vertical_length
        ),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const horizontalLengthData = {
    labels: horizontalLengthLabels,
    datasets: [
      {
        label: "Species Average Horizontal Length",
        data: fishes_horizontalLengths.map(
          ({ avg_horizontal_length }) => avg_horizontal_length
        ),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Species Maximum Horizontal Length",
        data: fishes_horizontalLengths.map(
          ({ max_horizontal_length }) => max_horizontal_length
        ),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const diagonalLengthData = {
    labels: diagonalLengthLabels,
    datasets: [
      {
        label: "Species Average Diagonal Length",
        data: fishes_diagonalLengths.map(
          ({ avg_diagonal_length }) => avg_diagonal_length
        ),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Species Maximum Diagonal Length",
        data: fishes_diagonalLengths.map(
          ({ max_diagonal_length }) => max_diagonal_length
        ),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="h-full w-full flex flex-col items-start justify-start gap-1 border-gray-100 border-2 rounded-md p-4 hover:shadow-lg transition-all ease-linear duration-100">
      <Tab.Group>
        <div className="flex flex-row gap-4 space-between w-full">
          <div className="font-semibold text-lg text-gray-900">
            Measurements
          </div>
          <Tab.List className="flex flex-row w-full">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full border-gray-300 text-sm leading-5 font-medium text-blue-900 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-600 ring-gray-400 ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-400 hover:bg-white/[0.12] hover:text-blue-900"
                )
              }
            >
              Height
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full border-gray-300 text-sm leading-5 font-medium text-blue-900 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-600 ring-gray-400 ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-400 hover:bg-white/[0.12] hover:text-blue-900"
                )
              }
            >
              Vertical
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full border-gray-300 text-sm leading-5 font-medium text-blue-900 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-600 ring-gray-400 ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-400 hover:bg-white/[0.12] hover:text-blue-900"
                )
              }
            >
              Horizontal
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full border-gray-300 text-sm leading-5 font-medium text-blue-900 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-600 ring-gray-400 ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-400 hover:bg-white/[0.12] hover:text-blue-900"
                )
              }
            >
              Diagonal
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full border-gray-300 text-sm leading-5 font-medium text-blue-900 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-600 ring-gray-400 ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-400 hover:bg-white/[0.12] hover:text-blue-900"
                )
              }
            >
              Width
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels className="w-full h-full flex justify-center items-center">
          <Tab.Panel className="w-full">
            <Bar
              width={"100%"}
              height={"50%"}
              data={heightData}
              options={options}
            />
          </Tab.Panel>
          <Tab.Panel className="w-full">
            <Bar
              width={"100%"}
              height={"50%"}
              data={verticalLengthData}
              options={options}
            />
          </Tab.Panel>
          <Tab.Panel className="w-full">
            <Bar
              width={"100%"}
              height={"50%"}
              data={horizontalLengthData}
              options={options}
            />
          </Tab.Panel>
          <Tab.Panel className="w-full">
            <Bar
              width={"100%"}
              height={"50%"}
              data={diagonalLengthData}
              options={options}
            />
          </Tab.Panel>
          <Tab.Panel className="w-full">
            <Bar
              width={"100%"}
              height={"50%"}
              data={widthData}
              options={options}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ChartCard;
