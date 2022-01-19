import styled from 'styled-components'
import { Web3Connector } from '../../hooks/Web3Connector'
import { Container, Row } from 'react-bootstrap'

export const HeaderContainer = styled(Container)``
export const HeaderContent = styled(Row)``
export const HeaderLogo = styled.img`
  padding: 4px;
`

export const Nav = styled.nav`
  margin-left: 5rem;
  height: 5rem;
`
export const Link = styled.a`
  position: relative;
  bottom: 30px;
  left: 5rem;

  & + a {
    margin-left: 2rem;
  }

  &:hover {
    color: white;
  }

  &.active {
    color: white;
    font-weight: bold;
  }

  &.active::after {
    content: '';
    height: 3px;
    border-radius: 3px 3px 0 0;
    width: 100%;
    position: absolute;
    bottom: 1px;
    left: 0;
    background: orange;
  }
`

export const ConnectButton = styled(Web3Connector)``
