import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Episode from '../models/Episode';
import Character from '../models/Character';

// Definir el estado inicial tipado
interface FiltersState {
  cachedCharacter: Character[] | null;
  cachedInfoCharacter: Object | null;
  atributos: Partial<Episode> | null; // Puede ser un subconjunto de Episode o null
  page: number;
}

const initialState: FiltersState = {
  cachedInfoCharacter: null,
  cachedCharacter: null,
  atributos: {id:1},
  page: 1,
};

// Crear el slice con las acciones
const filtersEpisodeSlice = createSlice({
  name: 'filtersEpisode',
  initialState,
  reducers: {
    // Actualizar los filtros con un objeto parcial de Episode
    setFiltersEpisode: (state, action: PayloadAction<Partial<Episode>>) => {
      state.atributos = { ...state.atributos, ...action.payload };
    },
    cachedEpisode: (state, action: PayloadAction<{data:Character[], info: Object}>) => {
      state.cachedCharacter = [ ...action.payload.data ];
      state.cachedInfoCharacter = { ...action.payload.info };
    },
    cleanCachedEpisode: (state) => {
      state.cachedCharacter = null;
      state.cachedInfoCharacter = null;
    },
    // Reiniciar los filtros al estado inicial
    clearFilters: () => initialState,
  },
});

// Exportar las acciones y el reducer
export const { setFiltersEpisode, clearFilters, cachedEpisode, cleanCachedEpisode } = filtersEpisodeSlice.actions;
export default filtersEpisodeSlice.reducer;
