import ButtonIcon from 'components/ButtonIcon';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { getAuthData, requestBackendLogin, saveAuthData } from 'util/requests';

import './styles.css';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const [hasError, setHasError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        const token = getAuthData().access_token;
        console.log('TOKEN GENERATED: ' + token);
        setHasError(false);
        console.log('SUCCESS ', response);
      })
      .catch((error) => {
        setHasError(true);
        console.log('ERROR', error);
      });
  };

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      {hasError && (
        <div className="alert alert-danger">
          Incorrect username or password.
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register('username', {
              required: 'Required field',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email',
              },
            })}
            type="text"
            className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
            placeholder="Email"
            name="username"
          />
          <div className="invalid-feedback d-block">
            {errors.username?.message}
          </div>
        </div>
        <div className="mb-2">
          <input
            {...register('password', {
              required: 'Required field',
            })}
            type="password"
            className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Password"
            name="password"
          />
          <div className="invalid-feedback d-block">
            {errors.password?.message}
          </div>
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
