import css from './ContactList.module.css';

const ContactList = (props) => {
    const { contacts, onDeleteContact } = props;
    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <span>{contact.name}: </span>
            <span>{contact.number}</span>
            <button
              type="button"
              onClick={() => onDeleteContact(contact.id)}
              className={css.deleteBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
}

export default ContactList;