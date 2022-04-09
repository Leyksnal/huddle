import React from 'react'
import styled from 'styled-components'
import {HiDotsVertical} from 'react-icons/hi'

export default function Header() {
  return (
    <>
      <Container>
        <Wrapper>
          <Logo>
            <img src="/img/logo.svg" alt="" />
          </Logo>
          <Nav>
            <span>Home</span>
            <span>Explore</span>
            <span>Engagement</span>
            <span>About us</span>
            <Button>Try free</Button>
          </Nav>
        </Wrapper>
        <Bugger>
          <HiDotsVertical/>
        </Bugger>
      </Container>

    </>

  )
}

const Container = styled.div`
  /* background-color: brown; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
`;
const Wrapper = styled.div`
  width: 90%;
  /* background-color: yellowgreen; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  /* background-color: black; */
  img{
    object-fit: contain;
    width: 200px;
    height: 40px;
  }
`;
const Bugger = styled.div`

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
const Nav = styled.div`
  /* background-color: #fff; */
  width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  span{
    font-size: 1.2rem;
    font-weight: 500;
  }
`;