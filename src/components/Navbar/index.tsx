import React from 'react'
import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  Nav,
  Link,
  ConnectButton,
} from './styles'

import { Row, Col, Container } from 'react-bootstrap'

export function Navbar() {
  return (
    <Container>
      <Row>
        <Col sm={7}>
          <HeaderLogo
            src="/images/Ethereum.svg"
            alt="ig.news"
            width="150px"
            height="90px"
          />
          <Nav>
            <Link>Home</Link>
            <Link>Post</Link>
          </Nav>
        </Col>
        <Col sm={5}>
          <ConnectButton />
        </Col>
      </Row>
    </Container>
  )
}
