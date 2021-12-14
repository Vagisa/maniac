import { createAction } from '@reduxjs/toolkit';
import { ActionType } from 'const';

export const setQuest = createAction(
  ActionType.SetQuest,
  (quest) => ({payload: quest}),
);

export const fillQuestsList = createAction(
  ActionType.FillQuestsList,
  (quests) => ({payload: quests}),
);

export const sendNewOrder = createAction(
  ActionType.SendNewOrder,
  (order) => ({payload: order}),
);
