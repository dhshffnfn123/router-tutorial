import React from "react";
import About from "./About";
import Home from "./Home";
import { Route, Link, Switch } from "react-router-dom";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

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
        <li>
          <Link to="/history">History 예제</Link>
        </li>
        {/* <li>
          <Link to="/profile/velopert">Velopert Profile</Link>
        </li>
        <li>
          <Link to="/profile/gildong">홍길동의 Profile</Link>
        </li> */}
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home}  exact={true}/>
        <Route path={['/about', '/info']} component={About} />  {/* 배열을 사용한 Link */}
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링 됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
        {/* <Route path="/profile/:username" component={Profiles} /> */}
      </Switch>
    </div>
  );
};

export default App;