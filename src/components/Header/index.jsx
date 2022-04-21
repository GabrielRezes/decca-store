import styled from 'styled-components';

import { VscAccount } from 'react-icons/vsc';
import { BsFillGridFill } from 'react-icons/bs';

const ContainerHeader = styled.header`
  position: sticky;
  top: 0;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:${props => props.theme.colors.base};
  box-shadow: 0px 1px 5px 5px rgba(100, 100, 100, 0.1);


  @media (min-width: ${props => props.theme.size.md}) {
    width: 690px;
    margin: 0 auto;
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
  color: ${props => props.theme.colors.pink};
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