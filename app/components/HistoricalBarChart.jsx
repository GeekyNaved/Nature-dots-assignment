import React from "react";
import {Line} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const HistoricalBarChart = (props) => {
  const sortedData = props.data.sort(
    (a, b) =>
      new Date(a.period.datetimeFrom.local) -
      new Date(b.period.datetimeFrom.local)
  );

  const labels = sortedData.map((item) =>
    new Date(item.period.datetimeFrom.local).toLocaleDateString("en-GB")
  );

  const dataValues = sortedData.map((item) => item.value);

  const data = {
    labels,
    datasets: [
      {
        label: "Value",
        data: dataValues,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {position: "top"},
      title: {display: true, text: "Values over Days"},
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default HistoricalBarChart;
