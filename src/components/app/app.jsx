import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import NotFound from 'components/not-found/not-found';
import { AppRoute } from 'const';
import StubPage from 'components/stub-page/stub-page';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={AppRoute.QuestCard}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route exact path={AppRoute.Catalog}>
          <Home />
        </Route>
        <Route exact path={AppRoute.ForBeginners}>
          <StubPage />
        </Route>
        <Route exact path={AppRoute.Reviews}>
          <StubPage />
        </Route>
        <Route exact path={AppRoute.Stock}>
          <StubPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
