import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
    cutoutPercentage: 20,
    elements: {
      arc: {
        borderWidth: 1000,
      }
    },  
    cutout: '90%',
  radius: '80%',
    animation: {
        animateRotate: true,
        animateScale: true,
        // Modify the size of the animation round shape
        // radius: 1200,
      },
    plugins: {
      legend: {
        labels: {
          boxWidth: 5, // set the box width to a smaller value
        },
      },
    },
  };

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {

      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderRadius: [5, 5, 10, 5, 5, 5],

      borderWidth: 1,
    //   borderRadius: 10,
    // radius: [50, 60, 70, 80, 90, 100],

    },
  ],
};

export function DoughnutChart () {
  return <Doughnut data={data} options={options} />;
}
