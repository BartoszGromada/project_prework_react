import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        <List title={['Things to do ', <sup>soon!</sup>]} image={"http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"}/>
      </main>
    )
  }
}

export default App;
