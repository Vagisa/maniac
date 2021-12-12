import { Link } from 'react-router-dom';
import { Container, MainLayout } from 'components/common/common';

function NotFound () {
  const style = {
    marginTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
  return (
    <Container>
      <MainLayout>
        <main style={style}>
          <h1>
            404.
            <br />
            <small>Page not found</small>
          </h1>
          <Link to="/">Go to main page</Link>
          <img src="img/not-faund.jpg" alt="Not-faund" />
        </main>
      </MainLayout>
    </Container>
  );
}

export default NotFound;
