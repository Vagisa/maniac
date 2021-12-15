import logo from 'assets/img/logo.svg';
import { AppRoute } from 'const';
import { useLocation } from 'react-router-dom';
import * as S from './header.styled';

const Header = () => {
  const location = useLocation();
  return (
  <S.StyledHeader>
    <S.HeaderWrapper>
      <S.LogoLink to="/">
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.LogoLink>
      <S.Navigation>
        <S.Links>
          <S.LinkItem>
            <S.Link
              $isActiveLink={location.pathname===AppRoute.Catalog}
              to={AppRoute.Catalog}>
              Квесты
            </S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link
              $isActiveLink={location.pathname===AppRoute.ForBeginners}
              to={AppRoute.ForBeginners}>
              Новичкам
            </S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link
              $isActiveLink={location.pathname===AppRoute.Reviews}
              to={AppRoute.Reviews}>
              Отзывы
            </S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link
              $isActiveLink={location.pathname===AppRoute.Stock}
              to={AppRoute.Stock}>
              Акции
            </S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link
              $isActiveLink={location.pathname===AppRoute.Contacts}
              to={AppRoute.Contacts}>
              Контакты
            </S.Link>
          </S.LinkItem>
        </S.Links>
      </S.Navigation>
      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
)};

export default Header;
