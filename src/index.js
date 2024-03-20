import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './ThemeContext'; // Adjust the import path
import App from './App';
import './index.css'

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
