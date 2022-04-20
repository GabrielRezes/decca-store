import styled from 'styled-components';

const ContainerCard = styled.div`
  display: grid;
  grid-template-rows: 1fr 50px;
  width: 100%;
  height: 200px;
  padding: 15px;
`;

const Image = styled.img.attrs(props => {src: props.src})`
  height: 200px;
  width: 150px;
`;

const Info = styled.span`
  color: black;
`;

export default function Card ({image}) {

  return (
    <ContainerCard>
      <Image src={image}/>
      <Info>Preço</Info>
    </ContainerCard>
  );
};
