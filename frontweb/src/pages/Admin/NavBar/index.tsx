import './styles.css';

const NavBar = () => {
  return (
    <nav className="admin-nav-container">
      <ul>
        <li>
          <a href="link" className="admin-nav-item active">
            <p>Product</p>
          </a>
        </li>
        <li>
          <a href="link" className="admin-nav-item">
            <p>Categories</p>
          </a>
        </li>
        <li>
          <a href="link" className="admin-nav-item">
            <p>Users</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
