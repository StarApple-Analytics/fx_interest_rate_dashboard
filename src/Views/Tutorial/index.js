import React from "react";
import { RouteWithLayout } from "Components";
import { MainLayout } from "Layout";
import { Route } from "react-router-dom";

const Docs = React.lazy(() => import("./Tutorial"));

const DocRoutes = {
  main: (
    <Route
      exact
      path="/tutorial"
      key="tutorial-page"
      element={
        <RouteWithLayout
          component={Docs}
          layout={MainLayout}
          path="/tutorial"
          key="tutorial-page"
        />
      }
    />
  ),
};

export default DocRoutes;
