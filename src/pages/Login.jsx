import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const submit = data => {
    console.log(data);
    toast.success(`${data.name} welcome to your Phonebook!`);
    //  dispatch(addContactThunk({ name, phone }));
    reset();
  };

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
