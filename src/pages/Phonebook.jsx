import { useDispatch, useSelector } from 'react-redux';
import { fetchDataThunk } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';

import { FaFaceSadTear } from 'react-icons/fa6';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Notification from 'components/Notification';
import { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

const Phonebook = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);

  return (
    <>
      {error ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <p className="text-2xl mb-4">
              <FaFaceSadTear size={80} className="mb-2 text-red-500" />
              <br /> {error}
            </p>
          </div>
        </div>
      ) : (
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold color">My contacts</h1>
          </div>
          <ContactForm />
          <h2 className="text-2xl font-bold mt-8 mb-4">Contacts List</h2>
          <Filter />
          {contacts.length > 0 ? (
            <ContactList />
          ) : (
            <div className="mt-4">
              {!loading && (
                <Notification message="Your contact list is empty" />
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Phonebook;
