import React from 'react';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip, Legend} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip, Legend);

const Chart = ({coinHistory}) => {
  
  const chartLables = coinHistory?.data?.history?.map((history) => new Date(history?.timestamp * 1000).toLocaleDateString()).reverse();
  const chartValues = coinHistory?.data?.history?.map((history) => history?.price).reverse();

  const options = {
    responsive : true,
    maintainAspectRatio: false,
    plugins : {
      legend: {
        display: true,
        labels: {
          color: "#fff6",
          marginRight: "1.5rem",
          font: {
            family: ['IBM Plex Mono','monospace'] // Add your font here to change the font of your legend label
          }
        },
        tooltip: {
          bodyFont: {
            family: ['IBM Plex Mono','monospace'] // Add your font here to change the font of your tooltip body
          },
          titleFont: {
            family: ['IBM Plex Mono','monospace'] // Add your font here to change the font of your tooltip title
          },
          marginRight: "1.5rem",
        }
      },
      tooltips: {
        marginRight : "1.5rem"
      },

    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const data = {
    labels : chartLables,
    datasets : [
      {
        label : "Price in USD",
        data : chartValues,
        fill : false,
        backgroundColor: '#1f4287',
        borderColor: '#1f4287',
      }
    ]

  }

  return (
    <>
      <Line color='#fff' options={options} data={data} />
    </>
  )
}

export default Chart;