
import React from "react";
import Chartist from "react-chartist";
import ChartistTooltip from 'chartist-plugin-tooltips-updated';
import Chart from 'chart.js'

export const AUMChart = () => {
  var income = document.getElementById("income").getContext("2d");
  new Chart(income).Bar(barData);

  var barData = {
    labels : ["January","February","March","April","May","June"],
    datasets : [
      {
        fillColor : "#48A497",
        strokeColor : "#48A4D1",
        data : [456,479,324,569,702,600]
      },
      {
        fillColor : "rgba(73,188,170,0.4)",
        strokeColor : "rgba(72,174,209,0.4)",
        data : [364,504,605,400,345,320]
      }
  
    ]
  }

  return (
    <canvas id="income" width="600" height="400"></canvas>
  );
};

export const AUMChartphone = () => {
  const data = {
    labels: ['Zone', 'Branch', 'General'],
    datasets: [
      {
        label: 'zone',
        data: [1, 2, 3],
        borderColor: '#36A2EB',
        backgroundColor: '#9BD0F5',
      },
      {
        label: 'Branch',
        data: [2, 3, 4],
        borderColor: '#FF6384',
        backgroundColor: '#FFB1C1',
      }
    ]
  };

  const options = {
    low: 0,
    showArea: true,
    fullWidth: false,
    axisX: {
      position: 'end',
      showGrid: true
    },
    axisY: {
      // On the y-axis start means left and end means right
      showGrid: false,
      showLabel: false,
      labelInterpolationFnc: value => `$${value / 1}k`
    }
  };

  const plugins = [
    ChartistTooltip()
  ]

  return (
    <Chartist data={data} options={{...options, plugins}} type="Line" className="ct-series-g ct-major-tenth" />
  );
};

export const CircleChart = (props) => {
  const { series = [], donutWidth = 20 } = props;
  const sum = (a, b) => a + b;

  const options = {
    low: 0,
    high: 8,
    donutWidth,
    donut: true,
    donutSolid: true,
    fullWidth: false,
    showLabel: false,
    labelInterpolationFnc: value => `${Math.round(value / series.reduce(sum) * 100)}%`,
  }

  const plugins = [
    ChartistTooltip()
  ]

  return (
    <Chartist data={{ series }} options={{...options, plugins}} type="Pie" className="ct-golden-section" />
  );
};

export const BarChart = (props) => {
  const { labels = [], series = [], chartClassName = "ct-golden-section" } = props;
  const data = { labels, series };

  const options = {
    low: 0,
    showArea: true,
    axisX: {
      position: 'end'
    },
    axisY: {
      showGrid: false,
      showLabel: false,
      offset: 0
    }
  };

  const plugins = [
    ChartistTooltip()
  ]

  return (
    <Chartist data={data} options={{...options, plugins}} type="Bar" className={chartClassName} />
  );
};
