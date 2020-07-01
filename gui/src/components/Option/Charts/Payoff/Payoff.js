import React, { useEffect } from "react";
import Chart from "chart.js";

const Payoff = ({ title, ticker, data, labels }) => {
  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            lineTension: 0,
            fill: false,
            label: ticker,
            data: data,
            backgroundColor: ["red"],
            borderColor: ["red"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: title,
        },
        scales: {
          //   yAxes: [
          //     {
          //       ticks: {
          //         suggestedMin: -12,
          //         suggestedMax: 15,
          //       },
          //     },
          //   ],
          // xAxes: [
          //   {
          //     ticks: {
          //       suggestedMin: 0,
          //       suggestedMax: 400,
          //       stepSize: 1,
          //     },
          //   },
          // ],
        },
      },
    });
  }, [data, labels, ticker, title]);
  return (
    <div
      style={{
        margin: "auto",
        width: "600px",
      }}
    >
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
};

export default Payoff;
