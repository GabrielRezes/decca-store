import styled from 'styled-components';

import { AiOutlineEye } from 'react-icons/ai';

const ContainerCard = styled.div`
  display: grid;
  grid-template-rows: 1fr 50px;
  place-items: center;
  width: 100%;
  /* height: 350px; */
  /* padding: 2px; */
  gap: 15px;
  margin-top: 30px;
  background: #fff;

  @media (min-width: ${({theme}) => theme.size.md}) {
    /* width: 150px; */
    /* grid-template-columns: 1fr 1fr; */
  }
`;

const Image = styled.img.attrs(props => {src: props.src})`
  height: 220px;
  width: 100%;
  border-radius: 70px;
  box-shadow: 5px 5px 15px rgba(100, 100, 100, 0.9);
`;

const Info = styled.div`
  display: grid;
  grid-template-areas:
    "span icon"
    "span icon"        
  ;
  width: 100%;
  height: 100%;
  gap: 5px;
  padding: 0 35px;
  font-weight: 500;
  font-size: 20px;

  &>first-child {
    grid-area: span;    
  }

  &>:nth-child(2) {
    font-weight: 400;
    font-size: 14px;
    grid-area: span;
    color: ${({theme}) => theme.colors.gray}   
  }

  div {
    grid-area: icon;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 40px;
    height: 40px;
    font-size: 24px;
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
