import React, { useState } from 'react';

import styles from '../../styles/ContactsForm.module.css';

const ContactsForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="nameInput" className={styles.label}>
        Name
        <input
          placeholder="Name Surname"
          type="text"
          id="nameInput"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <label htmlFor="numberInput" className={styles.label}>
        Number
        <input
          placeholder="Phone number"
          type="tel"
          id="numberInput"
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
          minLength={13}
          onChange={event => setNumber(event.target.value)}
        />
      </label>
      <button type="submit">Add to contacts</button>
    </form>
  );
};

export default ContactsForm;
