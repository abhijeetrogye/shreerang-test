import React, { useState, useEffect } from 'react';

const images = [
  {
    id: 1,
    src: '/banner/1.jpg',
    alt: 'Red abstract background',
    link: '/', // example link
  },
  {
    id: 2,
    src: 'https://i.pinimg.com/1200x/8d/0f/1e/8d0f1e246bc9abbf957eab534f8b78d5.jpg',
    alt: 'Blue abstract background',
    link: '/',
  },
  {
    id: 3,
    src: 'https://i.pinimg.com/1200x/85/a6/7f/85a67f4dbdcb2483e10c3bd295accedd.jpg',
    alt: 'Green abstract background',
    link: '/',
  },
  {
    id: 4,
    src: 'https://i.pinimg.com/1200x/48/7c/74/487c744e4ad70559edf90ecafeb3fde9.jpg',
    alt: 'Yellow abstract background',
    link: '/',
  },
  {
    id: 5,
    src: 'https://i.pinimg.com/1200x/4f/e6/9b/4fe69bf76f5c15d82f74a7125d280edb.jpg',
    alt: 'Purple abstract background',
    link: '/',
  },
];


// --- SVG ICON COMPONENTS ---
const ChevronLeftIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// --- MAIN SLIDER COMPONENT ---
function HomeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval); // cleanup
  }, []);

  // Style for each slide
  const getSlideStyle = (index) => {
    const total = images.length;
    const offset = index - currentIndex;

    let transform, zIndex, opacity;

    if (offset === 0) {
      transform = 'translateX(0) scale(1)';
      zIndex = 30;
      opacity = 1;
    } else if (offset === 1 || offset === -(total - 1)) {
      transform = 'translateX(50%) scale(0.8)';
      zIndex = 20;
      opacity = 0.7;
    } else if (offset === -1 || offset === total - 1) {
      transform = 'translateX(-50%) scale(0.8)';
      zIndex = 20;
      opacity = 0.7;
    } else {
      const direction = offset > 0 ? 1 : -1;
      transform = `translateX(${direction * 100}%) scale(0.6)`;
      zIndex = 10;
      opacity = 0;
    }

    return {
      transform,
      zIndex,
      opacity,
      transition: 'all 0.5s ease-out',
    };
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* --- DIMENSION CHANGE APPLIED HERE --- */}
      {/* Increased `max-w-` from 3xl to 5xl to make it wider. */}
      {/* Decreased the height values for all screen sizes (e.g., h-[250px] to h-[200px]). */}
      <div className="relative w-full max-w-5xl h-[150px] sm:h-[250px] md:h-[350px]">
        {/* Slides */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="absolute w-full h-full flex items-center justify-center"
              style={getSlideStyle(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-xl shadow-inner"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://placehold.co/1200x800/ef4444/ffffff?text=Error';
                }}
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-0 sm:-left-10 md:-left-16 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 sm:-right-10 md:-right-16 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default HomeSlider;
