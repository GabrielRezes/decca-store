import styled from 'styled-components';
import ring from '../../assets/images/ring.png';
import Card from'../../components/Card';

const ContainerHome = styled.main`
  display: grid;
  margin: 0 auto;
  place-items: center;
  grid-template-columns: 1fr;
  gap: 10px;
  /* background: yellow; */
  overflow-x: hidden;
  /* width: 300px; */

  
  @media (min-width: ${props => props.theme.size.sm}) {
    grid-template-columns: 1fr 1fr;
    width: 900px;
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