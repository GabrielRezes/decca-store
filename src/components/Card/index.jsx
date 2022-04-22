import styled from 'styled-components';

import { AiOutlineEye } from 'react-icons/ai';

const ContainerCard = styled.div`
  width: 100%;
  height: 370px;
`;

const Image = styled.img.attrs(props => {src: props.src})`
  height: 290px;
  width: 100%;
  border-radius: 70px;
  box-shadow: 3px 3px 5px rgba(100, 100, 100, 0.3);
`;

const Info = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-areas:
    "span icon"
    "span icon"        
  ;
  height: 70px;
  width: 80%;
  padding: 10px;
  font-weight: 500;
  font-size: 20px;

  &>first-child {
    grid-area: span;    
  }

  &>:nth-child(2) {
    font-weight: 400;
    font-size: 16px;
    grid-area: span;  
    color: ${({theme}) => theme.colors.gray}   
  }

  div {
    grid-area: icon;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 30px;
    height: 30px;
    font-size: 16px;
    border-radius: 50px;
    color: #fff;
    background: ${({theme}) => theme.colors.pinkGradient}
  }
`;

export default function Card ({image}) {

  return (
    <ContainerCard>
      <Image src={image}/>
      <Info>
        <span>R$ 129.00</span>
        <span>cód. 655</span>
       
        <div>
          <AiOutlineEye/>
        </div>
      
      </Info>
    </ContainerCard>
  );
};
