import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import {Link} from 'react-router-dom';


class SearchResult extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  }
  render() {
    const {cards} = this.props;
    return (
      <section className={styles.component} >
        <div className={styles.cards}>
          {cards.map(cardData => (
            <div key={cardData.id} className={styles.wrapper}>
              <Card key={cardData.id} {...cardData} />
              <Link className={styles.link} to={`/list/${cardData.listId}`}>
                <p>{`Column: ${cardData.columnId}, List: ${cardData.listId}`}</p>
              </Link>
            </div>
          ))}
        </div>
      </section >
    );
  }
}

export default SearchResult;
