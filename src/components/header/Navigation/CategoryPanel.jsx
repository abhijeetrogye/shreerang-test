import React from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const sareeCategories = [
  { name: "Banarasi Saree", link: "/categories/banarasi-saree" },
  { name: "Kanjivaram Saree", link: "/categories/kanjivaram-saree" },
  { name: "Chanderi Saree", link: "/categories/chanderi-saree" },
  { name: "Paithani Saree", link: "/categories/paithani-saree" },
  { name: "Tant Saree", link: "/categories/tant-saree" },
  { name: "Kota Doria Saree", link: "/categories/kota-doria-saree" },
  { name: "Patola Saree", link: "/categories/patola-saree" },
  { name: "Bandhani Saree", link: "/categories/bandhani-saree" },
  { name: "Muga Silk Saree", link: "/categories/muga-silk-saree" },
  { name: "Baluchari Saree", link: "/categories/baluchari-saree" },
  { name: "Bomkai Saree", link: "/categories/bomkai-saree" },
  { name: "Kasavu Saree", link: "/categories/kasavu-saree" },
  { name: "Sambalpuri Saree", link: "/categories/sambalpuri-saree" },
  { name: "Gadwal Saree", link: "/categories/gadwal-saree" },
  { name: "Pochampally Saree", link: "/categories/pochampally-saree" },
];

const CategoryPanel = ({ isOpenCategoryPanel, openCategoryPanel }) => {
  return (
    <AnimatePresence>
      {isOpenCategoryPanel && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden z-40"
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Shop by Categories</h2>
              <button
                onClick={openCategoryPanel}
                className="text-2xl text-gray-600 hover:text-black"
              >
                <IoClose />
              </button>
            </div>

            {/* Categories Grid */}
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sareeCategories.map((cat, index) => (
                <li key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05, x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={cat.link}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 
                                 hover:text-[#8e182f] hover:bg-gray-50 relative transition"
                    >
                      {cat.name}
                      {/* Underline animation */}
                      <motion.span
                        className="absolute left-3 bottom-1 h-[2px] bg-[#8e182f] w-0"
                        whileHover={{ width: "calc(100% - 24px)" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CategoryPanel;
