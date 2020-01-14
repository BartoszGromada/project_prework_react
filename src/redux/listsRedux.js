import shortid from 'shortid';

// selectors
export const getListsforHome = ({lists}, id) => lists.filter(list => list.id == id);
export const getSearchListsforHome = ({ lists }, searchString) => lists.filter(list => new RegExp(searchString, 'i').test(list.title));

// action name creator
const reducerName = 'lists';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_LIST = createActionName('ADD_LIST');

// action creators
export const createActionAddList = payload => ({ payload: { ...payload, id: `list-${shortid.generate()}`}, type: ADD_LIST });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_LIST:
      return [...state, action.payload];
    default:
      return state;
  }
}