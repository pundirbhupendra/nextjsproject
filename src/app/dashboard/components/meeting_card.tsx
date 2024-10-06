import React from 'react';
import { VideoCameraIcon } from '@heroicons/react/24/outline';

const MeetingCard: React.FC = () => {
    return (
      <div className="max-w-sm w-full bg-white rounded-xl shadow-lg p-6 space-y-4 sm:max-w-md md:max-w-lg lg:max-w-md">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <div className="bg-purple-100 p-2 rounded-full">
            <VideoCameraIcon className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold sm:text-xl">Daily Meeting</h3>
            <div className="flex items-center space-x-2">
              <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                12+ Person
              </span>
              <span className="text-xs sm:text-sm text-gray-500">8:30 PM</span>
            </div>
          </div>
        </div>
  
        {/* Participants */}
        <div className="flex items-center space-x-4">
          {/* Avatars */}
          <div className="flex -space-x-2">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Person 1"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Person 2"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="Person 3"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          </div>
          <p className="text-xs sm:text-sm text-gray-600">
            They will conduct the meeting
          </p>
        </div>
  
        {/* Button */}
        <div>
          <button className="bg-black text-white font-medium py-2 px-4 rounded-md w-full hover:bg-gray-800 transition duration-300">
            Click for meeting link
          </button>
        </div>
      </div>
    );
  };
  
  export default MeetingCard;