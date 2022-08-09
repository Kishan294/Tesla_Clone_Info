import React, { useState } from 'react'
import styled from 'styled-components'
import logo from "../Images/logo.svg"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/Car/CarSlice'
import { useSelector } from 'react-redux';

export const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false)
  const cars = useSelector(selectCars)
  return (
    <Container>
      <a href='/'>
        <img src={logo} alt="" />
      </a>
      <Menu>
        {cars && cars.map((car, index) => (
          <a key={index} href="/Tesla_Clone/">{car}</a>
        ))}

      </Menu>
      <RightMenu>
        <a href="/Tesla_Clone/">Shop</a>
        <a href="/Tesla_Clone/">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars && cars.map((car, index) => (
          <li key={index}><a href='/'>{car}</a></li>
        ))}
        <li><a href='/Tesla_Clone/'>Existing Inventory</a></li>
        <li><a href='/Tesla_Clone/'>Used Inventory</a></li>
        <li><a href='/Tesla_Clone/'>Trade-in</a></li>
        <li><a href='/Tesla_Clone/'>Cybertruck</a></li>
        <li><a href='/Tesla_Clone/'>Roadster</a></li>
      </BurgerNav>
    </Container>
  )
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px ;
    flex-wrap: nowrap;
    color: #393c41;
  }

  @media (max-width: 768px){
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
    a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    color: #393c41;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  margin-bottom: 2px;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s ease-in-out;

  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  a{
    font-weight: 600;
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`