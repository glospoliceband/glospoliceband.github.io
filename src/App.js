// External imports
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import 'typeface-roboto';

// Internal imports
import GlosPoliceBand from './features/GlosPoliceBand';
import theme from './Theme.js';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <CssBaseline />
        <GlosPoliceBand />
      </HashRouter>
    </ThemeProvider>
  )
};
