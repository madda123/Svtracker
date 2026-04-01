import { NavLink } from "react-router";
import logo from "../../assets/images/svtracker-logo.png";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center md:hidden gap-6 px-8 py-3 bg-cuswhite">
      <Menu strokeWidth={2.5} />
      <NavLink to="/" className="flex items-center gap-1.5 font-bold">
        <img src={logo} alt="logo" className="w-7.25 h-7.25" />
        <p className="text-h6 text-cusblack">Svtracker</p>
      </NavLink>
    </nav>
  );
};

export default Navbar;
