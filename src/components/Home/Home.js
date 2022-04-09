import React from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'

export default function Home() {
  return (
    <Container>
        <Header/>
        <Wrapper>
          <Left>
            <h2>Build The Community Your Fans Will Love</h2>
            <span>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. Get Started For Free Grow Together Generate meaningful discussions</span>
            <Button>Try free</Button>
          </Left>
          <Right>
            <img src="/img/mockups.svg" alt="" />
          </Right>
        </Wrapper>
    </Container>
  )
}


const Container = styled.div`
  background-image: url("/img/bg-hero.svg");
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Wrapper = styled.div`
  background-color: blue;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Left = styled.div`

`;


const Right = styled.div`

`;

const Button = styled.button`
    width: 150px;
    height: 40px;
    outline: none;
    border: none;
    background-color: red;
    border-radius: 30px;
    color: gray;
`;