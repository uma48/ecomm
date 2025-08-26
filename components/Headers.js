'use client';
import { FaWallet, FaUser } from 'react-icons/fa';

export default function Headers() {
  const deliveryTime = '9 minutes';
  const location = 'Shastri Nagar, Nayapalli';

  return (
    <div className="bg-yellow-100 p-2 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-lg font-bold text-teal-500">Blinkit in {deliveryTime}</h1>
        <span className="text-teal-500 ml-2 text-sm">Know more</span>
      </div>
      <div className="flex items-center space-x-4">
        <FaWallet className="text-gray-700" />
        <FaUser className="text-gray-700" />
      </div>
      <div className="text-sm text-gray-700">{location} ▼</div>
    </div>
  );
}