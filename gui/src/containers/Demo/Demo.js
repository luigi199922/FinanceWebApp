import React, { useEffect } from "react";
import Chart from "chart.js";

const Demo = () => {
  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
          {
            lineTension: 0,
            fill: false,
            label: "AAPL",
            data: [12, -10, -10, -10, -10, -10, -10],
            backgroundColor: ["red"],
            borderColor: ["red"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "AAPL PUT",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMin: -12,
                suggestedMax: 15,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                stepSize: 1,
              },
            },
          ],
        },
      },
    });
  });
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

export default Demo;
