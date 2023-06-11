import React from 'react';
import Contact from 'components/Contact/Contact';

import styles from '../../styles/ContactsList.module.css';

const ContactsList = ({ contactList = [], onContactRemove }) => {
  return (
    <ul className={styles.list}>
      {contactList.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onContactRemove={onContactRemove}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
