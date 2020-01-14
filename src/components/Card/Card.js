/* eslint-disable linebreak-style */
import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class Card extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
  }
  render() {
    const {title} = this.props;
    return (
      <section className={styles.component}>
        <h4>{ReactHtmlParser(title)}</h4>
      </section>
    );
  }
}

export default Card;