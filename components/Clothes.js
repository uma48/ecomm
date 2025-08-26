'use client';
import Link from 'next/link';

export default function Clothes() {
  const clothesItems = [
    { id: 1, name: 'T-Shirt', price: '$19.99' },
    { id: 2, name: 'Jeans', price: '$49.99' },
    { id: 3, name: 'Jacket', price: '$89.99' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gold-700 mb-6">Clothes Section</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clothesItems.map((item) => (
          <Link href={`/product/${item.id}`} key={item.id} className="block p-4 bg-gold-900/10 rounded-xl shadow-lg hover:bg-gold-900/20 transition-colors duration-200">
            <h3 className="text-xl font-semibold text-teal-500">{item.name}</h3>
            <p className="text-gold-500 mt-2">{item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}