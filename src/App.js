import React from "react";
import logo from "./logo.svg";
import PublicRoute from "./BaseLayout/public";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <PublicRoute to="/" component={HomePage} />
    </Router>
  );
}

export default App;
