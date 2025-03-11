import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Location from '../models/Location';

// Definir el estado inicial tipado
interface FiltersState {
  atributos: Partial<Location> | null; // Puede ser un subconjunto de Location o null
  page: number;
}

const initialState: FiltersState = {
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
    
    // Reiniciar los filtros al estado inicial
    clearFilters: () => initialState,
  },
});

// Exportar las acciones y el reducer
export const { setFiltersLocation, clearFilters } = filtersLocationSlice.actions;
export default filtersLocationSlice.reducer;
