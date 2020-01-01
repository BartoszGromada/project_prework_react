import React from 'react';
import styles from './list.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  }
  static propTypes = {
    title: PropTypes.node.isRequired,
    titleColumn: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }  
  render() {
    return (
      <section className={styles.component}>
          <Hero titleText={this.props.title} image={this.props.image}/>
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>
          {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
      </section>
    )
  }
}

export default List;
