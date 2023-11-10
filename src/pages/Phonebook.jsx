import {
  BsFillPhoneIcon,
  CenteredTextNote,
  CenteredTextWrapper,
  PhoneWrapper,
  SecondTitle,
  TitleWrapper,
  Wrapper,
} from 'components/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataThunk } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';

import { FaFaceSadTear } from 'react-icons/fa6';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Notification from 'components/Notification/Notification';
import { useEffect } from 'react';
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
        <Wrapper>
          <CenteredTextWrapper>
            <CenteredTextNote>
              <FaFaceSadTear size={80} style={{ marginBottom: 30 }} />
              <br></br> {error}
            </CenteredTextNote>
          </CenteredTextWrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          <PhoneWrapper>
            <TitleWrapper>
              <BsFillPhoneIcon />
              {/* <Title>Phonebook</Title> */}
            </TitleWrapper>
            <ContactForm />
            <SecondTitle>Contacts List</SecondTitle>
            <Filter />
            {contacts.length > 0 && <ContactList />}
            {contacts.length === 0 && !loading && (
              <Notification message="Your contact list is empty" />
            )}
          </PhoneWrapper>
        </Wrapper>
      )}
    </>
  );
};

export default Phonebook;
