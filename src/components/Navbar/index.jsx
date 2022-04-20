import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import styled from 'styled-components';
import { AiOutlineUser, AiOutlineInfoCircle } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';
import { ImWhatsapp } from 'react-icons/im';
import { RiShoppingCartLine } from 'react-icons/ri';


const ContainerNav = styled.nav`
  position: fixed;
  left: 0;
  bottom: 5px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 25px;
  width: 100%;
  max-width: 700px;
  height: 60px;
  background: #fff;
  border-radius: 30px;
  margin: 0 auto;
  box-shadow: 0px -1px 2px 2px rgba(245, 245, 245, 1);
  
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
    background: ${props => props.theme.colors.pinkGradient};  
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
