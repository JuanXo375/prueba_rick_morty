import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Character from '../models/Character';

interface FiltersState {
  selectedCharacter: Character | null;
  atributos: Partial<Character> | null;
  page: number;
}

const initialState: FiltersState = {
  selectedCharacter: null,
  atributos: null,
  page: 1,
};

const filtersCharacterSlice = createSlice({
  name: 'filtersCharacter',
  initialState,
  reducers: {
    // Actualizar los filtros con un objeto parcial de Character
    setFiltersCharacter: (state, action: PayloadAction<Partial<Character>>) => {
      state.atributos = { ...state.atributos, ...action.payload };
    },
    setCharacter: (state, action: PayloadAction<Character>) => {
      state.selectedCharacter = { ...action.payload };
    },
    // Reiniciar los filtros al estado inicial
    clearFilters: () => initialState,
  },
});

export const { setFiltersCharacter, clearFilters, setCharacter } = filtersCharacterSlice.actions;
export default filtersCharacterSlice.reducer;
