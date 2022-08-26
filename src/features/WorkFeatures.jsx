import {createSlice} from '@reduxjs/toolkit';

import {WorkData} from '../data/WorkData'

const reset = {title:'', subtitle:'', text:'', dateInicio:'', dateFin:'', stillWorkin:''}

export const workSlice = createSlice({
  name: 'works',
  initialState: {value: WorkData},
  reducers: {
    addWork: (state, action) => {
      state.value.push(action.payload);
    },
    deleteWork: (state, action) => {
      state.value = state.value.filter((i) => i.id !== action.payload.id);
    },
    updateTitle: (state,action) => {
      state.value.map((i) => {
        if (i.id === action.payload.id) {
            i.title = action.payload.title,
            i.subtitle = action.payload.subtitle,
            i.text = action.payload.text,
            i.dateInicio = action.payload.dateInicio,
            i.dateFin = action.payload.dateFin,
            i.stillWorkin = action.payload.stillWorkin
        }
      })
    }, 
    clearWork: (state) => {
      state.value = reset
    }
  }
});

export const {addWork, deleteWork, updateTitle, clearWork} = workSlice.actions;
export default workSlice.reducer;