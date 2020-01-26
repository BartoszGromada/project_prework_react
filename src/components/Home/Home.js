import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import ListLink from '../ListLink/ListLink.js';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator.js';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
  }
  render() {
    const {title, subtitle, lists, addList} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <div>
          {lists.map(listData => (
            <ListLink key={listData.id} {...listData} />
          ))}
        </div>
        <div className={styles.creator}>	
          <Creator text={settings.creator.listText} action={addList}/>	
        </div>
      </main>
    );
  }
}

export default Home;