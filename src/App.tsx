import React from "react";
import { Switch, Route } from "react-router-dom";
import AddMatch from "./components/AddMatch/AddMatch";
import HomePage from "./components/HomePage";
import MatchInfo from "./components/MatchInfo/MatchInfo";

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route component={AddMatch} path="/addmatch" />
        <Route component={MatchInfo} path="/matchinfo" />
        <Route component={HomePage} path="/" />
      </Switch>
    </div>
  );
};

export default App;
