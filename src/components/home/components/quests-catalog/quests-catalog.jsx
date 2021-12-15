import { useSelector } from 'react-redux';
import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { useEffect, useState } from 'react';
import QuestItem from 'components/quest-item/quest-item';
import * as S from './quests-catalog.styled';
import { Subjects } from 'const';
import { getQuests } from 'store/selectors';
import { useDispatch } from 'react-redux';
import { fetchQuestsAction } from 'store/api-actions';

const QuestsCatalog = () => {
  const quests = useSelector(getQuests);
  const [activeSubject, setActiveSubject] = useState(Subjects.AllQuests);

  const questsFiltered = (activeSubject === Subjects.AllQuests) ? quests
    : quests.filter((quest) => quest.type === activeSubject);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestsAction());
  }, [dispatch]);

  return (
  <>
    <S.Tabs>
      <S.TabItem>
        <S.TabBtn
          isActive={activeSubject===Subjects.AllQuests}
          onClick={() => setActiveSubject(Subjects.AllQuests)}>
          <IconAllQuests />
          <S.TabTitle>Все квесты</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn
          isActive={activeSubject===Subjects.Adventures}
          onClick={() => setActiveSubject(Subjects.Adventures)}>
          <IconAdventures />
          <S.TabTitle>Приключения</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn
          isActive={activeSubject===Subjects.Horror}
          onClick={() => setActiveSubject(Subjects.Horror)}>
          <IconHorrors />
          <S.TabTitle>Ужасы</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn
          isActive={activeSubject===Subjects.Mystic}
          onClick={() => setActiveSubject(Subjects.Mystic)}>
          <IconMystic />
          <S.TabTitle>Мистика</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn
          isActive={activeSubject===Subjects.Detective}
          onClick={() => setActiveSubject(Subjects.Detective)}>
          <IconDetective />
          <S.TabTitle>Детектив</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      <S.TabItem>
        <S.TabBtn
          isActive={activeSubject===Subjects.SciFi}
          onClick={() => setActiveSubject(Subjects.SciFi)}>
          <IconScifi />
          <S.TabTitle>Sci-fi</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>
    </S.Tabs>

    <S.QuestsList >
      {questsFiltered.slice().map((quest) => (
        <QuestItem key={quest.id} quest={quest} />
      ))}
    </S.QuestsList>
  </>
)};

export default QuestsCatalog;
