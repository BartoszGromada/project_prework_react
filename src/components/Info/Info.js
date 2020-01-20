import React from 'react';
import PropTypes from 'prop-types';
import styles from './Info.scss';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';

const Info = ({ titleText, image })  => (
  <Container>
    <Hero titleText={titleText} image={image}/>
    <h2>Info</h2>
    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </Container>
);

Info.propTypes = {
  titleText: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
};

Info.defaultProps = {
  titleText: settings.info.title,
  image: settings.info.image,
};

export default Info;