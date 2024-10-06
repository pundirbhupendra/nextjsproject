
import React from 'react';

const UpgradeCard: React.FC = () => {
  return (
    <div className="max-w-xs bg-green-400 rounded-lg p-6 shadow-lg flex flex-col items-center">
      <h2 className="text-xl font-bold mb-2">Upgrade to Pro</h2>
      <p className="text-3xl font-semibold mb-1">$4.20</p>
      <span className="text-sm text-gray-600">/ Month</span>
      <p className="text-sm text-gray-600 mt-1">$50 Billed Annually</p>
      <button className="mt-6 bg-green-400 text-white font-semibold py-2 px-4 rounded hover:bg-lime-500 transition duration-300">
        Upgrade Now
      </button>
    </div>
  );
};

export default UpgradeCard;
