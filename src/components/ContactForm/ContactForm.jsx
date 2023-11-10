import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { selectContacts } from 'redux/contacts/selectors';
import { addContactThunk } from 'redux/contacts/operations';

import { Form, Label, Input, Button, Text } from './ContactForm.styled';
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
      const { name, phone } = data;
      toast.success(`${name} added to your phonebook.`);
      dispatch(addContactThunk({ name, phone }));
      reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Label>
        Name
        <Input
          {...register('name', { required: 'This is required' })}
          type="text"
        />
        <Text>{errors.name?.message}</Text>
      </Label>
      <Label>
        Number
        <Input
          {...register('phone', { required: 'This is required' })}
          type="tel"
        />
        <Text>{errors.phone?.message}</Text>
      </Label>
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

export default ContactForm;
