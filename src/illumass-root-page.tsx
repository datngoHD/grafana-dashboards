import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppRootProps } from '@grafana/data';
import { Container } from '@grafana/ui';
import { Map } from 'features/map';
import { Assets } from 'features/assets';
import { Devices } from 'features/devices';
import { IllumassAppSettings } from 'type';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const IllumassRootPage = function IllumassRootPage(props: AppRootProps<IllumassAppSettings>) {
  return (
    <Switch>
      <Route path="/a/grafana-app-plugin/map">
        <Map />
      </Route>
      <Route path="/a/grafana-app-plugin/assets">
        <Assets />
      </Route>
      <Route path="/a/grafana-app-plugin/devices">
        <Devices />
      </Route>
      <Route path="/a/grafana-app-plugin">
        <Home />
      </Route>
    </Switch>
  );
};

export const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <h2>Coming soon…</h2>
    </Container>
  );
};
