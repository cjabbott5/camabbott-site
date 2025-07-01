import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";

// Main Pages
import Home from "./pages/Home";
import TheCollection from "./pages/TheCollection";
import TheCase from "./pages/TheCase";
import TheResponses from "./pages/TheResponses";
import TheVision from "./pages/TheVision";

// Subpages — Collection
import ShareYourStory from "./pages/CollectionPages/ShareYourStory";
import ShareYourStats from "./pages/CollectionPages/ShareYourStats";

// Subpages — Responses
import Narratives from "./pages/ResponsesPages/Narratives";
import Numbers from "./pages/ResponsesPages/Numbers";

// Subpages — Vision
import AboutTheFounder from "./pages/VisionPages/AboutTheFounder";
import AboutTheFuture from "./pages/VisionPages/AboutTheFuture";

export default function App() {
  return (
    
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <main className="flex-grow">
          <Routes>
            {/* Home Root */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            {/* Collection */}
            <Route path="/collection" element={<TheCollection />} />
            <Route path="/collection/story" element={<ShareYourStory />} />
            <Route path="/collection/stats" element={<ShareYourStats />} />

            {/* The Case */}
            <Route path="/case" element={<TheCase />} />

            {/* Responses */}
            <Route path="/responses" element={<TheResponses />} />
            <Route path="/responses/narratives" element={<Narratives />} />
            <Route path="/responses/numbers" element={<Numbers />} />

            {/* Vision */}
            <Route path="/vision" element={<TheVision />} />
            <Route path="/vision/founder" element={<AboutTheFounder />} />
            <Route path="/vision/future" element={<AboutTheFuture />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
