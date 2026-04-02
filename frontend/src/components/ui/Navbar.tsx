import { NavLink } from "react-router";
import logo from "../../assets/images/svtracker-logo.png";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 flex items-center md:hidden justify-between px-4 py-3 bg-cuswhite shadow-md">
      <Menu strokeWidth={2} />
      <NavLink to="/" className="flex items-center gap-1.5 font-bold">
        <img src={logo} alt="logo" className="w-5 h-5" />
        <p className="text-bd text-cusblack">Svtracker</p>
      </NavLink>
    </nav>
  );
};

export default Navbar;
