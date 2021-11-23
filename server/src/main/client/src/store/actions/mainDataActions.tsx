import { WorkExperience, Workplace } from '../../types/types';
import {
  AddWorkExperienceType,
  AddWorkPlaceType,
  SetWorkPlaceType
} from '../reducers/mainDataReducer';

export const addWorkExperience = (experience: WorkExperience): AddWorkExperienceType  => ({
  payload: experience,
  type: 'ADD_WORKEXPERIENCE'
})

export const addWorkPlace = (work: Workplace): AddWorkPlaceType => ({
  payload: work,
  type: 'ADD_WORKPLACE'
});

export const setWorkPlaces = (workplaces: Workplace[]): SetWorkPlaceType => ({
  payload: workplaces,
  type: 'SET_WORKPLACES'
});
