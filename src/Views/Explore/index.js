import React from "react";
import { RouteWithLayout } from "Components";
import { MainLayout } from "Layout";
import { Route } from "react-router-dom";

const ExplorePage = React.lazy(() => import("./Explore"));

const ExploreRoutes = {
  main: (
    <Route
      exact
      path="/"
      key="explore-page"
      element={
        <RouteWithLayout
          component={ExplorePage}
          layout={MainLayout}
          path="/"
          key="explore-page"
        />
      }
    />
  ),
};

export default ExploreRoutes;
