import styled from 'styled-components';

const ContainerCard = styled.div`
`;

const Image = styled.img.attrs(props => {src: props.src})`
`;

const Info = styled.span`
`;
export default function Card ({image, info}) {

  return (
    <ContainerCard>
      <Image src={image}/>
      <Info>{info}</Info>
    </ContainerCard>
  );
};
