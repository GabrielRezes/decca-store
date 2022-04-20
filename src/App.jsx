import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';

const theme = {
  colors: {
    base: '#ECECF1', 
    pink:'#EE5E69',
    pinkGradient: 'linear-gradient(90deg, rgba(238,166,171,1) 0%, rgba(238,94,105,1) 100%)',
    gray: '#B9BBC3'
  },
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 2fr;
  height: 100vh;
  padding: 5px;
  background: ${theme.colors.base};
`

export default function App() {
  return (
  <ThemeProvider theme={theme}>
    <Container>
      <AppRoutes/>
      <Navbar/>
    </Container>
  </ThemeProvider>
  );
};


