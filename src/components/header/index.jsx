import { Link } from "react-router-dom";
import Search from "../Search";
import Navigation from "../header/Navigation";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import Tooltip from '@mui/material/Tooltip';

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: "#8D152F", // Maroon from logo
    color: "#fff", // White text for contrast
  },
}));

const Header = () => {
  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-light">
                Get upto 40% off new season style, limited time only
              </p>
            </div>
            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="help-center"
                    className="text-[13px] links font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="order-tracking"
                    className="text-[13px] links font-[500] transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header border-b-[1px] border-gray-250">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img src="/header-logo.jpg" className="w-40" alt="Logo" />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>
          <div className="col3 w-[30%] flex items-center">
            <ul className="flex items-center justify-end gap-3 ml-5 w-full">
              <li className="list-none">
                <Link
                  to="/login"
                  className="text-primary links transition hover:underline"
                >
                  Login
                </Link>{" "}
                | &nbsp;
                <Link
                  to="/register"
                  className="text-primary links transition hover:underline"
                >
                  Register
                </Link>
              </li>
              <li>
                <Tooltip title="Compare">
                <IconButton aria-label="compare">
                  <StyledBadge badgeContent={4} color="secondary">
                    <IoIosGitCompare size={28} />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Wishlist">
                <IconButton aria-label="wishlist">
                  <StyledBadge badgeContent={4} color="secondary">
                    <CiHeart size={28} />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <CiShoppingCart size={28} />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation/>

    </header>
  );
};

export default Header;
