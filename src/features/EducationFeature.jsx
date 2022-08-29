import {createSlice} from '@reduxjs/toolkit';

import {EducationData} from '../data/EducationData'

export const educationSlice = createSlice({
  name: 'educations',
  initialState: {value: EducationData},
  reducers: {
    addEducation: (state, action) => {
      state.value.push(action.payload);
    },
    deleteEducation: (state, action) => {
      state.value = state.value.filter((i) => i.id !== action.payload.id);
    },
    updateEducation: (state,action) => {
      state.value.map((i) => {
        if (i.id === action.payload.id) {
            i.title = action.payload.title,
            i.subtitle = action.payload.subtitle,
            i.text = action.payload.text,
            i.dateInicio = action.payload.dateInicio,
            i.dateFin = action.payload.dateFin
            i.stillStudyin = action.payload.stillStudyin
        }
      })
    }
  }
});

export const {addEducation, deleteEducation, updateEducation} = educationSlice.actions;
export default educationSlice.reducer;