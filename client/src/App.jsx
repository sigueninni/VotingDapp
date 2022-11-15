import { EthProvider } from "./contexts/EthContext";
import "./App.css";
import Login from "./components/Login/Login";
import Voter from "./components/Voter/Voter";
import Admin from "./components/Admin/Admin";
import React from "react";
import { Routes, Route, } from "react-router-dom";


function App() {
  return (
    <EthProvider>
      <div id="App" >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />

        </Routes>
      </div>
    </EthProvider>
  );
}

export default App;
