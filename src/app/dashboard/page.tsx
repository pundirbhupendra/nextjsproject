"use client";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import TotalEarningCard from "./components/topbarCard";
import { LockClosedIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'; // Correct import
import Card from "./components/topCard";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DashboardPage() {
  // Data for Regular Sell Chart
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Sell (in K)",
        data: [20, 30, 40, 50, 45, 35, 25], // Example data
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Niond</h1>
        <nav className="space-y-4">
          <ul>
            <li className="text-lg font-medium text-gray-700 py-2 hover:bg-green-300 rounded-md">Dashboard</li>
            <li className="text-lg font-medium text-gray-700 py-2 hover:bg-green-300 rounded-md">Statistics</li>
            <li className="text-lg font-medium text-gray-700 py-2 hover:bg-green-300 rounded-md">Transaction</li>
            <li className="text-lg font-medium text-gray-700 py-2 hover:bg-green-300 rounded-md">My Team</li>
            <li className="text-lg font-medium text-gray-700 py-2 hover:bg-green-300 rounded-md">Sell Reports</li>
            <li className="text-lg font-medium text-gray-700 py-2 hover:bg-green-300 rounded-md">Settings</li>
          </ul>
        </nav>
        {/* Profile */}
        <div className="mt-8">
          <div className="flex items-center space-x-4">
            <img src="https://via.placeholder.com/40" alt="User profile" className="rounded-full w-10 h-10" />
            <div>
              <p className="text-lg font-semibold">Nora Watson</p>
              <p className="text-sm text-gray-600">Sales Manager</p>
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <button className="text-red-500 font-medium text-lg mt-8">Log Out</button>
        </div>
      </aside>
      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className="text-gray-500">14th Aug 2023</p>
        </div>
     <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <Card
        title="Total Earning"
        value="242.65K"
        subtitle="From the running month"
       icon={LockClosedIcon} 
        bgColor="bg-purple-100" 
      />
      <Card
        title="Average Earning"
        value="17.347K"
        subtitle="Daily Earnings of this month"
       icon={ChartBarIcon} 
        bgColor="bg-blue-100"
      />
      <Card
        title="Conversation Rate"
        value="74.86%"
        subtitle="+6.04% greater than last month"
        icon={CurrencyDollarIcon} 
        bgColor="bg-green-100" 
      />
   </div>
    </div>
        {/* Regular Sell and More Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Regular Sell with Bar Chart */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Regular Sell</h3>
            {/* Bar chart */}
            <Bar data={data} options={options} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800">More Analysis</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-md font-medium text-gray-600">Store Sell Ratio</li>
              <li className="text-md font-medium text-gray-600">Top Item Sold</li>
            </ul>
          </div>
        </div>

        {/* Bottom Cards: Team Member, Upgrade to Pro, Daily Meeting */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800">Team Member</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-md font-medium text-gray-600">Mahid Ahmed (Project Manager)</li>
              <li className="text-md font-medium text-gray-600">Daniel Karl (HR Head)</li>
              <li className="text-md font-medium text-gray-600">Elena Michel (Coordinator)</li>
              <li className="text-md font-medium text-gray-600">Salina Mitso (Coordinator)</li>
            </ul>
            <button className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded-md">
              Add more member
            </button>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800">Upgrade to Pro</h3>
            <p className="mt-4 text-lg">Get access to exclusive features</p>
            <p className="text-2xl font-bold mt-2">$4.20/month</p>
            <p className="text-sm text-gray-600">Billed annually</p>
            <button className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded-md">
              Upgrade Now
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800">Daily Meeting</h3>
            <p className="mt-4 text-lg">12 Person - 8:30 PM</p>
            <p className="text-sm text-gray-600">They will conduct the meeting</p>
            <button className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded-md">
              Click for meeting link
            </button>
          </div>
        </div>
      </main>

      {/* Profile and Notifications (Top-right Corner) */}
      <div className="absolute top-6 right-8 flex items-center space-x-4">
        <div className="relative">
          <img src="https://via.placeholder.com/40" alt="User profile" className="rounded-full w-10 h-10" />
        </div>
        <div>
          <p className="font-semibold text-gray-800">Nora Watson</p>
          <p className="text-sm text-gray-500">Sales Manager</p>
        </div>
      </div>
    </div>
  );
}
