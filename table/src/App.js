import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Table from "./components/Table";

function App() {
  return (
    <div className="App w-full overflow-x-hidden">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
