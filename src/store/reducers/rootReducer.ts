import { combineReducers } from '@reduxjs/toolkit';
import { mapReducer } from './mapReducer';
import { modalReducer } from './modalReducer';
import { viewerReducer } from './viewerReducer';

export const rootReducer = combineReducers({
  map: mapReducer,
  modal: modalReducer,
  viewer: viewerReducer
});

export type RootState = ReturnType<typeof rootReducer>;
