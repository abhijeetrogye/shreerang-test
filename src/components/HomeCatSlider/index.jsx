import React from 'react';

const sareeCategories = [
  { name: "Paithani", img: "/saree-models/1.png", link: "/sarees/paithani" },
  { name: "Nauvari", img: "/saree-models/2.png", link: "/sarees/nauvari" },
  { name: "Banarasi", img: "/saree-models/3.png", link: "/sarees/banarasi" },
  { name: "Peshwai", img: "/saree-models/4.png", link: "/sarees/peshwai" },
  { name: "Kanjivaram", img: "/saree-models/5.png", link: "/sarees/kanjivaram" },
  { name: "Bandhani", img: "/saree-models/6.png", link: "/sarees/bandhani" },
  { name: "Silk", img: "/saree-models/7.png", link: "/sarees/silk" },
  { name: "Cotton", img: "/saree-models/8.png", link: "/sarees/cotton" },
];

const HomeCatSlider = () => {
  return (
    <section className="w-full text-center py-10 pt-4 border-b-[1px] border-t-[1px] border-black-250">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-bold text-[#8e182f] mb-6 ">
          Shreerang Collection
        </h2>

        {/* Categories */}
        <div 
          className="
            flex overflow-x-auto space-x-4 md:space-x-6 pb-4 scrollbar-hide
            lg:grid lg:grid-cols-8 lg:gap-6 lg:space-x-0 lg:overflow-visible
          "
        >
          {sareeCategories.map((cat, index) => (
            <a
              key={index}
              href={cat.link}
              onClick={(e) => e.preventDefault()} // Prevent navigation in preview
              className="flex flex-col items-center group flex-shrink-0 lg:flex-shrink"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white overflow-hidden border-2 border-gray-300 shadow-md 
                transform transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = 'https://placehold.co/100x100/ef4444/ffffff?text=Error'; 
                  }}
                />
              </div>
              <p className="mt-2 text-xs md:text-sm font-medium text-gray-700 text-center whitespace-nowrap">
                {cat.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCatSlider;
