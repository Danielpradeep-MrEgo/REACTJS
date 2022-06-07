import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Result from "./Result"
import requests from './requests.js'

function App() {

  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)
  return (
    <div className="app">
      <Header />
      {/* header */}

    <Navbar setSelectedOption={setSelectedOption}/>
      {/* nav */}

      {/* <Result/> */}
      <Result selectedOption={selectedOption}/>
      {/* results */}
    </div>
  );
}

export default App;
