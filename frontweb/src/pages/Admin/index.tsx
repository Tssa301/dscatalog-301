import NavBar from './NavBar';
import './styles.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <NavBar />
      <div className="admin-content">
        <h1>Content</h1>
      </div>
    </div>
  );
};

export default Admin;
