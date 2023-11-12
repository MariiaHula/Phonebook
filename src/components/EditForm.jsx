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
    <form
      onSubmit={handleSubmit(submitEdit)}
      className="max-w-md mx-auto p-4 rounded-md bg-white shadow-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          {...register('name')}
          type="text"
          className="input input-bordered input-info w-full p-2 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Number
        </label>
        <input
          {...register('number')}
          type="tel"
          className="input input-bordered input-info w-full p-2 rounded-md"
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={closeModal}
          type="button"
          className="mr-2 px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Update
        </button>
      </div>
    </form>
  );
};
