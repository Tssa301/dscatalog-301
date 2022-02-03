import { Switch } from 'react-router';
import NavBar from './NavBar';
import Products from './Products';
import Users from './Users';
import PrivateRoute from 'components/PrivateRoute';

import './styles.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <NavBar />
      <div className="admin-content">
        <Switch>
          <PrivateRoute path="/admin/products">
            <Products />
          </PrivateRoute>
          <PrivateRoute path="/admin/categories">
            <h1>Category CRUD</h1>
          </PrivateRoute>
          <PrivateRoute path="/admin/users" roles={['ROLE_ADMIN']}>
            <Users />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
