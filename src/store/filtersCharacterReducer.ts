import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Character from '../models/Character';

interface FiltersState {
  cachedInfoCharacter: Object | null;
  cachedCharacter: Character[] | null;
  selectedCharacter: Character | null;
  atributos: Partial<Character> | null;
  page: number;
}

const initialState: FiltersState = {
  cachedInfoCharacter: null,
  cachedCharacter: null,
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
    cachedCharacter: (state, action: PayloadAction<{data:Character[], info: Object}>) => {
      state.cachedCharacter = [ ...action.payload.data ];
      state.cachedInfoCharacter = { ...action.payload.info };
    },
    cleanCachedCharacter: (state) => {
      state.cachedCharacter = null;
    },
    // Reiniciar los filtros al estado inicial
    clearFilters: () => initialState,
  },
});

export const { setFiltersCharacter, clearFilters, setCharacter, cleanCachedCharacter, cachedCharacter } = filtersCharacterSlice.actions;
export default filtersCharacterSlice.reducer;
