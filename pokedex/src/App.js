import React from "react";
import Router from "./route/Router";
import GlobalState from './global/GlobalState'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #202020;
  }

  li{
    list-style: none;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
