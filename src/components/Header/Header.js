import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';
import Container from '../Container/Container.js';
import Icon from '../Icons/Icon';
import Search from '../Search/Search';

class Header extends React.Component {
  static propTypes = {
    icon: PropTypes.node,
    toNothing: PropTypes.string,
    toInfo: PropTypes.string,
    toFAQ: PropTypes.string,
    classNameActive: PropTypes.string,
  }
  static defaultProps = {
    icon: settings.menu.icon,
    toNothing: settings.menu.toNothing,
    toInfo: settings.menu.toInfo,
    toFAQ: settings.menu.toFAQ,
    classNameActive: settings.menu.classNameActive,
  }
  render() { 
    const {icon, toNothing, toInfo, toFAQ, classNameActive} = this.props;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to={toNothing}>
              <Icon name={icon}/>
            </Link>
            <nav>
              <NavLink exact to={toNothing} activeClassName={classNameActive}>Home</NavLink>
              <NavLink exact to={toInfo} activeClassName={classNameActive}>Info</NavLink>
              <NavLink exact to={toFAQ} activeClassName={classNameActive}>FAQ</NavLink>
            </nav>
            <Search/>
          </div>
        </Container>
      </header>
    );
  }
}
  
export default Header;