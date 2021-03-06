import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import styled from 'styled-components';
import { AiOutlineUser, AiOutlineInfoCircle } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';
import { ImWhatsapp } from 'react-icons/im';
import { RiShoppingCartLine } from 'react-icons/ri';


const ContainerNav = styled.nav`
  position: fixed;
  grid-area: 'nav';
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 25px;
  width: 98%;
  max-width: 700px;
  height: 60px;
  border-radius: 30px;
  background: #fff;
  place-self: center;
  border: 1px solid rgba(230, 230, 230, 0.8);
  /* box-shadow: 0px -2px 5px  rgba(190, 190, 190, 0.2); */

  a {
    font-size: 30px;
    color: ${props => props.theme.colors.gray};
  }
`;

const ContainerButton = styled.div`
  position: relative;
  top: -20%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  font-size: 42px;
  border-radius: 0 0 80px 80px;
  background: #ECECF1;

  button {
    position: absolute;
    top: -30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    color: #fff;
    font-size: 30px;
    border: none;  
    border-radius: 50%;
    box-shadow: 0px 2px 20px -5px ${props => props.theme.colors.pink};
    background: ${props => props.theme.colors.pinkGradientDark};  
  }
`
export default function Navbar () {
  return (
    <ContainerNav>
        <Link to='/'>
          <BiHomeAlt/>
        </Link>

        <Link to='/'>
          <AiOutlineInfoCircle/>
        </Link>

        <ContainerButton>
          <button><ImWhatsapp/></button>
        </ContainerButton>

        <Link to='/'>
          <RiShoppingCartLine/>
        </Link>

        <Link to='/login'>
          <AiOutlineUser/>
        </Link>
    </ContainerNav>
  );
};
