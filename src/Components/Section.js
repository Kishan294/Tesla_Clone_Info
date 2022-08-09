import React from 'react'
import styled from 'styled-components'
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';

export const Section = ({title, model, topSpeed, range, time, bgImg}) => {
  return (
    <Wrapper backgroungImg = {bgImg}>
      <Fade top>
      <Title>
        {model.length !== 0 ? <h1>{title} 
        <br /> <span>{model}</span></h1> : 
        <h1>{title} <span>{model}</span></h1>
        }
        <p>The quickest car in the world,
          <br /> with record-setting acceleration,
          <br /> range and performance.
        </p>
      </Title>
      <Info>
        <Top>
          <p>{time}<br /><span>0-60mph</span></p>
          <p>{topSpeed}<br /><span>Top speed</span></p>
          <p>{range}<br /><span>Mile Range</span></p>
        </Top>
        <Bottom>
          <Pulse>
            <p>See full specs</p>
          </Pulse>
        </Bottom>
      </Info>
      <Button>
        <button>Reserve now</button>
      </Button>
      </Fade>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    background: url(${props => props.backgroungImg});
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    color: whitesmoke;

    @media (max-width: 768px){
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`

const Title = styled.div`
  margin-bottom: 60px;

  h1{
    line-height: 50px;
    font-weight: 300;
    margin-bottom: 15px;
    font-size: 3rem;
  }

  h1 span{
    font-weight: 400;
  }

  p{
    font-weight: 300;
    font-size: 1rem;
  }

`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`

const Top = styled.div`
  display: flex;
  margin-bottom: 20px;
  
  p{
    margin: 0 30px;
    font-size: 1.3rem;
    font-weight: 500;
    text-align: center;
    line-height: 20px;
  };

  p span{
    font-size: 16px;
    text-align: center;
    font-weight: 300;
  }

  @media screen {
    p{
      margin: 0 20px;
    }
  }
`

const Bottom = styled.div`
  p{
    font-size: 15px;
  }
`

const Button = styled.div`
  margin-bottom: 75px;
 
  button{
    width: 250px;
    height: 65px;
    font-size: 1.2rem;
    color: white;
    background: red;
    opacity: 0.80;
    border: none;
    outline: none;
    border-radius: 5px;
  }

  button:hover{
    background: transparent;
    border: 2px solid white;
    color: red;
    font-weight: 500;
    transform: translateY(2px);
  }

  @media (max-width: 768px){
    button{
      width: 160px;
      height: 50px;
    }
  }
`
