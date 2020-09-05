import React from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components'

import { Router } from 'react-router-dom'

import history from './services/history'

import Routes from './routes'

import theme from './Theme'

const Main = styled.div`
  margin: 0;
  font-family: 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${({ theme }) => theme.bodyBackground};
  height: 100vh;
  overflow-y: scroll;
  padding: 0 15px;
  *:focus:not([data-focus-visible-added]) {
    outline: none;
  }
`;



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Router history={history}>
          <Routes />
        </Router>
      </Main>
    </ThemeProvider>
  );
}

export default App;
