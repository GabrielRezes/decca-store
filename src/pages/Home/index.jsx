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
  place-items: center;
  grid-template-rows: 40px 1fr;  
  padding: 10px 10px;
  /* background: red; */
`;

const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0px 2px 20px rgba(230, 230, 230, 0.7);
  width: 100%;
  max-width: 330px;
  gap: 10px;
  font-size: 30px;

  svg {
    color: ${props => props.theme.colors.pink} 
  }

  select {
    border: none;
    background: inherit;
    flex-grow: 1
  }
`;

const category =['Pulseiras', 'Anéis', 'Colares', 'Brincos Pequenos', 'Brincos Grandes', 'Tornozeleiras' ]

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

        {arr.map(i => {
          return (
            <Card image={i.img}/>
          )
        })}

    </ContainerHome>
  );
};