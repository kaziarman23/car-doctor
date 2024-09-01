import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white p-10">
      <aside>
        <Link to="/">
          <img src={logo} alt="header logo" className="w-20 h-20" />
        </Link>
        <p className="w-1/2">
          Edwin Diaz is a software and web technologies engineer, a life coach
          trainer who is also a serial.
        </p>
        <div className="flex justify-start items-start gap-2">
          <FaGoogle className="w-8 h-8 text-slate-800" />
          <FaTwitter className="w-8 h-8 text-slate-800" />
          <FaInstagram className="w-8 h-8 text-slate-800" />
          <FaLinkedin className="w-8 h-8 text-slate-800" />
        </div>
      </aside>
      <nav>
        <h6 className="footer-title">About</h6>
        <Link className="no-underline text-white">Home</Link>
        <Link className="no-underline text-white">Services</Link>
        <Link className="no-underline text-white">Contact</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link className="no-underline text-white">About</Link>
        <Link className="no-underline text-white">Why car doctor</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Support</h6>
        <Link className="no-underline text-white">Support Center</Link>
        <Link className="no-underline text-white">Feedback</Link>
        <Link className="no-underline text-white">Accesbility</Link>
      </nav>
    </footer>
  );
};

export default Footer;
