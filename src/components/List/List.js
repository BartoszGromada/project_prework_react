import React from 'react';
import styles from './list.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    titleColumn: PropTypes.node.isRequired,
    children: PropTypes.node,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }  
  render() {
    return (
      <section className={styles.component}>
          <Hero titleText={this.props.title} image={this.props.image}/>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column titleColumn={'1'}/>
          <Column titleColumn={'2'}/>
          <Column titleColumn={'3'}/>
        </div>
      </section>
    )
  }
}

export default List;
