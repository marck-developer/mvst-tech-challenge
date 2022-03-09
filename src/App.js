import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./routes";

import './App.css';
import MainPage from "./pages/MainPage";


function App() {
  return (
    <Router>
      <div className="App">
      {/* <div className="background">
        <div className="background--top">
          <img id="bg-top" src={bgImage} alt="bg-img" />
        </div>
        <div className="background--bottom" />
      </div> */}
      <Routes>
        <Route path={ROUTES.MAIN_PAGE} element={<MainPage />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
