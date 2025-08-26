'use client';
import Link from 'next/link';
import { FaShoppingBag, FaHeadphones, FaPaintBrush, FaHome, FaCloudRain } from 'react-icons/fa';

export default function CategoryBar() {
  const categories = [
    { id: '1', icon: <FaShoppingBag />, label: 'All' },
    { id: '2', icon: <FaHeadphones />, label: 'Electronics' },
    { id: '3', icon: <FaPaintBrush />, label: 'Beauty' },
    { id: '4', icon: <FaHome />, label: 'Decor' },
    { id: '5', icon: <FaCloudRain />, label: 'Monsoon' },
  ];

  return (
    <div className="bg-white px-3 py-2 mt-3 overflow-x-auto">
      <div className="flex space-x-6 min-w-max items-center h-23">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="flex flex-col items-center text-gray-700 hover:text-teal-500 transition-colors w-16 justify-center"
          >
            <div className="text-2xl leading-none">{category.icon}</div>
            <span className="text-xs mt-1 text-center">{category.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
