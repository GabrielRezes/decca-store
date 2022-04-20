import styled from 'styled-components';

import { VscAccount } from 'react-icons/vsc';
import { BsFillGridFill } from 'react-icons/bs';

const ContainerHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
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