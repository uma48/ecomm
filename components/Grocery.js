'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Grocery() {
  const groceryItems = [
    { id: 1, name: 'Freedom Oil', price: '$2.99', originalPrice: '$3.49', rating: 4.5, image: '/grocery/freedom.webp' },
    { id: 2, name: 'Bingo Mad Angles', price: '$3.49', originalPrice: '$3.99', rating: 4.2, image: '/grocery/mad.webp' },
    { id: 3, name: 'Surf Excel', price: '$2.19', originalPrice: '$2.59', rating: 4.0, image: '/grocery/surf.webp' },
  ];

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-teal-700 mb-6">Grocery Section</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groceryItems.map((item) => (
          <Link href={`/product/${item.id}`} key={item.id} className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="relative w-full h-48">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-teal-700 text-center mb-2">{item.name}</h3>
              <div className="flex justify-center items-center mb-2">
                {renderStars(item.rating)}
                <span className="ml-2 text-sm text-gray-600">{item.rating}/5</span>
              </div>
              <div className="text-center mb-4">
                <span className="text-xl font-bold text-gold-500">{item.price}</span>
                <span className="ml-2 text-sm text-gray-500 line-through">{item.originalPrice}</span>
              </div>
              <button className="w-full py-2 bg-gradient-to-r from-teal-500 to-gold-500 text-white rounded-lg hover:from-teal-600 hover:to-gold-600 transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}