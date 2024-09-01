import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { IoBagOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";

const Header = () => {
  const navLinks = (
    <>
      <NavLink to="/" className="no-underline">
        <li className="p-2 text-black font-semibold">Home</li>
      </NavLink>
      <NavLink to="/about" className="no-underline">
        <li className="p-2 text-black font-semibold">About</li>
      </NavLink>
      <NavLink to="/services" className="no-underline">
        <li className="p-2 text-black font-semibold">Services</li>
      </NavLink>
      <NavLink to="/blog" className="no-underline">
        <li className="p-2 text-black font-semibold">Blog</li>
      </NavLink>
      <NavLink to="/contact" className="no-underline">
        <li className="p-2 text-black font-semibold">Contact</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="header logo" className="w-20 h-20" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="mr-5 mt-4 flex justify-center items-end gap-3">
          <IoBagOutline className="w-5 h-5" />
          <IoMdSearch className="w-5 h-5" />
        </div>
        <button className="font-semibold btn text-[#FF3811] border-[#FF3811]">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default Header;
