import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUserThunk } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Register = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const submit = data => {
    console.log(data);
    toast.success(`${data.name} welcome to your Phonebook!`);
    dispatch(registerUserThunk(data));
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
        <input {...register('name', { required: 'This is required' })} />
        <p>{errors.name?.message}</p>
        <input {...register('email', { required: 'This is required' })} />
        <p>{errors.email?.message}</p>
        <input
          type="password"
          {...register('password', { required: 'This is required' })}
        />
        <p>{errors.password?.message}</p>
        <button type="submit">Register</button>
        <p>
          Already have an account?
          <span>
            <Link to="/login">Login</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
