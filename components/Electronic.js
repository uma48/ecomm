'use client';
import Link from 'next/link';

export default function Electronics() {
  const electronicsItems = [
    { id: 1, name: 'Smartphone', price: '$299.99' },
    { id: 2, name: 'Headphones', price: '$79.99' },
    { id: 3, name: 'Laptop Charger', price: '$49.99' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Electronics Section</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {electronicsItems.map((item) => (
          <Link href={`/product/${item.id}`} key={item.id} className="block p-4 bg-blue-900/10 rounded-xl shadow-lg hover:bg-blue-900/20 transition-colors duration-200">
            <h3 className="text-xl font-semibold text-teal-500">{item.name}</h3>
            <p className="text-gold-500 mt-2">{item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}