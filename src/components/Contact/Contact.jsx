import React from 'react';

import styles from '../../styles/Contact.module.css';

const Contact = ({ id, name, number, onContactRemove }) => {
  return (
    <li key={id} className={styles.item}>
      <div className={styles.data}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={styles.button} onClick={() => onContactRemove(id)}>
        Remove
      </button>
    </li>
  );
};

export default Contact;
