import React from 'react';
import styled, { ThemeProvider } from 'styled-components'

import { HashRouter } from 'react-router-dom'

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
        <HashRouter>
          <Routes />
        </HashRouter>
      </Main>
    </ThemeProvider>
  );
}

export default App;
