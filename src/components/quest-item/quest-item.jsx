import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { AppRoute, levelDisplayName } from 'const';
import * as S from './quest-item.styled';

const QuestItem = ({quest}) => {
  const {
    id,
    title,
    previewImg,
    level,
    peopleCount: [peopleCountFrom, peopleCountTo],
  } = quest;

  return (<S.QuestItem>
    <S.QuestItemLink to={AppRoute.QuestCard.replace(':id', id)}>
      <S.Quest>
        <S.QuestImage
          src={previewImg}
          width="344"
          height="232"
          alt={`квест ${title}`}
        />

        <S.QuestContent>
          <S.QuestTitle>{title}</S.QuestTitle>

          <S.QuestFeatures>
            <S.QuestFeatureItem>
              <IconPerson />
              {`${peopleCountFrom}–${peopleCountTo} чел`}
            </S.QuestFeatureItem>
            <S.QuestFeatureItem>
              <IconPuzzle />
              {levelDisplayName[level]}
            </S.QuestFeatureItem>
          </S.QuestFeatures>
        </S.QuestContent>
      </S.Quest>
    </S.QuestItemLink>
  </S.QuestItem>
)};

export default QuestItem;
