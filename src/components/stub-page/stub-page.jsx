import { Container, MainLayout } from 'components/common/common';

function StubPage () {
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
            Данная страница находится в разработке.
          </h1>
        </main>
      </MainLayout>
    </Container>
  );
}

export default StubPage;
