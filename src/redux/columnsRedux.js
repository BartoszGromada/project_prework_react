import initialStoreData from './../data/dataStore';

// selectors
export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);
export const getSearchColumnsForList = ({ columns, lists }, searchString) => columns.filter(column => new RegExp(searchString, 'i').test(column.title)).map(column => ({
  ...column,
  listName: lists.find(list => list.id === column.listId).title,
}));
export const countAllColumns = ({ columns }) => columns.length;

// action name creator
const reducerName = 'columns';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators
export const createActionAddColumn = payload => ({ payload: { ...payload, id: `column-${countAllColumns(initialStoreData) + 1}`}, type: ADD_COLUMN });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_COLUMN:
      return [...state, action.payload];
    default:
      return state;
  }
}