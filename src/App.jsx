import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import AppRoutes from './routes/AppRoutes';

import Header from './components/Header';
import Navbar from './components/Navbar';

const theme = {
  colors: {
    base: '#fffdfc', 
    pink:'#EE5E69',
    pinkGradient: 'linear-gradient(90deg, rgba(238,166,171,1) 0%, rgba(238,94,105,1) 100%)',
    gray: '#B9BBC3',
    black: '#272727'
  },

  size: {
    sm: '330px',
    md: '700px',
    lg: '999px',
    xl: '1350px'
  }
};

const Container = styled.div`
  position:relative;
  display: grid;
  place-items: center;
  grid-template-rows: 60px 1fr;
  overflow-y: auto;
  height: 100vh;
  width: 100%;
    /* margin: 0 auto; */
  /* padding: 0 10px; */
  background: ${theme.colors.base};
`

export default function App() {
  return (
  <ThemeProvider theme={theme}>
    <Container>
      <Header/>
      <AppRoutes/>
      <Navbar/>
    </Container>
  </ThemeProvider>
  );
};


