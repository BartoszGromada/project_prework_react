import React from 'react';
import styles from './list.scss';
import Hero from '../Hero/Hero.js';

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <Hero />
      </section>
    )
  }
}

export default List;
