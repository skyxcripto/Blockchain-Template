import React from 'react'
import { Navbar } from '../src/components/Navbar'
import { GlobalStyle } from './styles/global'
import SSRProvider from 'react-bootstrap/SSRProvider'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <SSRProvider>
        <Navbar />
      </SSRProvider>
    </>
  )
}
