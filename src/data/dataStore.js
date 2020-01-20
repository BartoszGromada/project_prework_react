export const settings = {
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    buttonChange: 'Change',
    columnText: 'Add new column',
    cardText: 'Add new card',
    listText: 'Add new list',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  menu: {
    icon: 'rocket',
    toNothing: '/',
    toInfo: '/info',
    toFAQ: '/faq',
    classNameActive: 'active',
  },
  FAQ: {
    title: 'FAQ',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  info: {
    title: 'INFO',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
};

export const pageContents = {
  id: 'home-1',
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Things to do <sup>later!</sup>',
    description: '"Interesting" House task',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-3',
    title: 'Things to do <sup>every day</sup>',
    description: 'Boring shopping',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnid: 'column-1',
    listId: 'list-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnid: 'column-1',
    listId: 'list-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnid: 'column-2',
    listId: 'list-1',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnid: 'column-2',
    listId: 'list-1',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnid: 'column-3',
    listId: 'list-1',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnid: 'column-3',
    listId: 'list-1',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
