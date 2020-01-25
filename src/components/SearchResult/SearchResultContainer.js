import { connect } from 'react-redux';
import SearchResult from './SearchResult';
import { getSearchCardsForColumn} from '../../redux/cardsRedux';
import { getSearchColumnsForList} from '../../redux/columnsRedux';
import { getSearchListsforHome } from '../../redux/listsRedux';

const mapStateToProps = (state, props) => {
  const string = props.match.params.id;

  return {
    cards: getSearchCardsForColumn(state, string),
    columns: getSearchColumnsForList(state, string),
    lists: getSearchListsforHome(state, string),
  };
};

export default connect(mapStateToProps)(SearchResult);