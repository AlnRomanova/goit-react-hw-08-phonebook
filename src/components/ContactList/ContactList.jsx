import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/contactsSelectors';
import { deleteContact } from 'redux/contactsOperations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contacts}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactsItem} key={id}>
          <p className={css.contactsName}>{name}:</p>
          <p className={css.contactsNumber}>{number}</p>
          <button
            className={css.contactsBtn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
