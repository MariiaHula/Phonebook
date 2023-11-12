import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUserThunk } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUsers } from 'redux/auth/selectors';
import img_2 from '../images/img_2.jpg';
import { BsPhoneVibrate } from 'react-icons/bs';

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
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center flex-wrap relative transition duration-150 ease-in-out ">
      <div
        className="absolute inset-0 bg-cover bg-center min-h-screen flex items-center justify-center "
        style={{
          backgroundImage: `url(${img_2})`,
          filter: 'blur(8px)',
          opacity: '0.7',
        }}
      />

      <div className=" bg-white p-6 rounded-md max-w-md w-full m-4 relative z-10 border-solid border-2 border-blue-500 ">
        <form onSubmit={handleSubmit(submit)}>
          <BsPhoneVibrate
            size={60}
            style={{
              color: '#fda403',
              margin: '0 auto',
              marginBottom: '16px',
            }}
          />
          <input
            {...register('email', { required: 'This is required' })}
            className="input input-bordered input-info w-full max-w-xs mb-6"
            placeholder="Email"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>

          <input
            type="password"
            {...register('password', { required: 'This is required' })}
            className="input input-bordered input-info w-full max-w-xs mb-6"
            placeholder="Password"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>

          <button
            type="submit"
            className="mx-auto px-6 py-2 bg-blue-500 text-white p-2 flex items-center justify-center hover:bg-blue-600 rounded-lg"
          >
            Login
          </button>

          <p className="mt-2 text-sm text-[16px]">
            Don't have an account yet?
            <span className="ml-1 text-blue-500 hover:text-yellow-500 text-[16px]">
              <Link to="/register">Register</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
