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
      <div className="flex h-screen bg-yellow-100">
        {error ? (
          <div className="text-center">
            <p className="text-2xl mb-4">
              <FaFaceSadTear size={80} className="mb-2 text-red-500" />
              <br /> {error}
            </p>
          </div>
        ) : (
          <div className="p-4 sm:p-8 md:p-12 lg:p-16 bg-sky-50 w-full max-w-screen-xl mx-auto ">
            <div className="mb-6">
              <h1 className="text-2xl text-center md:text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-500">
                Add new contact
              </h1>
            </div>
            <ContactForm />
            {contacts.length > 0 ? (
              <div className="flex flex-col items-center justify-center space-y-10 md:mb-6">
                <h2 className="text-2xl text-center md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-8 mb-4 text-yellow-500">
                  Your list
                </h2>
                <Filter />
                <div className="max-h-[400px] min-w-[200px] overflow-y-auto scrollbar">
                  <ContactList />
                </div>
              </div>
            ) : (
              <div className="mt-4">
                {!loading && (
                  <Notification message="Your contact list is empty" />
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Phonebook;
