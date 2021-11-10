import React from "react";
import About from "./About";
import Home from "./Home";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
        <Route path="/" component={Home}  exact={true}/>
        <Route path="/about" component={About} />
    </div>
  );
};

export default App;