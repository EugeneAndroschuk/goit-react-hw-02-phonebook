import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  // handleInputChange = e => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  onSubmitForm = stateForm => {
    const newContact = {
      id: nanoid(),
      name: stateForm.name,
      number: stateForm.number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  onDeleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=>contact.id !== contactId)
    }))
  }

  render() {
    return (
      <div className={css.app}>
        <h1 className={css.head}>Phonebook</h1>
        <ContactForm onSubmitForm={this.onSubmitForm} />

        <h2 className={css.head}>Contacts</h2>
        <ContactList
          contacts={this.state.contacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
