import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// import Home from './pages/home';
import Icon from './pages/icon/icon.demo';
import Button from './pages/button/button.demo';
import Collapse from './pages/collapse/collapse.demo'
import Carousel from './pages/carousel/carousel.demo'
import Cascader from './pages/cascader/cascader.demo'
import Menu from './pages/menu/menu.demo'
import Message from './pages/message/message.demo';
import Modal from './pages/modal/modal.demo';
import Popover from './pages/popover/popover.demo';
import Sticky from './pages/sticky/sticky.demo';
import Grid from './pages/grid/grid.demo';
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
                <Route path={`${match.url}/cascader`} component={Cascader} />
                <Route path={`${match.url}/menu`} component={Menu} />
                <Route path={`${match.url}/message`} component={Message} />
                <Route path={`${match.url}/modal`} component={Modal} />
                <Route path={`${match.url}/popover`} component={Popover} />
                <Route path={`${match.url}/sticky`} component={Sticky} />
                <Route path={`${match.url}/grid`} component={Grid} />
              </Switch>
            )} />
            <Redirect to="/components/icon" />
          </Switch>
        </App>
      </HashRouter>
    )
  }
}
