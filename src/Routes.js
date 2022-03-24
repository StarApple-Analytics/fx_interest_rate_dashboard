import React from "react";
import { Routes } from "react-router-dom";

import {
  ExploreRoutes,
  DocsRoutes
} from "./Views";


const generalRoutes = [
  ExploreRoutes.main,
  DocsRoutes.main
];

const AppRoutes = () => {
  const routes = generalRoutes;

  return <Routes>{routes}</Routes>;
};

export default AppRoutes;
