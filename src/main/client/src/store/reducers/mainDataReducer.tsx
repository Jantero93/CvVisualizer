import { Person, WorkExperience, Workplace } from '../../types/types';
import { mainDataInitialState } from './initialStates';

export interface MainDataState {
  persons: Person[];
  workExperiences: WorkExperience[];
  workplaces: Workplace[];
}

const initialState: MainDataState = mainDataInitialState;

export type AddWorkExperienceType = {
  type: 'ADD_WORKEXPERIENCE';
  payload: WorkExperience;
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
  | AddWorkExperienceType
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

    case 'ADD_WORKEXPERIENCE':
      return {
        ...state,
        workExperiences: state.workExperiences.concat(action.payload)
      };

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
