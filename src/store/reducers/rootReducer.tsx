import { combineReducers } from '@reduxjs/toolkit';
import { mainDataReducer } from './mainDataReducer';
import { mapReducer } from './mapReducer';
import { modalReducer } from './modalReducer';
import { viewerReducer } from './viewerReducer';

export const rootReducer = combineReducers({
  map: mapReducer,
  mainData: mainDataReducer,
  modal: modalReducer,
  viewer: viewerReducer
});

export type RootState = ReturnType<typeof rootReducer>;
