import React from "react";
import "../ProductItem/style.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { CiShare1 } from "react-icons/ci";

const ProductItem = () => {
  const [value, setValue] = React.useState(3);

  return (
    <div className="productItem rounded-md shadow-lg border-2 border-[rgba(0,0,0,0.1)]">
      {/* Image */}
      <div className="imgWrapper w-full rounded-md relative group overflow-hidden">
        <Link to={'/'} className="relative block h-[250px]">
          <img
            src="https://shreerangsaree.netlify.app/images/p1.jpeg"
            className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300"
            alt="Saree 1"
          />
          <img
            src="https://www.vasahindia.com/wp-content/uploads/2023/05/7202f4cb-a787-44ea-9704-e2880fd36881-1.jpg"
            className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            alt="Saree 2"
          />
        </Link>
        <span className="discount flex flex-col items-center justify-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-full w-10 h-10 text-[14px] font-[500] shadow-md">
          20%
        </span>

        <div className="actions absolute top-[10px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <Tooltip title="Add to Wishlist" arrow>
            <Button
              sx={{
                width: 35,
                height: 35,
                minWidth: 35,
                borderRadius: "50%",
                bgcolor: "white",
                color: "black",
                boxShadow: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#8e182f", // your primary color
                  color: "white",
                },
              }}
            >
              <CiHeart className="text-[18px]" />
            </Button>
          </Tooltip>

          <Tooltip title="Compare" arrow>
            <Button
              sx={{
                width: 35,
                height: 35,
                minWidth: 35,
                borderRadius: "50%",
                bgcolor: "white",
                color: "black",
                boxShadow: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#8e182f",
                  color: "white",
                },
              }}
            >
              <IoIosGitCompare className="text-[18px]" />
            </Button>
          </Tooltip>

          <Tooltip title="Quick View" arrow>
            <Button
              sx={{
                width: 35,
                height: 35,
                minWidth: 35,
                borderRadius: "50%",
                bgcolor: "white",
                color: "black",
                boxShadow: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#8e182f",
                  color: "white",
                },
              }}
            >
              <MdOutlineZoomOutMap className="text-[18px]" />
            </Button>
          </Tooltip>

          <Tooltip title="Share" arrow>
            <Button
              sx={{
                width: 35,
                height: 35,
                minWidth: 35,
                borderRadius: "50%",
                bgcolor: "white",
                color: "black",
                boxShadow: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#8e182f",
                  color: "white",
                },
              }}
            >
              <CiShare1 className="text-[18px]" />
            </Button>
          </Tooltip>
        </div>
      </div>

      {/* Info */}
      <div className="info p-3 py-5">
        <h6 className="text-[13px] font-light links transition">
          <Link to="/">Brand Name</Link>
        </h6>
        <h3 className="text-[14px] title mt-1 mb-1 font-[500] text-[#000] break-words whitespace-normal link transition">
          <Link to="/">Saree name and brief details.</Link>
        </h3>

        {/* Rating */}
        <Box sx={{ mt: 1 }}>
          <Rating
            name="product-rating"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            precision={0.5}
          />
        </Box>

        <div className="flex items-center gap-4">
          <span className="oldprice line-through font-gray-500 text-[15px] font-[500]">₹999</span>
          <span className="price text-primary font-[600]">₹799</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;