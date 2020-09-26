import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithLayout from './common/RouteWithLayout';
import SideBar from './layouts/MainLayout/SideBar';
import MinimalContainer from './layouts/MinimalLayout/MinimalContainer';
import LoginPage from './views/loginPage';
import RegisterPage from './views/registerPage';
import TopAnime from './views/topAnime';
import TopManga from './views/topManga';
import SearchAnime from './views/searchAnime';
import SearchManga from './views/searchManga';
import DetailedAnime from './views/detailedAnime';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={LoginPage}
        exact
        layout={MinimalContainer}
        path="/login"
      ></RouteWithLayout>
      <RouteWithLayout
        component={RegisterPage}
        exact
        layout={MinimalContainer}
        path="/register"
      ></RouteWithLayout>
      <RouteWithLayout
        component={TopAnime}
        exact
        layout={SideBar}
        path="/topAnime"
      />
      <RouteWithLayout
        component={TopManga}
        exact
        layout={SideBar}
        path="/topManga"
      />
      <RouteWithLayout
        component={SearchAnime}
        exact
        layout={SideBar}
        path="/anime"
      />
      <RouteWithLayout
        component={DetailedAnime}
        exact
        layout={SideBar}
        path="/anime/:id"
      />
      <RouteWithLayout
        component={SearchManga}
        exact
        layout={SideBar}
        path="/manga"
      />
    </Switch>
  );
};

export default Routes;
