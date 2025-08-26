'use client';
import Image from 'next/image';

export default function FestiveSections() {
  // Static category data with image paths relative to public folder
  const sections = [
    { id: '1', title: 'Idols & Pooja Needs', image: '/festive-category/paan-corner_web.avif' },
    { id: '2', title: 'Festive Get-Togethers', image: '/festive-category/Slice-2_10.avif' },
    { id: '3', title: 'Home Decor', image: '/festive-category/Slice-3_9.avif' },
    { id: '4', title: 'Modak & Indian Sweets', image: '/festive-category/Slice-4_9.avif' },
    { id: '5', title: 'Festive Ready', image: '/festive-category/Slice-5_4.avif' },
  ];

  return (
    <div className="bg-yellow-200 p-4">
      <h2 className="text-lg font-bold text-orange-500 mb-4">Festive Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {sections.map((section) => (
          <div key={section.id} className="text-center">
            <div className="w-full aspect-[4/3] relative mb-2 overflow-hidden rounded-lg shadow-md">
              <Image
                src={section.image}
                alt={section.title}
                width={200} // Fixed width, adjust based on your image size
                height={150} // Fixed height for 4:3 aspect ratio
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-sm font-medium text-gray-700 line-clamp-2">{section.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}