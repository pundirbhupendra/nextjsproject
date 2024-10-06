"use client";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import TotalEarningCard from "./components/topbarCard";
import { LockClosedIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import Card from "./components/topCard";
import UpgradeCard from "./components/UpgradeCard";
import ResponsiveSidebar from "./components/ResponsiveSidebar";
import MeetingCard from "./components/meeting_card";
import BarChart from "./components/BarChart";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DashboardPage() {
  
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Sell (in K)",
        data: [20, 30, 40, 50, 45, 35, 25],
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
        display: false,
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
   <ResponsiveSidebar></ResponsiveSidebar>
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
          {/* <p className="text-gray-500">14th Aug 2023</p> */}
        </div>
        <div className="p-8">
  <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-5">
    {/* Main Grid for Cards */}
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

    {/* Right Side UpgradeCard */}
    <div className="flex justify-end">
      <UpgradeCard />
    </div>
  </div>
</div>

        {/* Regular Sell and More Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Regular Sell with Bar Chart */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Regular Sell</h3>
            {/* Bar chart */}
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <BarChart />
    </div>
            {/* <Bar data={data} options={options} /> */}
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

          <MeetingCard />
        </div>
      </main>

      {/* Profile and Notifications (Top-right Corner) */}
      <div className="absolute top-4 right-8 flex items-center space-x-4">
        <div className="relative">
          <img src="https://www.shareicon.net/data/128x128/2016/05/24/770137_man_512x512.png" alt="User profile" className="rounded-full w-10 h-10" />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-gray-800">Bhupendra</p>
          <p className="text-sm text-gray-500">Sales Manager</p>
        </div>
      </div>
    </div>
  );
}
