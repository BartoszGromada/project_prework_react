import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData, settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    lists: [],
    title: 'testowe',
    description: 'Sprawdzajace',
    image: '',
  }

  static propTypes = {
    title: PropTypes.node.isRequired,
    lists: PropTypes.array,
    description: PropTypes.string,
    image: PropTypes.string,
  }

  addList(title){
    this.setState(state => (
      {
        title: title,
        description: 'testowy',
      }
    ));
  }
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <div>
          <List {...listData} />  
        </div>
        <div>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>  
        </div>
      </main>
    )
  }
}

export default App;