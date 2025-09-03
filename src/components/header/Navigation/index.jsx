import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { TfiAngleDown } from "react-icons/tfi";
import { MdOutlineCelebration } from "react-icons/md";
import CategoryPanel from './CategoryPanel';
import { useState } from 'react';

const Navigation = () => {
  const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCategoryPanel(!isOpenCategoryPanel);
  };

  return (
    <div className="relative"> {/* relative wrapper so CategoryPanel attaches properly */}
      <nav className='py-2 bg-white shadow-md relative z-50'>
        <div className="container flex items-center justify-end gap-8">
          <div className="col_1 w-[20%]">
            <Button
              className='!text-black gap-2 w-full font-semibold'
              onClick={openCategoryPanel}
            >
              <CiMenuFries className='text-[18px]' />
              Shop By Categories
              <TfiAngleDown className='text-[13px] ml-auto font-bold'/>
            </Button>
          </div>

          <div className="col_2 w-[62%]">
            <ul className="flex items-center gap-10">
              <li className="list-none">
                <Link
                  to="/"
                  className="links transition text-[13px] relative inline-block px-1
                    before:content-[''] before:absolute before:left-1/2 before:top-[-6px] before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:-translate-x-1/2
                    after:content-[''] after:absolute after:left-1/2 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:-translate-x-1/2
                    hover:before:w-full hover:after:w-full"
                >
                  Home
                </Link>
              </li>

              <li className="list-none">
                <Link
                  to="/trending"
                  className="links transition text-[13px] relative inline-block px-1
                    before:content-[''] before:absolute before:left-1/2 before:top-[-6px] before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:-translate-x-1/2
                    after:content-[''] after:absolute after:left-1/2 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:-translate-x-1/2
                    hover:before:w-full hover:after:w-full"
                >
                  Trending
                </Link>
              </li>

              <li className="list-none">
                <Link
                  to="/new-arrivals"
                  className="links transition text-[13px] relative inline-block px-1
                    before:content-[''] before:absolute before:left-1/2 before:top-[-6px] before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:-translate-x-1/2
                    after:content-[''] after:absolute after:left-1/2 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:-translate-x-1/2
                    hover:before:w-full hover:after:w-full"
                >
                  New Arrivals
                </Link>
              </li>

              <li className="list-none">
                <Link
                  to="/collections"
                  className="links transition text-[13px] relative inline-block px-1
                    before:content-[''] before:absolute before:left-1/2 before:top-[-6px] before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:-translate-x-1/2
                    after:content-[''] after:absolute after:left-1/2 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:-translate-x-1/2
                    hover:before:w-full hover:after:w-full"
                >
                  Collections
                </Link>
              </li>

              <li className="list-none">
                <Link
                  to="/offers"
                  className="links transition text-[13px] relative inline-block px-1
                    before:content-[''] before:absolute before:left-1/2 before:top-[-6px] before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:-translate-x-1/2
                    after:content-[''] after:absolute after:left-1/2 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:-translate-x-1/2
                    hover:before:w-full hover:after:w-full"
                >
                  Offers
                </Link>
              </li>

              <li className="list-none">
                <Link
                  to="/about"
                  className="links transition text-[13px] relative inline-block px-1
                    before:content-[''] before:absolute before:left-1/2 before:top-[-6px] before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:-translate-x-1/2
                    after:content-[''] after:absolute after:left-1/2 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:-translate-x-1/2
                    hover:before:w-full hover:after:w-full"
                >
                  About Us
                </Link>
              </li>

              <li className="list-none">
                <Link
                  to="/contact"
                  className="links transition text-[13px] relative inline-block px-1
                    before:content-[''] before:absolute before:left-1/2 before:top-[-6px] before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:-translate-x-1/2
                    after:content-[''] after:absolute after:left-1/2 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:-translate-x-1/2
                    hover:before:w-full hover:after:w-full"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col_3 w-[18%] flex items-center gap-2 mb-0 mt-0 links transistion">
            <MdOutlineCelebration className="text-[16px]" />
            <p className="text-[14px] font-semibold">Free Delivery Above ₹799</p>
          </div>
        </div>
      </nav>

      <CategoryPanel
        openCategoryPanel={openCategoryPanel}
        isOpenCategoryPanel={isOpenCategoryPanel}
      />
    </div>
  );
};

export default Navigation;
