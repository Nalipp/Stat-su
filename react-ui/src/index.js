import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
  background: '#74C4F9',
  dark: '#344559',
  danger: '#EE715D',
  stop: 'tomato',
  start: '#72DA66',
  light: 'white',
}

injectGlobal`
* {margin: 0px; padding: 0px;}
*::selection {background: #ffb7b7;}

body {
  font-family: 'Roboto', sans-serif;
  background: ${theme.background};
  color: ${theme.dark};
  height: 100%; width: 100%;
  font-family: sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
  color: ${theme.light};
}
`

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>, 
  document.getElementById('root'));
registerServiceWorker();


