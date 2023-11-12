import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUserThunk } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUsers } from 'redux/auth/selectors';

const Login = () => {
  const navigate = useNavigate();
  const { name } = useSelector(selectUsers);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const submit = data => {
    const { email, password } = data;
    toast.success(`${name} welcome back to your Phonebook!`);
    dispatch(loginUserThunk({ email, password }));
    reset();
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts');
    }
  }, [navigate, isLoggedIn]);

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input {...register('email', { required: 'This is required' })} />
        <p>{errors.email?.message}</p>
        <input
          type="password"
          {...register('password', { required: 'This is required' })}
        />
        <p>{errors.password?.message}</p>
        <button type="submit">Login</button>
        <p>
          Don't have an account yet?
          <span>
            <Link to="/register">Register</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
