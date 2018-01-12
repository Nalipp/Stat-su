import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
  blue: '#74C4F9',
  darkBlue: '#344559',
  red: '#EE715D',
  redOrange: 'tomato',
  green: '#1CABA7',
  darkGreen: '#72DA66',
}

injectGlobal`
body {
  font-family: 'Roboto', sans-serif;
  background: #74C4F9;
  color: #344559;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
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


