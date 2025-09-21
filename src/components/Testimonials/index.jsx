import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'https://esm.sh/react-slick';
import { FaStar, FaQuoteLeft } from 'https://esm.sh/react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Aarti Sharma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    feedback:
      "The collection is absolutely breathtaking. Each saree feels like a piece of art. The quality is premium, and the customer service made my experience seamless.",
  },
  {
    id: 2,
    name: "Neha Patel",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
    feedback:
      "Shreerang Saree has become my go-to for elegant wear. The designs are unique and the fabric feels luxurious. I received so many compliments!",
  },
  {
    id: 3,
    name: "Priya Desai",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    feedback:
      "Stunning embroidery and vibrant colors that look even better in person. The packaging was beautiful and delivery was prompt. Highly recommended.",
  },
  {
    id: 4,
    name: "Radhika Nair",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 4,
    feedback:
      "A beautiful range of sarees that are true to their pictures. The customer support team was very helpful in answering my queries. I'll definitely be back.",
  },
  {
    id: 5,
    name: "Sneha Kulkarni",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 5,
    feedback:
      "An amazing shopping experience from start to finish. The saree I bought is incredibly elegant and perfect for festive occasions. Worth every penny!",
  },
];

const App = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-50 via-white to-white overflow-hidden font-sans">
      <div className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
              Voices of Our Valued Customers
            </h2>
            <p className="text-base md:text-lg text-gray-500 mt-3 max-w-2xl mx-auto">
              Discover why our clients love our collection and the dedicated service we provide.
            </p>
          </div>

          {/* Slider */}
          <Slider {...settings}>
            {testimonials.map((t) => (
              <div key={t.id} className="px-4 py-8">
                <div className="testimonial-card flex flex-col h-full p-6 md:p-8 bg-white shadow-lg rounded-xl relative transition-all duration-500 transform-gpu opacity-90 scale-95 min-h-[350px]">
                  <FaQuoteLeft className="absolute top-6 left-6 text-5xl text-red-100 z-0" />
                  <div className="relative flex flex-col flex-grow z-10 h-full">
                    <div className="flex-grow">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white object-cover mb-4 shadow-md"
                      />
                      <p className="text-gray-600 text-sm md:text-base italic leading-relaxed mb-4">
                        {t.feedback}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-[#8e182f]">{t.name}</h3>
                        <div className="flex items-center gap-1 mt-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <FaStar
                              key={i}
                              className={`text-sm ${i < t.rating ? "text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* CTA Message */}
          <div className="mt-12 bg-[#8e182f]/10 border border-[#8e182f] rounded-xl p-6 text-center max-w-3xl mx-auto">
            <h3 className="text-lg md:text-xl font-semibold text-[#8e182f] mb-2">
              Want your testimony to be featured on our website?
            </h3>
            <p className="text-sm md:text-base text-[#4a1220] mb-4">
              We add each and every testimony weekly. Rate us and become a part of the Shreerang family!
            </p>
            <Link to="/user-testimony">
              <button className="px-6 py-2 bg-[#8e182f] text-white font-semibold rounded-full hover:bg-[#6b1023] transition-colors">
                Submit Your Review
              </button>
            </Link>
          </div>
        </div>

        {/* Custom Styling */}
        <style>{`
          @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css');
          @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css');

          .slick-track {
            display: flex !important;
            align-items: stretch;
          }

          .slick-slide {
            display: flex !important;
            height: auto !important;
          }

          .slick-slide > div {
            width: 100%;
          }

          .slick-center .testimonial-card {
            opacity: 1 !important;
            transform: scale(1.05);
            background-color: #fff;
            box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
                        0 8px 10px -6px rgb(0 0 0 / 0.1);
          }
        `}</style>
      </div>
    </div>
  );
};

export default App;
