import { ReactComponent as AuthImage } from 'assets/images/auth-image.svg';
import { Route, Switch } from 'react-router-dom';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Promote your products in the DS Catalog</h1>
        <p>
          Be part of our promotional catalog and increase the sales of your
          products.
        </p>
        <AuthImage />
      </div>
      <div className="auth-form-container">
        <Switch>
          <Route path="/admin/auth/login">
            <h1>Login Card</h1>
          </Route>
          <Route path="/admin/auth/signup">
            <h1>Signup Card</h1>
          </Route>
          <Route path="/admin/auth/recover">
            <h1>Recover Card</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default Auth;
