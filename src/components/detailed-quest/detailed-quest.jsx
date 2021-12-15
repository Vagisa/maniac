import { useEffect, useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useSelector } from 'react-redux';
import { getQuest } from 'store/selectors';
import { useDispatch } from 'react-redux';
import { fetchQuestItemAction } from 'store/api-actions';
import { LevelDisplayName, TypeDisplayName } from 'const';
import NotFound from 'components/not-found/not-found';
import { useParams } from 'react-router';

const DetailedQuest = () => {
  const quest = useSelector(getQuest);
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const {id} = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestItemAction(id));
  }, [dispatch, id]);

  if (!quest) {
    return <NotFound />;
  }

  const {
    title,
    description,
    coverImg,
    type,
    level,
    peopleCount: [peopleCountFrom, peopleCountTo],
    duration,
  } = quest;

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };


  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${coverImg}`}
          alt={title}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{TypeDisplayName[type]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${peopleCountFrom}–${peopleCountTo} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{LevelDisplayName[level]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened &&
        <BookingModal onClose={() => setIsBookingModalOpened(false)}/>}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
