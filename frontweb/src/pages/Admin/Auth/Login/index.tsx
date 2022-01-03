import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

import './styles.css';

const Login = () => {
  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      <form>
        <div className="mb-4">
          <input
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            className="form-control base-input"
            placeholder="Password"
            name="password"
          />
        </div>
        <Link to="/admin/auth/recover" className="login-link-recover">
          Forgot my password
        </Link>
        <div className="login-submit">
          <ButtonIcon text="Login" />
        </div>
        <div className="signup-container">
          <span className="not-registered">No registration?</span>
          <Link to="/admin/auth/register" className="login-link-register">
            REGISTER
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
