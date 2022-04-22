import styled from 'styled-components';

import { VscAccount } from 'react-icons/vsc';
import { BsFillGridFill } from 'react-icons/bs';

const ContainerHeader = styled.header`
  position: sticky;
  top: 0;
  grid-area: 'header';
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 700px;
  padding: 0 15px;
  place-self: center;

  background:${props => props.theme.colors.base};
  box-shadow: 0px 1px 5px 2px rgba(100, 100, 100, 0.1);
  
  @media (min-width: ${({theme}) => theme.size.md}) {
    border-radius: 30px;
  }   
`;

const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 30px;
  background: #fff;
  border-radius: 50%;
  color: ${({theme}) => theme.colors.pink};
`;

export default function Header () {
  return (
    <ContainerHeader>

      <ContainerIcon>
        <BsFillGridFill/>
      </ContainerIcon>

      <ContainerIcon>
        <VscAccount/>
      </ContainerIcon>

    </ContainerHeader>  
  );
};