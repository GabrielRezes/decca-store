import styled from 'styled-components';
import a from '../../assets/images/1.jpeg';
import b from '../../assets/images/2.jpeg';
import c from '../../assets/images/3.jpeg';
import d from '../../assets/images/4.jpeg';
import e from '../../assets/images/5.jpeg';
import Card from'../../components/Card';

import { BiSearchAlt } from 'react-icons/bi';

const ContainerHome = styled.main`
  display: grid;
  grid-area: 'page';
  grid-template-rows: 40px 1fr;  
  place-items: center;
  gap: 15px;
  padding: 15px 10px;
  width: 100%;

  &>:last-child {
    margin-bottom: 70px;
  }
`;

const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 330px;
  padding: 5px;
  font-size: 30px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 2px 20px rgba(230, 230, 230, 0.7);

  svg {
    color: ${props => props.theme.colors.pink} 
  }

  select {
    border: none;
    background: inherit;
    flex-grow: 1
  }
`;

const ContainerCard = styled.div`
  display: grid;
  justify-content: center;
  gap: 15px;
  width: 100%;
  
  @media (min-width: ${({theme}) => theme.size.md}) {
    grid-template-columns: repeat(2, 320px);
  }

  @media (min-width: ${({theme}) => theme.size.lg}) {
    grid-template-columns: repeat(3, 300px);
  }

  @media (min-width: ${({theme}) => theme.size.xl}) {
    grid-template-columns: repeat(3, 450px);
    gap: 40px;
  }

`;

const category =['Pulseiras', 'Anéis', 'Colares', 'Brincos Pequenos', 'Brincos Grandes', 'Tornozeleiras', 'Acessórios']

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
];

  return (
    <ContainerHome>

      <ContainerSearch>
        <BiSearchAlt/> 
          <select>
            <option value="" disabled selected>Escolha a categoria</option>
            {category.map(i => <option>{i}</option>)}
          </select>
      </ContainerSearch>

      <ContainerCard>
        {arr.map(i => {
          return (
            <Card image={i.img}/>
          )
        })}
      </ContainerCard>

    </ContainerHome>
  );
};