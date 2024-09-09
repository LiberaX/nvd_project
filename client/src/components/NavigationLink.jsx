import { NavLink } from "react-router-dom";

export default function NavigationLink({ to, children }) {
  return (
    <NavLink to={to}>
      <span className="sub-title text-white hover:text-warmOrange">
        {children}
      </span>
    </NavLink>
  );
}
