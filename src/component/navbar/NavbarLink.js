import { NavLink } from "react-router-dom";

export default function NavbarLink({ text, to }) {
  return (
    <NavLink to={to} className="block px-3 py-1.5 relative text-nowrap hover:before:bg-red before:w-3 before:h-1.5 before:rounded-3xl  before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:bg-light-gray before:transition-colors before:duration-300">
      {text}
    </NavLink>
  );
}
