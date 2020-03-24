import React, { Component } from 'react'
import CHeader from './components/header'
import CAside from './components/aside'
import { Layout, Aside, Header, Content } from '../lib/components/layout'
import './style/index.scss'

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <CHeader />
        </Header>
        <Layout className="main-content">
          <Aside className="c-navleft">
            <CAside />
          </Aside>
          <Content className="main-content-right">
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
