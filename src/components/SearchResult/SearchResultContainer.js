import { connect } from 'react-redux';
import SearchResult from './SearchResult';
import { getSearchCardsForColumn } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const string = props.match.params.id;

  return {
    cards: getSearchCardsForColumn(state, string),
  };
};

export default connect(mapStateToProps)(SearchResult);