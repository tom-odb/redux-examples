import React from "react";
import { Route, Switch } from "react-router-dom";

import Lama from "./lama/Lama";
import Lamas from "./lamas/Lamas";

export default () => (
  <div className="App">
    <Switch>
      <Route path="/:id" component={Lama} />
      <Route component={Lamas} />
    </Switch>
  </div>
);
