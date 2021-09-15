import { Person, Workplace } from '../../types/types';

import { TestMainStateData } from '../mockupMainData';

export interface MainDataState {
  persons: Person[];
  workplaces: Workplace[];
}

const initialState: MainDataState = TestMainStateData;

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
