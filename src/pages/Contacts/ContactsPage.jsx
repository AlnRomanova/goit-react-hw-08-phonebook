import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';
import { Skeleton } from '@chakra-ui/react';

 const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
    <ContactForm/>
    <div>{isLoading && <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />}
    <ContactList/>
    </div>
    <Filter/>
    </>

  )
}
export default ContactsPage;
