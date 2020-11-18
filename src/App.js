import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Hey Whats up</h1>
      <Row title="NETFLIX ORGINALS" fetchUrl={} />
      <Row title="Trending Now" fetchUrl={} />
    </div>
  );
}

export default App;
