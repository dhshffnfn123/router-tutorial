import React from "react";
import About from "./About";
import Home from "./Home";
import { Route, Link } from "react-router-dom";
import Profiles from "./Profiles";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profiles">Profile</Link>
        </li>
        {/* <li>
          <Link to="/profile/velopert">Velopert Profile</Link>
        </li>
        <li>
          <Link to="/profile/gildong">홍길동의 Profile</Link>
        </li> */}
      </ul>
      <hr />
        <Route path="/" component={Home}  exact={true}/>
        <Route path={['/about', '/info']} component={About} />  {/* 배열을 사용한 Link */}
        <Route path="/profiles" component={Profiles} />
        {/* <Route path="/profile/:username" component={Profiles} /> */}
    </div>
  );
};

export default App;