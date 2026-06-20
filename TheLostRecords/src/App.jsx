import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Main Pages
import Home from './pages/Home';
import TheCollection from './pages/TheCollection';
import TheCase from './pages/TheCase';
import TheResponses from './pages/TheResponses';
import TheVision from './pages/TheVision';

// Subpages — Collection
import ShareYourStory from './pages/CollectionPages/ShareYourStory';
import ShareYourStats from './pages/CollectionPages/ShareYourStats';

// Subpages — Responses
import Narratives from './pages/ResponsesPages/Narratives';
import Numbers from './pages/ResponsesPages/Numbers';

// Legal
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import TermsOfUse from './pages/Legal/TermsOfUse';

// Fallback
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-base text-ink">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/collection" element={<TheCollection />} />
          <Route path="/collection/story" element={<ShareYourStory />} />
          <Route path="/collection/stats" element={<ShareYourStats />} />

          <Route path="/responses" element={<TheResponses />} />
          <Route path="/responses/narratives" element={<Narratives />} />
          <Route path="/responses/numbers" element={<Numbers />} />

          <Route path="/case" element={<TheCase />} />

          <Route path="/vision" element={<TheVision />} />

          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}