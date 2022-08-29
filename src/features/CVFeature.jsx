import {createSlice} from '@reduxjs/toolkit';

import {CVData} from '../data/CVData'

export const cvSlice = createSlice({
  name: 'cvs',
  initialState: {value: CVData},
  reducers: {
    addCV: (state, action) => {
      state.value.push(action.payload);
    },
    deleteCV: (state, action) => {
      state.value = state.value.filter((i) => i.id !== action.payload.id);
    },
    updateCV: (state,action) => {
      state.value.map((i) => {
        if (i.id === action.payload.id) {
            i.files = action.payload.files
        }
      })
    }, 
    clearWork: (state) => {
      state.value = reset
    }
  }
});

export const {addCV, deleteCV, updateCV} = cvSlice.actions;
export default cvSlice.reducer;