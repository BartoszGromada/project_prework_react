/* eslint-disable linebreak-style */
import {connect} from 'react-redux';
import App from './App.js';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

export default connect(mapStateToProps)(App);