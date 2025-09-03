import React from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const AddressBanner = () => {
  return (
    // ✅ CHANGE: Adjusted the height to be appropriate for a 2048x48 banner.
    <div className=" container relative w-full h-24 md:h-28 lg:h-48 overflow-hidden rounded-lg shadow-xl">
      {/* Banner Image */}
      <motion.img
        src="/banner/address-banner.jpg"
        alt="Storefront Banner"
        // ✅ CHANGE: Ensured the image fills the container correctly. Removed the problematic scale animation.
        className="absolute top-0 left-0 w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/2048x48/333/FFF?text=Our+Location";
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-white mb-4 shadow-md"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          Visit Our Store
        </motion.h2>

        {/* External Google Maps Link */}
        <motion.a
          href="https://maps.app.goo.gl/VwNdVKQXzngvS4Jb7"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="contained"
            startIcon={<MapPin size={20} />}
            sx={{
              background: "linear-gradient(45deg, #A020F0 30%, #8e182f 90%)",
              color: "white",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: "600",
              textTransform: "none",
              padding: { xs: "10px 20px", md: "12px 24px" },
              borderRadius: "50px",
              border: "2px solid rgba(255, 255, 255, 0.5)",
              boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0px 8px 25px rgba(142, 24, 47, 0.6)",
                transform: "translateY(-2px)",
                background:
                  "linear-gradient(45deg, #b34df3 30%, #a61d37 90%)",
              },
            }}
          >
            Get Directions
          </Button>
        </motion.a>
      </div>
    </div>
  );
};

export default AddressBanner;
