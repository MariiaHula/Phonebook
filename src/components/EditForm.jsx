import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { updateContactThunk } from 'redux/contacts/operations';

export const EditForm = ({ closeModal, contact }) => {
  const { handleSubmit, register } = useForm({
    defaultValues: contact,
  });
  const dispatch = useDispatch();

  const submitEdit = data => {
    if (contact) {
      const updatedContact = {
        id: contact.id,
        name: data.name,
        number: data.number,
      };
      console.log(data);
      dispatch(updateContactThunk(updatedContact));
      closeModal();
    }
  };
  return (
    <form onSubmit={handleSubmit(submitEdit)}>
      <label>
        Name
        <input {...register('name')} type="text" />
      </label>
      <label>
        Number
        <input {...register('number')} type="tel" />
      </label>
      <div>
        <button onClick={closeModal} type="button">
          Cancel
        </button>
        <button type="submit">Update</button>
      </div>
    </form>
  );
};
