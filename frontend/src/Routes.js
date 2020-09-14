import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithLayout from './common/RouteWithLayout';
import SideBar from './layouts/MainLayout/SideBar';
import TopAnime from './views/topAnime';
import TopManga from './views/topManga';
import SearchAnime from './views/searchAnime';
import SearchManga from './views/searchManga';

const Routes = () => {
  return (
    <Switch>
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
        component={SearchManga}
        exact
        layout={SideBar}
        path="/manga"
      />
    </Switch>
  );
};

export default Routes;
