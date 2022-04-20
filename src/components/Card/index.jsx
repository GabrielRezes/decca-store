import styled from 'styled-components';

const ContainerCard = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr;
  gap: 10px;
  width: 100%;
  height: 280px;
  padding: 10px;
  border-radius: 30px;
  background: ${props => props.theme.colors.pinkGradient};
  
  @media (min-width: ${props => props.theme.size.sm}) {
    max-width: 450px;
  }

  @media (min-width: ${props => props.theme.size.lg}) {
    width: 380px;
    height: 320px; 

    img {
      height: 250px;
    }
  }
`;

const Image = styled.img.attrs(props => {src: props.src})`
  height:200px;
  width: 100%;
  border-radius: 30px;
`;

const Info = styled.span`
  color: ${props => props.theme.colors.black};;
`;
export default function Card ({image, info}) {

  return (
    <ContainerCard>
      <Image src={image}/>
      <Info>{info}</Info>
    </ContainerCard>
  );
};
