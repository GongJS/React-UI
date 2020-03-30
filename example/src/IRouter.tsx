import React, { Component, lazy, Suspense } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
const Index = lazy(() => import('./pages/index'))
const Start = lazy(() => import('./pages/start'))
const Button = lazy(() => import('./pages/button'))
const DatePicker = lazy(() => import('./pages/date-picker'))
const Grid = lazy(() => import('./pages/grid'))
const Icon = lazy(() => import('./pages/icon'))
const Carousel = lazy(() => import('./pages/carousel'))
const Cascader = lazy(() => import('./pages/cascader'))
const Collapse = lazy(() => import('./pages/collapse'))
const Input = lazy(() => import('./pages/input'))
const Layout = lazy(() => import('./pages/layout'))
const Loading = lazy(() => import('./pages/loading'))
const Menu = lazy(() => import('./pages/menu'))
const Message = lazy(() => import('./pages/message'))
const Modal = lazy(() => import('./pages/modal'))
const Popover = lazy(() => import('./pages/popover'))
const Slide = lazy(() => import('./pages/slide'))
const Sticky = lazy(() => import('./pages/sticky'))
const Upload = lazy(() => import('./pages/upload'))
const Table = lazy(() => import('./pages/table'))

export default class IRouter extends Component {
  render() {
    return (
      <HashRouter>
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
                <Route path={`${match.url}/table`} component={Table} />
                <Route
                  path={`${match.url}/date-picker`}
                  component={DatePicker}
                />
              </Switch>
            )}
          />
          <Redirect to="/components/icon" />
        </Switch>
      </HashRouter>
    )
  }
}
