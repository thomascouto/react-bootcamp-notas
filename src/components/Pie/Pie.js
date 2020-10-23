import React from "react";
import { Chart } from "react-google-charts";

export default function Pie({ ratings }) {
  function generatePie(ratings) {
    let pie = ratings.map(({ nome, grade }) => {
      return [nome, parseInt(grade)];
    });

    pie.unshift(["", ""]);
    return pie;
  }

  return (
    <div>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Carregando...</div>}
        data={generatePie(ratings)}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}
