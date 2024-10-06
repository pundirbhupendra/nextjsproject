import { useState } from 'react';

export default function ResponsiveSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 lg:w-1/5 bg-white shadow-lg p-6 transition-transform duration-300 ease-in-out lg:translate-x-0 z-50`}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Niond</h1>
        <nav className="space-y-4">
          <ul>
            <li className="text-lg font-medium text-gray-700 py-2 hover:bg-green-300 rounded-md">
              Dashboard
            </li>
            <li className="text-lg font-medium text-gray-700 py-2 hover:bg-green-300 rounded-md">
              Statistics
            </li>
            <li className="text-lg font-medium text-gray-700 py-2 hover:bg-green-300 rounded-md">
              Transaction
            </li>
            <li className="text-lg font-medium text-gray-700 py-2 hover:bg-green-300 rounded-md">
              My Team
            </li>
            <li className="text-lg font-medium text-gray-700 py-2 hover:bg-green-300 rounded-md">
              Sell Reports
            </li>
            <li className="text-lg font-medium text-gray-700 py-2 hover:bg-green-300 rounded-md">
              Settings
            </li>
          </ul>
        </nav>

        {/* Profile Section */}
        <div className="mt-8">
          <div className="flex items-center space-x-4">
            <img
              src="https://www.shareicon.net/data/128x128/2016/05/24/770137_man_512x512.png"
              alt="User profile"
              className="rounded-full w-10 h-10"
            />
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

      {/* Content Area */}
      <div className="flex-1 flex flex-col lg:ml-1/5 p-6">
        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden mb-4 text-white bg-blue-600 p-2 rounded-md"
        >
          {isOpen ? 'Close Menu' : 'Open Menu'}
        </button>

        {/* Main content */}
        <div>
          <h2 className="text-2xl font-bold">Main Content Area</h2>
          <p>Your main content goes here...</p>
        </div>
      </div>
    </div>
  );
}
