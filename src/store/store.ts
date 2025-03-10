import { configureStore } from '@reduxjs/toolkit';
import filtersCharacterReducer from './filtersCharacterReducer';
import filtersLocationReducer from './filtersLocationReducer';
import filtersEpisodeReducer from './filtersEpisodeReducer';

// Crear el store
export const store = configureStore({
  reducer: {
    filtersCharacter: filtersCharacterReducer,
    filtersLocation: filtersLocationReducer,
    filtersEpisode: filtersEpisodeReducer,
  },
});

// Definir tipos para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
