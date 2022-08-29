import {createSlice} from '@reduxjs/toolkit';

import {LanguageData} from '../data/LanguageData'

export const languageSlice = createSlice({
  name: 'languages',
  initialState: {value: LanguageData},
  reducers: {
    addLanguage: (state, action) => {
      state.value.push(action.payload);
    },
    deleteLanguage: (state, action) => {
      state.value = state.value.filter((i) => i.id !== action.payload.id);
    },
    updateLanguage: (state,action) => {
      state.value.map((i) => {
        if (i.id === action.payload.id) {
            i.language = action.payload.language,
            i.level = action.payload.level
        }
      })
    }
  }
});

export const {addLanguage, deleteLanguage, updateLanguage} = languageSlice.actions;
export default languageSlice.reducer;