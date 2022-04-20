import styled from 'styled-components';
import a from '../../assets/images/1.jpeg';
import b from '../../assets/images/2.jpeg';
import c from '../../assets/images/3.jpeg';
import d from '../../assets/images/4.jpeg';
import e from '../../assets/images/5.jpeg';
import Card from'../../components/Card';

const ContainerHome = styled.main`
  display: grid;
  grid-template-rows: 40px 1fr;  
`;

// conts

export default function Home () {

  let arr = [
    {img: a},
    {img: a},
    {img: a},
    {img: b},
    {img: b},
    {img: b},
    {img: c},
    {img: c},
    {img: c},
    {img: d},
    {img: d},
    {img: d},
    {img: e},
    {img: e},
    {img: e},

  ]

  return (
    <ContainerHome>
      {/* {arr.map(i => {
        return (
          <Card image={i.img} info='R$ 129,00 - n°222'/>
        )
      })} */}
    </ContainerHome>
  );
};