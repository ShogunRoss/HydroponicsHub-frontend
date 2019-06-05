import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import routes from "../routes/dashboardRoutes";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        console.log({prop,key})
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
    })}
  </Switch>
);

const Admin = () => {

  return <p>Admin Page</p>;
};

export default Admin;
