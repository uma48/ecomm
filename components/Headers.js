'use client';
import { FaWallet, FaUser, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Headers() {
  const deliveryTime = '9 minutes';
  const location = 'Shastri Nagar, Nayapalli';

  return (
    <div className="bg-yellow-100 p-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section - Delivery Info */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
            <FaClock className="text-white text-sm" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-teal-600">QuickMart in {deliveryTime}</h1>
            <button className="text-sm text-teal-600 hover:underline">Know more</button>
          </div>
        </div>

        {/* Center Section - Action Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 bg-white rounded hover:bg-gray-100">
            <FaWallet className="text-gray-700 text-lg" />
          </button>
          <button className="p-2 bg-white rounded hover:bg-gray-100">
            <FaUser className="text-gray-700 text-lg" />
          </button>
        </div>

        {/* Right Section - Location */}
        <button className="flex items-center space-x-2 px-3 py-1 bg-white rounded hover:bg-gray-100">
          <FaMapMarkerAlt className="text-teal-600 text-lg" />
          <span className="text-sm text-gray-700">{location}</span>
        </button>
      </div>
    </div>
  );
}