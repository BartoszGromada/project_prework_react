import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
  }
  render() {
    return (
      <section className={styles.component}>
        <h4>{this.props.title}</h4>
      </section>
    )
  }
}

export default Card;