import { useState } from 'react'

import { postImage } from '../../services/api';

import styled from 'styled-components';

const Container = styled.div`
    grid-area: 'page';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width:500px;
    max-height: 500px;
    padding: 20px 40px;
`;


export default function AdmProducts () {

  const [ value, setValue ] = useState('');

  console.log(value)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const urlNewImage = await postImage(value);
    console.log(urlNewImage)
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} type='file' accpet='image/*'/>
        <button type='submit'>Upload</button>
      </form>
    </Container>
  );
};