import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
// import Home from './pages/home';
import Index from './pages/index'
import Start from './pages/start'
import Icon from './pages/icon'
import Button from './pages/button'
import Collapse from './pages/collapse'
import Carousel from './pages/carousel'
import Cascader from './pages/cascader'
import Menu from './pages/Menu'
import Message from './pages/message'
import Modal from './pages/modal'
import Input from './pages/input'
import Layout from './pages/layout'
import Popover from './pages/popover'
import Sticky from './pages/sticky'
import Grid from './pages/grid'
import Upload from './pages/upload'
import Slide from './pages/slide'
import Loading from './pages/loading'
import App from './App'

export default class IRouter extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route
              path="/components"
              component={({ match }: any) => (
                <Switch>
                  <Route exact path={`${match.url}`} component={Index} />
                  <Route exact path={`${match.url}/start`} component={Start} />
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
                  <Route path={`${match.url}/layout`} component={Layout} />
                  <Route path={`${match.url}/input`} component={Input} />
                  <Route path={`${match.url}/upload`} component={Upload} />
                  <Route path={`${match.url}/slide`} component={Slide} />
                  <Route path={`${match.url}/loading`} component={Loading} />
                </Switch>
              )}
            />
            <Redirect to="/components/icon" />
          </Switch>
        </App>
      </HashRouter>
    )
  }
}
