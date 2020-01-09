/* eslint-disable linebreak-style */
import {connect} from 'react-redux';
import List from './List.js';
import {getColumnsForList, createActionAddColumn} from './../../redux/columnsRedux.js';

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);