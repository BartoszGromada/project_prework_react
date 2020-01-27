import {connect} from 'react-redux';
import Home from './Home.js';
import {createActionAddList, getListsforHome } from '../../redux/listsRedux.js';


const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const title = state.app.title;
  const subtitle = state.app.subtitle;
  const lists = state.lists;
  return {
    title, subtitle, lists,
    newLists: getListsforHome(state, id),
  };
};

const mapDispatchToProps = (dispatch) => ({
  addList: title => dispatch(createActionAddList({
    title,
    description: 'New List',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);