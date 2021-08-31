import { combineReducers } from '@reduxjs/toolkit';
import { mapReducer } from './mapReducer';
import { modalReducer } from './modalReducer';

export const rootReducer = combineReducers({
  map: mapReducer,
  modal: modalReducer
});

export type RootState = ReturnType<typeof rootReducer>;
