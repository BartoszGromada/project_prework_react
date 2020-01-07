/* eslint-disable linebreak-style */
import {connect} from 'react-redux';
import Column from './Column.js';

export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  columns: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);