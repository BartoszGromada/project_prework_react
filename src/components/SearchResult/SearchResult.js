import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import {Link} from 'react-router-dom';


class SearchResult extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    columns: PropTypes.array,
    lists:  PropTypes.array,
  }
  render() {
    const {cards, columns, lists} = this.props;
    return (
      <section className={styles.component} >
        <div className={styles.cards}>
          <h2>CARDS</h2>
          {cards.map(cardData => (
            <div key={cardData.id} className={styles.wrapper}>
              <Card key={cardData.id} {...cardData} />
              <Link className={styles.link} to={`/list/${cardData.listId}`}>
                <p>{`Column: ${cardData.columnid}, List: ${cardData.listId}`}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.cards}>
          <h2>COLUMNS</h2>
          {columns.map(columnData => (
            <div key={columnData.id} className={styles.wrapper}>
              <Card key={columnData.id} {...columnData} />
              <Link className={styles.link} to={`/list/${columnData.listId}`}>
                <p>{`Column: ${columnData.id}, List: ${columnData.listId}`}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.cards}>
          <h2>LISTS</h2>
          {lists.map(listData => (
            <div key={listData.id} className={styles.wrapper}>
              <Card key={listData.id} {...listData} />
              <Link className={styles.link} to={`/list/${listData.listId}`}>
                <p>{`List: ${listData.id}`}</p>
              </Link>
            </div>
          ))}
        </div>
      </section >
    );
  }
}

export default SearchResult;
