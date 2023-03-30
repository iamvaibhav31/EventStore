import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, AddEvents } from "./pages";
import "./App.css";
import Header from "./components/Header";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEvents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
