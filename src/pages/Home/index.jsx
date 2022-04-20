import styled from 'styled-components';
import ring from '../../assets/images/ring.png';
import Card from'../../components/Card';

const ContainerHome = styled.main`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  gap: 10px;
  overflow-x: hidden;
  width: 100%;

  @media (min-width: ${props => props.theme.size.md}) {
    grid-template-columns: 1fr 1fr;
    padding: 10px 60px;
  }

  @media (min-width: ${props => props.theme.size.xl}) {
    grid-template-columns: 1fr 1fr 1fr;
    /* padding: 10px 300px; */
  }
`;

export default function Home () {

  let image = {img: ring}
  let arr = new Array(image,image,image,image,image,image,image,image,image,image,image,image, image,image,image,image,image,)

  return (
    <ContainerHome>
      {arr.map(i => {
        return (
          <Card image={i.img} info='R$ 129,00 - n°222'/>
        )
      })}
    </ContainerHome>
  );
};