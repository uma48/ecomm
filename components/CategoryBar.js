'use client';
import Link from 'next/link';
import { FaShoppingBag, FaHeadphones, FaPaintBrush, FaHome, FaCloudRain } from 'react-icons/fa';

export default function CategoryBar() {
  // Static category data
  const categories = [
    { id: '1', icon: <FaShoppingBag />, label: 'All' },
    { id: '2', icon: <FaHeadphones />, label: 'Electronics' },
    { id: '3', icon: <FaPaintBrush />, label: 'Beauty' },
    { id: '4', icon: <FaHome />, label: 'Decor' },
    { id: '5', icon: <FaCloudRain />, label: 'Monsoon' },
  ];

  return (
    <div className="bg-yellow-100 p-3 mt-3 flex overflow-x-auto space-x-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.id}`}
          className="flex flex-col items-center text-gray-700 hover:text-teal-500 transition-colors"
        >
          {category.icon}
          <span className="text-xs">{category.label}</span>
        </Link>
      ))}
    </div>
  );
}