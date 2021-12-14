import { createReducer } from '@reduxjs/toolkit';
import { fillQuestsList } from './actions'

export const initialState = {
  quests: [],
}

export const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fillQuestsList, (state, action) => {
      state.quests = action.payload;
    });
})
