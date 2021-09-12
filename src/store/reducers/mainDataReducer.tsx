import { Person, Workplace } from '../../types/types';

export interface MainDataState {
  persons: Person[];
  workplaces: Workplace[];
}

const initialState: MainDataState = {
  persons: [
    {
      id: '1',
      education: 'education',
      username: 'username',
      name: 'Mathew'
    },
    {
      id: '2',
      education: 'steel worker',
      username: 'username2',
      name: 'Toby'
    },
    {
      id: '3',
      education: 'Office worker',
      username: 'office123',
      name: 'Jim'
    }
  ],
  workplaces: [
    {
      location: { latitude: 61.5, longitude: 23.79 },
      name: 'asd',
      id: '1',
      address: 'Tie street 33'
    },
    {
      location: { latitude: 61.4, longitude: 23.5 },
      name: 'ad',
      id: '2',
      address: 'cityStreet 23'
    },
    {
      location: { latitude: 60.5, longitude: 23.79 },
      name: 'asd',
      id: '3',
      address: 'Tie street 33'
    },
    {
      location: { latitude: 61.4, longitude: 21.5 },
      name: 'ad',
      id: '4',
      address: 'cityStreet 23'
    },
    {
      location: { latitude: 63.4, longitude: 23.79 },
      name: 'asd',
      id: '5',
      address: 'Tie street 33'
    },
    {
      location: { latitude: 60.4, longitude: 23.8 },
      name: 'ad',
      id: '6',
      address: 'cityStreet 23'
    },
    {
      location: { latitude: 61.7, longitude: 23.2 },
      name: 'asd',
      id: '7',
      address: 'Tie street 33'
    },
    {
      location: { latitude: 62.49, longitude: 20.5 },
      name: 'ad',
      id: '8',
      address: 'cityStreet 23'
    },
    {
      location: { latitude: 60.2, longitude: 19.79 },
      name: 'asd',
      id: '9',
      address: 'Tie street 33'
    },
    {
      location: { latitude: 58.4, longitude: 23.5 },
      name: 'ad',
      id: '10',
      address: 'cityStreet 23'
    },
    {
      location: { latitude: 61.1, longitude: 23.29 },
      name: 'asd',
      id: '11',
      address: 'Tie street 33'
    },
    {
      location: { latitude: 61.9, longitude: 23.9 },
      name: 'ad',
      id: '12',
      address: 'cityStreet 23'
    },
    {
      location: { latitude: 60.8, longitude: 22.79 },
      name: 'asd',
      id: '13',
      address: 'Tie street 33'
    },
    {
      location: { latitude: 61.4, longitude: 20.5 },
      name: 'ad',
      id: '14',
      address: 'cityStreet 23'
    }
  ]
};

export type AddWorkPlaceType = { type: 'ADD_WORKPLACE'; payload: Workplace };
export type RemoveWorkPlaceType = {
  type: 'REMOVE_WORKPLACE';
  payload: Workplace;
};
export type SetWorkPlaceType = {
  type: 'SET_WORKPLACES';
  payload: Workplace[];
};

export type MainDataActions =
  | AddWorkPlaceType
  | RemoveWorkPlaceType
  | SetWorkPlaceType;

export const mainDataReducer = (
  state: MainDataState = initialState,
  action: MainDataActions
): MainDataState => {
  switch (action.type) {
    case 'ADD_WORKPLACE':
      return { ...state, workplaces: state.workplaces.concat(action.payload) };

    case 'REMOVE_WORKPLACE':
      return {
        ...state,
        workplaces: state.workplaces.filter(
          (work: Workplace) => action.payload !== work
        )
      };

    case 'SET_WORKPLACES':
      return { ...state, workplaces: action.payload };

    default:
      return state;
  }
};
