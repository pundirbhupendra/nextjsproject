import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

// Register the necessary components in Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart: React.FC = () => {
  // Data for the chart
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Sales 1',
        data: [20, 30, 50, 25, 35, 20, 40],
        backgroundColor: '#C4B5FD', // Light purple color
      },
      {
        label: 'Sales 2',
        data: [25, 40, 30, 20, 25, 15, 35],
        backgroundColor: '#86EFAC', // Light green color
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hides the grid lines on the x-axis
        },
      },
      y: {
        ticks: {
        //  beginAtZero: true, // Starts the y-axis at zero
        },
        grid: {
          color: '#E5E7EB', // Light gray color for y-axis grid lines
        },
      },
    },
  };

  return (
    <div className="max-w-lg bg-white rounded-xl shadow-lg p-6 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Regular Sell</h2>
        <button className="bg-lime-200 text-black font-medium py-1 px-3 rounded-md hover:bg-lime-300 transition duration-300">
          Export
        </button>
      </div>

      {/* Chart */}
      <div className="h-60">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;

