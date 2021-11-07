import { Workplace } from '../../types/types';
import {
  AddWorkPlaceType,
  SetWorkPlaceType
} from '../reducers/mainDataReducer';

export const addWorkPlace = (work: Workplace): AddWorkPlaceType => ({
  payload: work,
  type: 'ADD_WORKPLACE'
});

export const setWorkPlaces = (workplaces: Workplace[]): SetWorkPlaceType => ({
  payload: workplaces,
  type: 'SET_WORKPLACES'
});
