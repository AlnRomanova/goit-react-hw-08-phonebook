import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import React from 'react';

 const ContactsPage = () => {
  return (
    <>
    <h2>List of contacts</h2>
    <ContactForm/>
    <ContactList/>
    <Filter/>
    </>

  )
}
export default ContactsPage;
