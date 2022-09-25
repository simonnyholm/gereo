import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">This is Gereo</NavLink>
        </li>
        <li>
          <NavLink to="/how">How?</NavLink>
        </li>
        <li>
          <NavLink to="/gereoboard">Gereoboard</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
