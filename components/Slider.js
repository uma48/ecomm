'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Slider() {
  // Static image data (paths relative to public folder)
  const images = [
    '/banner1.webp',
    '/banner2.webp',
    '/banner3.webp',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden bg-yellow-200">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="relative w-full h-40 sm:h-52 md:h-64"> {/* Responsive heights */}
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-teal-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}