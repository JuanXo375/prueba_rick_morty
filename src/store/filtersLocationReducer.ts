import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Location from '../models/Location';
import Character from '../models/Character';

// Definir el estado inicial tipado
interface FiltersState {
  cachedCharacter: Character[] | null;
  cachedInfoCharacter: Object | null;
  atributos: Partial<Location> | null; // Puede ser un subconjunto de Location o null
  page: number;
}

const initialState: FiltersState = {
  cachedCharacter: null,
  cachedInfoCharacter: null,
  atributos: {id:1},
  page: 1,
};

// Crear el slice con las acciones
const filtersLocationSlice = createSlice({
  name: 'filtersLocation',
  initialState,
  reducers: {
    // Actualizar los filtros con un objeto parcial de Location
    setFiltersLocation: (state, action: PayloadAction<Partial<Location>>) => {
      state.atributos = { ...state.atributos, ...action.payload };
    },
    cachedLocation: (state, action: PayloadAction<{data:Character[], info: Object}>) => {
      state.cachedCharacter = [ ...action.payload.data ];
      state.cachedInfoCharacter = { ...action.payload.info };
    },
    cleanCachedLocation: (state) => {
      state.cachedCharacter = null;
      state.cachedInfoCharacter = null;
    },
    // Reiniciar los filtros al estado inicial
    clearFilters: () => initialState,
  },
});

// Exportar las acciones y el reducer
export const { setFiltersLocation, clearFilters, cleanCachedLocation, cachedLocation } = filtersLocationSlice.actions;
export default filtersLocationSlice.reducer;
