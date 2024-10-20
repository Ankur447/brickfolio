import React from 'react';

const HeadingSection = () => {
  return (
    <div className="bg-[#F4F4F4] py-3 px-4 sm:py-4 sm: md:px-12">
      {/* Breadcrumb Navigation */}
      <nav className="mb-2 sm:mb-3" aria-label="Breadcrumb">
        <ul className="flex items-center text-xs sm:text-sm text-gray-600 min-w-min">
          <li className="flex-shrink-0">
            <a 
              href="/" 
              className="hover:text-orange-500 transition duration-200"
            >
              Home
            </a>
          </li>
          <li className="flex-shrink-0 mx-2">&gt;</li>
          <li className="flex-shrink-0">
            <a 
              href="/properties-in-pune" 
              className="hover:text-orange-500 transition duration-200"
            >
              Property in Pune
            </a>
          </li>
          <li className="flex-shrink-0 mx-2">&gt;</li>
          <li className="flex-shrink-0">
            <span className="text-gray-800 font-semibold">
              Flats in Pune
            </span>
          </li>
        </ul>
      </nav>
      {/* Main Heading */}
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 ">
          Flats For Sale In Kharadi, Viman Nagar, Pune
        </h1>
    </div>
  );
};

export default HeadingSection;