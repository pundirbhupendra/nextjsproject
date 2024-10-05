export default function TotalEarningCard() {
    return (
      <div className="bg-purple-100 rounded-xl p-6 shadow-md w-full max-w-sm">
        <div className="flex items-center space-x-2">
          {/* Icon */}
          <div className="text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0V10.5m9 0h-9m12 0a2.25 2.25 0 01-2.25 2.25h-.75m-12 0A2.25 2.25 0 015.25 10.5m12 0v8.25a2.25 2.25 0 01-2.25 2.25h-7.5A2.25 2.25 0 015.25 18.75V10.5m12 0h-12"
              />
            </svg>
          </div>
  
          {/* Title */}
          <p className="text-gray-700 font-medium text-sm">Total Earning</p>
        </div>
  
        {/* Main content */}
        <div className="mt-4">
          <p className="text-4xl font-bold text-gray-900">242.65K</p>
          <p className="text-sm text-gray-500">From the running month</p>
        </div>
      </div>
    );
  }
  