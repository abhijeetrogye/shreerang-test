import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Trending", path: "/trending" },
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Collections", path: "/collections" },
    { name: "Offers", path: "/offers" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="relative">
      <nav className="py-2 bg-white shadow-md relative z-50">
        <div className="container flex items-center justify-between gap-4">
          {/* Category Panel Button */}
          <div className="w-[20%]">
            <Button
              className="!text-black gap-2 w-full font-semibold"
              onClick={openCategoryPanel}
            >
              <CiMenuFries className="text-[18px]" />
              Shop By Categories
              <TfiAngleDown className="text-[13px] ml-auto font-bold" />
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="w-[62%]">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name} className="list-none">
                  <Link
                    to={link.path}
                    className="links relative inline-block px-1 text-[13px] transition 
                      before:content-[''] before:absolute before:left-1/2 before:top-[-6px] before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:-translate-x-1/2
                      after:content-[''] after:absolute after:left-1/2 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:-translate-x-1/2
                      hover:before:w-full hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Free Delivery Info */}
          <div className="w-[18%] flex items-center gap-2">
            <MdOutlineCelebration className="text-[16px]" />
            <p className="text-[14px] font-semibold">Free Delivery Above ₹799</p>
          </div>
        </div>
      </nav>

      {/* Category Panel */}
      <CategoryPanel
        openCategoryPanel={openCategoryPanel}
        isOpenCategoryPanel={isOpenCategoryPanel}
      />
    </div>
  );
};

export default Navigation;
