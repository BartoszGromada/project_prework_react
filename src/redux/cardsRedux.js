import initialStoreData from './../data/dataStore';

// selectors
export const getCardsForColumn = ({cards}, columnid) => cards.filter(card => card.columnid == columnid);
export const getSearchCardsForColumn = ({ cards, columns, lists} , searchString) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).map(card => ({
  ...card,
  columnName: columns.find(col => col.id === card.columnid).title,
  listName: lists.find(list => list.id === card.listId).title
}));
export const countAllCards = ({ cards }) => cards.length;

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: `card-${countAllCards(initialStoreData) + 1}`}, type: ADD_CARD });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}