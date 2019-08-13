import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// import Home from './pages/home';
import Icon from './pages/icon/icon.demo';
import Button from './pages/button/button.demo';
import Collapse from './pages/collapse/collapse.demo'
import Carousel from './pages/carousel/carousel.demo'
import Message from './pages/message/message.demo';
import Sticky from './pages/sticky/sticky.demo';
import Layout from './pages/layout/layout.demo';
import App from './App';

export default class IRouter extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/components" component={({match}: any) => (
              <Switch>
                <Route path={`${match.url}/icon`} component={Icon} />
                <Route path={`${match.url}/button`} component={Button} />
                <Route path={`${match.url}/collapse`} component={Collapse} />
                <Route path={`${match.url}/carousel`} component={Carousel} />
                <Route path={`${match.url}/message`} component={Message} />
                <Route path={`${match.url}/sticky`} component={Sticky} />
                <Route path={`${match.url}/layout`} component={Layout} />
              </Switch>
            )} />
            <Redirect to="/components/layout" />
          </Switch>
        </App>
      </HashRouter>
    )
  }
}
