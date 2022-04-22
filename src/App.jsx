import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import AppRoutes from './routes/AppRoutes';

import Header from './components/Header';
import Navbar from './components/Navbar';

const theme = {
  colors: {
    base: '#fffdfc', 
    pink:'#EE5E69',
    pinkGradientDark: 'linear-gradient(90deg, rgba(238,166,171,1) 0%, rgba(238,94,105,1) 100%)',
    pinkGradientLight: 'linear-gradient(90deg, rgb(250, 181, 192) 0%, rgb(247, 157, 165) 100%)',
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

const Wrapper = styled.div`
  position:relative;
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns:
  "header"
  "page"
  "nav" ;
  /* place-items: center; */
  overflow-y: auto;
  height: 100vh;
  width: 100%;
  /* padding: 5px 0 ; */
  background: ${theme.colors.base};
`

export default function App() {
  return (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Header/>
      <AppRoutes/>
      <Navbar/>
    </Wrapper>
  </ThemeProvider>
  );
};


