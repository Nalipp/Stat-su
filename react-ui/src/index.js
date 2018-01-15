import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
  blue: '#74C4F9',
  darkBlue: '#344559',
  danger: '#EE715D',
  stop: 'tomato',
  start: '#72DA66',
}

injectGlobal`
* {margin: 0px; padding: 0px;}
*::selection {background: #ffb7b7;}

body {
  font-family: 'Roboto', sans-serif;
  background: ${theme.blue};
  color: ${theme.darkBlue};
  height: 100%; width: 100%;
  font-family: sans-serif;
  letter-spacing: 0.8px;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
  color: white;
}
`

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>, 
  document.getElementById('root'));
registerServiceWorker();


