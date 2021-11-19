import { NavLink } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
  return (
    <nav className="admin-nav-container">
      <ul>
        <li>
          <NavLink to="/admin/products" className="admin-nav-item">
            <p>Products</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/categories" className="admin-nav-item">
            <p>Categories</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/users" className="admin-nav-item">
            <p>Users</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
