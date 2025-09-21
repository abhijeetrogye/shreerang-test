import React, { useState } from 'react';
import HomeCatSlider from '../../components/HomeCatSlider';
import HomeSlider from '../../components/HomeSlider';
import { CiDeliveryTruck, CiRedo } from "react-icons/ci";
import Button from '@mui/material/Button';
import AdsBannerSlider from '../../components/AdsBannerSlider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductSlider from '../../components/ProductSlider';
import AddressBanner from '../../components/BannerBox/AddressBanner';
import BlogItem from '../../components/BlogItem';
import Footer from '../../components/Footer';
import Testimony from '../../components/Testimonials';

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <HomeSlider />
      <HomeCatSlider />
      <AddressBanner/>

      {/* Popular Collections Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="leftSec w-[40%]">
              <h3 className="text-[25px] font-semibold">Popular Collections</h3>
              <p>Do not miss this current offers until the end of the month</p>
            </div>

            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                slotProps={{
                  indicator: {
                    style: { backgroundColor: "#E6B066",},
                  },
                }}
                sx={{
                  "& .MuiTab-root": {
                    color: "#555", // default text color
                    fontWeight: 400,
                    fontSize: "0.95rem",
                    textTransform: "none",
                  },
                  "& .Mui-selected": {
                    color: "#8e182f !important", // selected text color
                    fontWeight: 500,
                  },
                }}
              >
                <Tab label="Banarasi Saree" />
                <Tab label="Kanjivaram Saree" />
                <Tab label="Chanderi Saree" />
                <Tab label="Bandhani Saree" />
                <Tab label="Patola Saree" />
                <Tab label="Paithani Saree" />
                <Tab label="Sambalpuri Saree" />
                <Tab label="Kasavu Saree" />
                <Tab label="Muga Silk Saree" />
                <Tab label="Baluchari Saree" />
              </Tabs>
            </div>

          </div>
          <ProductSlider items={5}/>
        </div>
      </section>

      {/* Free Shipping + Ads Banner */}
      <section className="py-2 bg-white">
        <div className="container">
          <div className="freeshipping w-full py-4 px-6 border border-[#8e182f] flex flex-col md:flex-row items-center justify-between gap-6 rounded-md shadow-sm hover:shadow-md transition-all duration-300 mb-7">
            
            {/* Free Shipping - Left */}
            <div className="col1 flex items-center gap-3">
              <CiDeliveryTruck size={40} className="text-[#8e182f]" />
              <div>
                <span className="block text-[18px] font-semibold">FREE SHIPPING</span>
                <span className="text-sm text-gray-600">On first order & above ₹799</span>
              </div>
            </div>

            {/* Center Highlight */}
            <div className="text-center">
              <span className="block text-[18px] font-semibold text-[#8e182f]">FESTIVE OFFER</span>
              <span className="block text-sm text-gray-600 mb-1">Get flat 20% off on Sarees</span>
    
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: "#8e182f", 
                  fontSize: "0.875rem", 
                  padding: "4px 16px", 
                  borderRadius: "6px", 
                  textTransform: "none", 
                  "&:hover": { backgroundColor: "#a11d38" } 
                }}
              >
                Shop Now
              </Button>
            </div>

            {/* Easy Returns - Right */}
            <div className="col2 flex items-center gap-3">
              <CiRedo size={40} className="text-[#8e182f]" />
              <div>
                <span className="block text-[18px] font-semibold">EASY RETURNS</span>
                <span className="text-sm text-gray-600">7-day hassle-free return policy</span>
              </div>
            </div>
          </div>

          <AdsBannerSlider items={4}/>
        </div>
      </section>

      <section className='py-5 bg-white'>
      <div className='container'>
      <h3 className="text-[25px] font-semibold">Latest Collections</h3>
      <ProductSlider items={5}/>
      <AdsBannerSlider items={2}/>
      </div>
      </section>

      <section className='py-5 bg-white'>
      <div className='container'>
      <h3 className="text-[25px] font-semibold">Featured Collections</h3>
      <ProductSlider items={5}/>
      </div>
      </section>

      <section className='blogSection py-5 bg-white'>
        <div className='py-5'>
          <BlogItem/>
        </div>
      </section>

      <Testimony/>

      <Footer/>
    </div>
  );
};

export default Home;
