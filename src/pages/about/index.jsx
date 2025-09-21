import React, { useEffect } from 'react';

// --- Reusable Component for Animated Sections ---
// This now uses only CSS for the animation, triggered by the useEffect hook.
const AnimatedSection = ({ children }) => {
  return <div className="fade-in">{children}</div>;
};

// --- Reusable SVG Icons (replacing lucide-react) ---
const GemIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M12 22V9"/><path d="m3.5 8.5 17 0"/></svg>
);
const PaletteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><path d="M22 10.5c0 .5-.5 1-1 1-.5 0-1-.5-1-1 0-.5.5-1 1-1 .5 0 1 .5 1 1z"/><path d="M20.56 14.44a10 10 0 0 0-10-10C5.56 4.44.5 9.5 0 14.5c-.5 5.5 4.06 10 9.44 10 5.5 0 10-4.5 10-10 .06-.5-.44-1-.94-1z"/></svg>
);
const ShoppingCartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.16"/></svg>
);
const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);


// --- Reusable SVG Component for Decorative Dividers ---
const DecorativeDivider = () => (
    <div className="flex items-center justify-center my-12 md:my-16">
        <div className="h-px flex-1 bg-gradient-to-l from-amber-400 to-transparent"></div>
        <div className="text-amber-500"><GemIcon /></div>
        <div className="h-px flex-1 bg-gradient-to-r from-amber-400 to-transparent"></div>
    </div>
);


// --- Main About Us Component ---
const AboutUs = () => {

  // Effect to add scroll-based animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      {/* Google Fonts & Custom CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        
        .ken-burns {
          animation: kenburns 20s ease-out infinite;
        }
        @keyframes kenburns {
          0% { transform: scale(1.05) translate(0, 0); }
          50% { transform: scale(1.15) translate(-2%, 2%); }
          100% { transform: scale(1.05) translate(0, 0); }
        }

        .fade-in {
          opacity: 0;
          transform: translateY(30px) scale(0.98);
          transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .fade-in-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .text-gradient-animated {
          background: linear-gradient(45deg, #8D152F, #D4AF37, #8D152F);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          animation: backgroundPan 8s linear infinite;
        }
        @keyframes backgroundPan {
          from { background-position: 200% center; }
          to { background-position: 0% center; }
        }
      `}</style>
      
      <div className="bg-gradient-to-b from-[#FDFBF8] to-[#FFF8F5] font-sans text-slate-800">
        
        {/* --- Hero Section --- */}
        <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat ken-burns"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/p/AF1QipPQQOo3iJppY4a-nvyqkvZkPIMp6VaEvOh4pANa=s680-w680-h510')" }}
            ></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
          <div className="relative z-10 p-6">
            <h1 className="text-5xl md:text-7xl font-serif mb-4 tracking-wider" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.6)'}}>
              A Tapestry of Tradition
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto font-light text-slate-200">
              Embrace elegance with vibrant designs and premium quality, celebrating heritage and beauty in every graceful drape.
            </p>
          </div>
        </div>

        <div className="py-20 md:py-28 px-4">
          
          {/* --- Owner Section --- */}
          <AnimatedSection>
            <section className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-2">
                  <div className="relative p-2 bg-white rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105">
                      <img
                        src="sanjay.png"
                        alt="Mr. Sanjay Rogye, Owner of Shreerang Saree"
                        className="rounded-md object-cover w-full h-full"
                      />
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <h2 className="text-4xl md:text-5xl font-serif text-gradient-animated mb-4">A Visionary's Passion</h2>
                  <h3 className="text-2xl font-semibold text-slate-700 mb-6">Meet the Founder: Mr. Sanjay Rogye</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Mr. Sanjay Rogye, the proud owner of Shreerang Saree, is dedicated to bringing the timeless elegance of traditional sarees to the modern world.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    With a deep-rooted passion for preserving India's rich cultural heritage, he meticulously curates the finest handcrafted sarees. His commitment ensures that every piece is not just a garment, but a masterpiece of exceptional quality and enduring craftsmanship.
                  </p>
                </div>
              </div>
            </section>
          </AnimatedSection>
          
          <AnimatedSection><DecorativeDivider /></AnimatedSection>

          {/* --- What We Offer Section --- */}
          <AnimatedSection>
            <section className="container mx-auto text-center mt-20 md:mt-28">
                <h2 className="text-4xl md:text-5xl font-serif text-gradient-animated mb-16">Our Promise of Excellence</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center">
                        <div className="p-4 bg-rose-100 rounded-full mb-4 text-[#8D152F]">
                            <PaletteIcon />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Exquisite Designs</h3>
                        <p className="text-slate-600">A curated collection blending timeless tradition with contemporary elegance.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="p-4 bg-amber-100 rounded-full mb-4 text-amber-600">
                           <GemIcon />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Unmatched Quality</h3>
                        <p className="text-slate-600">Only the finest fabrics and most intricate craftsmanship in every saree.</p>
                    </div>
                    <div className="flex flex-col items-center">
                         <div className="p-4 bg-sky-100 rounded-full mb-4 text-sky-600">
                           <ShoppingCartIcon />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
                        <p className="text-slate-600">An unforgettable shopping experience with our dedicated and knowledgeable team.</p>
                    </div>
                </div>
            </section>
          </AnimatedSection>

          <AnimatedSection><DecorativeDivider /></AnimatedSection>

          {/* --- Shop Gallery Section --- */}
          <AnimatedSection>
            <section className="container mx-auto text-center mt-20 md:mt-28">
                <h2 className="text-4xl md:text-5xl font-serif text-gradient-animated mb-16">A Glimpse of Shreerang</h2>
                <div className="grid grid-cols-1 sm:grid-cols-5 sm:grid-rows-2 gap-4">
                    <div className="sm:col-span-3 sm:row-span-2 rounded-lg overflow-hidden group">
                        <img src="https://shreerangsaree.netlify.app/images/shop.jpeg?text=Rich+Saree+Collection" alt="A wide collection of vibrant sarees on display" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    </div>
                    <div className="h-48 sm:h-auto sm:col-span-2 rounded-lg overflow-hidden group">
                         <img src="https://shreerangsaree.netlify.app/images/shop.jpeg?text=Store+Interior" alt="The elegant interior of the Shreerang Saree store" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    </div>
                    <div className="h-48 sm:h-auto sm:col-span-2 rounded-lg overflow-hidden group">
                        <img src="https://shreerangsaree.netlify.app/images/shop.jpeg?text=Happy+Customer+Interaction" alt="A happy customer being assisted by staff" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    </div>
                </div>
            </section>
          </AnimatedSection>

          {/* --- Address & Map Section --- */}
          <AnimatedSection>
            <section className="container mx-auto mt-20 md:mt-28">
               <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div>
                          <h3 className="text-3xl font-serif text-gradient-animated mb-8">Find Your Way to Elegance</h3>
                          <div className="space-y-6 text-slate-700">
                              <div className="flex items-start gap-4">
                                  <div className="text-amber-500 mt-1 flex-shrink-0"><MapPinIcon /></div>
                                  <div>
                                      <p className="font-semibold text-lg">Shreerang Saree Address:</p>
                                      <p className="leading-relaxed text-slate-600">
                                          Shop No. 4, Daya Mansion, G, Govindji Keni Rd,<br/>
                                          Behind Hindmata Gold Cinema, Dadar(E),<br/>
                                          Mumbai, Maharashtra 400014
                                      </p>
                                  </div>
                              </div>
                               <div className="flex items-start gap-4">
                                  <div className="text-amber-500 mt-1 flex-shrink-0"><ClockIcon /></div>
                                  <div>
                                      <p className="font-semibold text-lg">Store Timings:</p>
                                      <p className="text-slate-600">10:00 AM - 9:00 PM (Monday - Sunday)</p>
                                  </div>
                              </div>
                               <div className="flex items-start gap-4">
                                  <div className="text-amber-500 mt-1 flex-shrink-0"><PhoneIcon /></div>
                                  <div>
                                      <p className="font-semibold text-lg">Contact Us:</p>
                                      <p className="text-slate-600">+91 98765 43210</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="h-96 md:h-[450px] rounded-lg overflow-hidden shadow-lg border-4 border-white">
                          <iframe 
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.1531955769983!2d72.83813266933007!3d19.009003814718497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfc360d42519%3A0x1c4f43f9845a5baf!2sShreerang!5e1!3m2!1sen!2sin!4v1758459483664!5m2!1sen!2sin" 
                              width="100%" 
                              height="100%" 
                              style={{ border: 0 }}
                              allowFullScreen="" 
                              loading="lazy" 
                              referrerPolicy="no-referrer-when-downgrade"
                              title="Shreerang Saree Location Map"
                          ></iframe>
                      </div>
                  </div>
               </div>
            </section>
          </AnimatedSection>

        </div>
      </div>
    </>
  );
};

export default AboutUs;

