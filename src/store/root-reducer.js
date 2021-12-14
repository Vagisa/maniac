import { createReducer } from '@reduxjs/toolkit';
import { fillQuestItem, fillQuestsList } from './actions';

export const initialState = {
  quests: [],
  quest: null,
}

export const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fillQuestsList, (state, action) => {
      state.quests = action.payload;
    })
    .addCase(fillQuestItem, (state, action) => {
      state.quest = action.payload;
    });
})
