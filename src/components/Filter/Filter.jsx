import React from 'react';

import styles from '../../styles/Filter.module.css';

const Filter = ({ filter, value }) => {
  return (
    <form className={styles.form}>
      <label htmlFor="filterInput" className={styles.label}>
        Filter
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={filter}
          id="filterInput"
        />
      </label>
    </form>
  );
};

export default Filter;
