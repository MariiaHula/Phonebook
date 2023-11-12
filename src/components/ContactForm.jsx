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
      className="max-w-md mx-auto p-4 rounded-md flex-col"
    >
      <input
        {...register('name', { required: 'This is required' })}
        type="text"
        className="input input-bordered input-info w-full sm:w-[200px] mb-3"
        placeholder="Name"
      />
      <p className="text-red-500 text-sm">{errors.name?.message}</p>

      <input
        {...register('number', { required: 'This is required' })}
        type="tel"
        className="input input-bordered input-info w-full sm:w-[200px] mb-3"
        placeholder="Number"
      />
      <p className="text-red-500 text-sm">{errors.number?.message}</p>

      <button
        type="submit"
        className="mx-auto px-4 py-2 bg-blue-500 text-white p-2 flex items-center justify-center hover:bg-blue-600 rounded-full"
      >
        <HiOutlinePlus size={30} />
      </button>
    </form>
  );
};

export default ContactForm;
