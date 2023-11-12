import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { selectContacts } from 'redux/contacts/selectors';
import { addContactThunk } from 'redux/contacts/operations';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <form onSubmit={handleSubmit(submit)}>
      <label>
        Name
        <input
          {...register('name', { required: 'This is required' })}
          type="text"
        />
        <p>{errors.name?.message}</p>
      </label>
      <label>
        Number
        <input
          {...register('number', { required: 'This is required' })}
          type="tel"
        />
        <p>{errors.number?.message}</p>
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
