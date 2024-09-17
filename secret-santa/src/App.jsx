import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Header from '../components/Header';
import Home from '../components/Home';
import NotFound from "../components/NotFound";

function SecretSantaApp() {

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default SecretSantaApp
