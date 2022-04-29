import styled from 'styled-components';

const Container = styled.div`
    grid-area: 'page';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width:500px;
    max-height: 500px;
    padding: 20px 40px;
`;

export default function AdmProducts () {
  return (
    <Container>
      Adm product
    </Container>
  );
};