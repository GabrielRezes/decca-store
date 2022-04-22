import Logo from '../../assets/images/logo.png';
import styled from 'styled-components';

const ContainerLogin = styled.div`
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
    /* background: green; */
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 150px;
  gap: 10px;
  /* background: yellow; */
`;

const Input = styled.input.attrs(props => {
  placeholder: 'Digite seu nome de usuário'
})`
width: 100%;
height: 40px;
padding: 10px;
border-radius: 15px;
box-shadow: 1px 1px 5px  rgba(100, 100, 100  , 0.3);
`;

const Button = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 25px;
  color: #fff;
  font-weight: 500;
  letter-spacing: 3px;
  background: ${({theme}) => theme.colors.pinkGradientLight};
`;

export default function Login () {
  return (
    <ContainerLogin>

      <img style={{ width: '200px', height: '100px'}} src={Logo}/>

      <ContainerInput>
        <Input placeholder='Digite seu nome de usuário'/>
        <Input/>
      </ContainerInput>

      <Button>Entrar</Button>
    </ContainerLogin>
  );
};