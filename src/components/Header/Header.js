import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
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
          <button>Try free</button>
        </Nav>
        <Bugger></Bugger>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background-color: brown;
`;
const Wrapper = styled.div`

`;
const Logo = styled.div`

`;
const Bugger = styled.div`

`;
const Nav = styled.div`

`;