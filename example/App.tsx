import React, { Component } from 'react';
import CHeader from './components/CHeader/CHeader.example';
import CNavLeft from './components/CNavLeft/CNavLeft.example';
import { Layout, Aside, Header, Content } from '../lib/components/layout/Layout';
import './style/index.scss';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <CHeader />
        </Header>
        <Layout className="main-content">
          <Aside className="c-navleft">
            <CNavLeft/>
          </Aside>
          <Content className="main-content-right">
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
