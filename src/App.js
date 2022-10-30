import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/utils/theme';
import LandingPage from './page/landing-page';
import React from 'react';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route index element={<LandingPage />} />;
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
