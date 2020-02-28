import React, { useState } from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";

function App() {
  return (
      <div className="App" style={{display: "flex", flexDirection:"column", alignItems:"center",}}>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/bubble-page" component={BubblePage} />
      </div>
  );
}

export default App;
