import { APIRoute } from 'const';
import { fillQuestsList, sendNewOrder, fillQuestItem } from './actions';

export const fetchQuestItemAction = (questId) =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get(APIRoute.QuestCard + questId);
    dispatch(fillQuestItem(data));
  };

export const fetchQuestsAction = () =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get(APIRoute.Quests);
    dispatch(fillQuestsList(data));
  };

export const sendNewOrderAction = ({name, peopleCount, phone, isLegal}) =>
  async (dispatch, _getState, api) => {
    const {data} = await api.post(APIRoute.Orders, {name, peopleCount, phone, isLegal});
    dispatch(sendNewOrder(data));
  };
