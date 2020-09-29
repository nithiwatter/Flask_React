import React from "react";
import { Switch } from "react-router-dom";
import RouteWithLayout from "./common/RouteWithLayout";
import SideBar from "./layouts/MainLayout/SideBar";
import MinimalContainer from "./layouts/MinimalLayout/MinimalContainer";
import LoginPage from "./views/loginPage";
import RegisterPage from "./views/registerPage";
import ProfilePage from "./views/profilePage";
import TopAnime from "./views/topAnime";
import TopManga from "./views/topManga";

import SearchAnime from "./views/searchAnime";
import SearchManga from "./views/searchManga";
import DetailedAnime from "./views/detailedAnime";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={LoginPage}
        exact
        layout={MinimalContainer}
        path="/login"
        noLogin={true}
        allAccess={false}
      ></RouteWithLayout>
      <RouteWithLayout
        component={RegisterPage}
        exact
        layout={MinimalContainer}
        path="/register"
        noLogin={true}
        allAccess={false}
      ></RouteWithLayout>
      <RouteWithLayout
        component={ProfilePage}
        exact
        layout={SideBar}
        path="/user/profile"
        noLogin={false}
        allAccess={false}
      ></RouteWithLayout>
      <RouteWithLayout
        component={TopAnime}
        exact
        layout={SideBar}
        path="/topAnime"
        noLogin={false}
        allAccess={true}
      />
      <RouteWithLayout
        component={TopManga}
        exact
        layout={SideBar}
        path="/topManga"
        noLogin={false}
        allAccess={true}
      />
      <RouteWithLayout
        component={SearchAnime}
        exact
        layout={SideBar}
        path="/anime"
        noLogin={false}
        allAccess={true}
      />
      <RouteWithLayout
        component={DetailedAnime}
        exact
        layout={SideBar}
        path="/anime/:id"
        noLogin={false}
        allAccess={true}
      />
      <RouteWithLayout
        component={SearchManga}
        exact
        layout={SideBar}
        path="/manga"
        noLogin={false}
        allAccess={true}
      />
    </Switch>
  );
};

export default Routes;
