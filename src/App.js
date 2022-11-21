import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import LandingPage from './page/landing-page';
import React from 'react';
import PrivacyPolicy from './page/rules/privacy-policy';
import CommunityGuidelines from './page/rules/community-guidelines';
import TermsOfUse from './page/rules/terms-of-use';
import '../src/components/styles/myStyle.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route index element={<LandingPage />} />;
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="community-guidelines"
            element={<CommunityGuidelines />}
          />
          <Route path="terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
