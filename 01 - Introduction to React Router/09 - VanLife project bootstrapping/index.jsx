import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 *
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 *
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */
function nav() {
  return (
    <div>
      <h1>
        <Link to="/Home">Home</Link>
      </h1>
      <h1>
        <Link to="/About">About</Link>
      </h1>
    </div>
  );
}

function Home() {
  return (
    <>
      {nav()}
      <h1>Home !!</h1>
    </>
  );
}

function About() {
  return (
    <>
      {nav()}
      <h1>About !!</h1>
    </>
  );
}

function App() {
  return (
    <>
      <h1>Start here</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
