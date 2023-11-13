import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { selectContacts } from 'redux/contacts/selectors';
import { addContactThunk } from 'redux/contacts/operations';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiOutlinePlus } from 'react-icons/hi';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = data => {
    const nameExists = contacts.find(
      contact =>
        contact.name.toLowerCase().trim() === data.name.toLowerCase().trim()
    );

    if (nameExists) {
      toast.info(`${data.name} is already in your contacts.`);
      return;
    } else {
      const { name, number } = data;
      toast.success(`${name} added to your phonebook.`);
      dispatch(addContactThunk({ name, number }));
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className=" flex items-center justify-center max-w-md mx-auto p-4 rounded-md flex-col space-y-3 md:items-center xl:flex-row xl:space-y-0 xl:space-x-8"
    >
      <input
        {...register('name', { required: 'This is required' })}
        type="text"
        className="input input-bordered input-info w-full max-w-xs sm:max-w-md md:min-w-[400px] md:max-w-lg lg:max-w-xl"
        placeholder="Name"
      />
      <p className="text-red-500 text-sm">{errors.name?.message}</p>

      <input
        {...register('number', { required: 'This is required' })}
        type="tel"
        className="input input-bordered input-info w-full max-w-xs sm:max-w-md md:min-w-[400px] md:max-w-lg lg:max-w-xl"
        placeholder="Number"
      />
      <p className="text-red-500 text-sm">{errors.number?.message}</p>

      <button
        type="submit"
        className=" w-[90px] h-10 font-roboto text-xs uppercase tracking-wide font-semibold text-white bg-sky-400 border-none rounded-full shadow-md transition-all duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-sky-600 focus:bg-sky-600 flex items-center justify-center md:ml-2 xl:min-w-[90px]"
      >
        <HiOutlinePlus size={30} />
      </button>
    </form>
  );
};

export default ContactForm;
