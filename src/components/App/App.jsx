import { useState } from "react";
import initialContacts from "../data/contacts.json";

import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = taskID => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== taskID);
    });
  };

  const [filter, setFilter] = useState("");
  const handleFilter = newInput => {
    setFilter(newInput);
  };
  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filter} onFilter={handleFilter} />
      <ContactList contacts={filterContact} onDelete={deleteContact} />
    </div>
  );
}
