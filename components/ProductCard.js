'use client';
import Link from 'next/link';

export default function ProductCard() {
  // Static product data
  const product = {
    _id: '1', // Static ID for testing
    name: 'Sample Product',
    price: 29.99,
  };

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
      <Link href={`/products/${product._id}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          View Details
        </button>
      </Link>
    </div>
  );
}