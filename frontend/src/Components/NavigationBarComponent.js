import { Outlet, Link } from "react-router-dom";

const NavigationBarComponent = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default NavigationBarComponent;
