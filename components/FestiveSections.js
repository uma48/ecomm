'use client';
import Image from 'next/image';

export default function FestiveSections() {
  // Enhanced category data with better structure
  const sections = [
    { 
      id: '1', 
      title: 'Idols & Pooja Needs', 
      image: '/festive-category/paan-corner_web.avif',
      description: 'Sacred essentials for worship'
    },
    { 
      id: '2', 
      title: 'Festive Get-Togethers', 
      image: '/festive-category/Slice-2_10.avif',
      description: 'Celebrate with loved ones'
    },
    { 
      id: '3', 
      title: 'Home Decor', 
      image: '/festive-category/Slice-3_9.avif',
      description: 'Transform your living space'
    },
    { 
      id: '4', 
      title: 'Modak & Indian Sweets', 
      image: '/festive-category/Slice-4_9.avif',
      description: 'Traditional festive treats'
    },
    { 
      id: '5', 
      title: 'Festive Ready', 
      image: '/festive-category/Slice-5_4.avif',
      description: 'Everything you need to celebrate'
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50"></div>
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_120%,rgba(251,191,36,0.3),transparent_50%)]"></div>
      
      <div className="relative px-4 py-8 sm:px-6 lg:px-8">
        {/* Enhanced header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2">
            Festive Categories
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Discover everything you need to make your celebrations memorable and meaningful
          </p>
        </div>

        {/* Enhanced grid with improved cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-orange-200">
                {/* Image container with overlay */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={300}
                    height={225}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    priority={index < 3}
                  />
                  {/* Floating accent */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
                    {section.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                    {section.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="h-1 bg-gradient-to-r from-orange-400 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-8 right-8 w-32 h-32 bg-gradient-to-r from-red-300 to-pink-300 rounded-full opacity-20 blur-xl"></div>
        
        {/* Optional CTA section */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            <span>Explore All Categories</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}