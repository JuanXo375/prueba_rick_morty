import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Character from '../models/Character';

interface FiltersState {
  atributos: Partial<Character> | null;
  page: number;
}

const initialState: FiltersState = {
  atributos: null,
  page: 1,
};

const filtersCharacterSlice = createSlice({
  name: 'filtersCharacter',
  initialState,
  reducers: {
    // Actualizar los filtros con un objeto parcial de Character
    setFilters: (state, action: PayloadAction<Partial<Character>>) => {
      state.atributos = { ...state.atributos, ...action.payload };
    },
    
    // Reiniciar los filtros al estado inicial
    clearFilters: () => initialState,
  },
});

export const { setFilters, clearFilters } = filtersCharacterSlice.actions;
export default filtersCharacterSlice.reducer;
