import React from "react";
import Mainpage from "./components/Mainpage";
import MyNavbar from "./components/MyNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Mainpage />
    </div>
  );
}

export default App;
