import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUserThunk } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import img_2 from '../images/img_2.jpg';
import { BsPhoneVibrate } from 'react-icons/bs';

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
  const submit = async data => {
    try {
      await dispatch(registerUserThunk(data)).unwrap();
      toast.success(`${data.name} welcome to your Phonebook!`);
    } catch (error) {
      toast.error('Sorry, registration failed');
    }
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

      <div className=" bg-white text-center p-6 rounded-md max-w-md w-full m-4 relative z-10 border-solid border-2 border-sky-500 ">
        <form onSubmit={handleSubmit(submit)} className="">
          <BsPhoneVibrate
            size={60}
            style={{
              color: '#fda403',
              margin: '0 auto',
              marginBottom: '16px',
            }}
          />
          <input
            {...register('name', { required: 'This is required' })}
            className="input input-bordered input-info w-full max-w-xs mb-6"
            placeholder="Name"
          />
          <p>{errors.name?.message}</p>
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
            className="mx-auto px-6 py-2 bg-sky-500 text-white p-2 flex items-center justify-center hover:bg-sky-600 rounded-lg transition-all duration-300 ease-in-out cursor-pointer"
          >
            Register
          </button>
          <p className="mt-2 text-sm text-[16px] ">
            Already have an account?
            <span className=" ml-2 text-sky-500 underline decoration-1 hover:text-yellow-500 text-[16px] transition-all duration-300 ease-in-out cursor-pointer">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
