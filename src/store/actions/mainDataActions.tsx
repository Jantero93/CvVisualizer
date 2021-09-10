import { Workplace } from '../../types/types';
import { AddWorkPlaceType } from '../reducers/mainDataReducer';

export const addWorkPlace = (work: Workplace): AddWorkPlaceType => ({
  payload: work,
  type: 'ADD_WORKPLACE'
});
