import { useDispatch } from 'react-redux';
import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { sendNewOrderAction } from 'store/api-actions';
import { useState } from 'react';

const BookingModal = ({onClose}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [peopleCount, setPeopleCount] = useState(null);
  const [phone, setPhone] = useState('');
  const [isLegal, setIsLegal] = useState(false);


  const handleSubmit = (evt) => {
    evt.preventDefault();
    if( name !== ''&& peopleCount !== 0 && phone !== '' && isLegal)
    dispatch(sendNewOrderAction({name, peopleCount, phone, isLegal}));
    onClose();
  };


  return (
  <S.BlockLayer>
    <S.Modal>
      <S.ModalCloseBtn onClick={onClose}>
        <IconClose width="16" height="16" />
        <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <S.BookingForm
        onSubmit={handleSubmit}
        action="https://echo.htmlacademy.ru"
        method="post"
        id="booking-form"
      >
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
          <S.BookingInput
            onChange={(evt) => {setName(evt.target.value)}}
            type="text"
            id="booking-name"
            name="booking-name"
            placeholder="Имя"
            required
            value={name}
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон
          </S.BookingLabel>
          <S.BookingInput
            onChange={(evt) => {setPhone(evt.target.value)}}
            type="tel"
            id="booking-phone"
            name="booking-phone"
            placeholder="Телефон"
            required
            maxLength={10}
            value={phone}
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-people">
            Количество участников
          </S.BookingLabel>
          <S.BookingInput
            onChange={(evt) => {setPeopleCount(Number(evt.target.value))}}
            type="number"
            id="booking-people"
            name="booking-people"
            placeholder="Количество участников"
            required
            value={peopleCount || ''}
          />
        </S.BookingField>
        <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput
            type="checkbox"
            id="booking-legal"
            name="booking-legal"
            required
            onChange={() => {setIsLegal(!isLegal)}}
            checked={isLegal}
          />
          <S.BookingCheckboxLabel
            className="checkbox-label"
            htmlFor="booking-legal"
          >
            <S.BookingCheckboxText>
              Я согласен с{' '}
              <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
              </S.BookingLegalLink>
            </S.BookingCheckboxText>
          </S.BookingCheckboxLabel>
        </S.BookingCheckboxWrapper>
      </S.BookingForm>
    </S.Modal>
  </S.BlockLayer>
)};

export default BookingModal;
