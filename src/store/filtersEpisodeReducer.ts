import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Episode from '../models/Episode';

// Definir el estado inicial tipado
interface FiltersState {
  atributos: Partial<Episode> | null; // Puede ser un subconjunto de Episode o null
  page: number;
}

const initialState: FiltersState = {
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
    
    // Reiniciar los filtros al estado inicial
    clearFilters: () => initialState,
  },
});

// Exportar las acciones y el reducer
export const { setFiltersEpisode, clearFilters } = filtersEpisodeSlice.actions;
export default filtersEpisodeSlice.reducer;
