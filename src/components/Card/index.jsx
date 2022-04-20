import styled from 'styled-components';

const ContainerCard = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr;
  gap: 10px;
  max-width: 300px;
  height: 250px;
  padding: 10px;
  border-radius: 30px;
  background: #fff;    
`;

const Image = styled.img.attrs(props => {src: props.src})`
  height:200px;
  width: 100%;
  max-width: 250px;
  border-radius: 30px;
`;

const Info = styled.span`
  background: green;
  color: red;
`;
export default function Card ({image, info}) {

  return (
    <ContainerCard>
      <Image src={image}/>
      <Info>{info}</Info>
    </ContainerCard>
  );
};
