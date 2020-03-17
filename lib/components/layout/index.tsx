import React, { ReactElement } from 'react'
import { ReactNodeArray } from 'prop-types'
import { combineClass, prefixClass } from '../../helpers/utils'
import Aside from './Aside'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './layout.scss'

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {}

const Layout: React.FunctionComponent<LayoutProps> = props => {
  const { className, children, ...restProps } = props

  const hasAside = (children as ReactNodeArray).some(ele => {
    return (ele as ReactElement).type === Aside
  })

  return (
    <div
      className={combineClass(
        'r-layout',
        className,
        `${hasAside ? prefixClass('r-layout')('has-aside') : ''}`,
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}

Layout.displayName = 'Layout'
export { Layout, Header, Content, Footer, Aside }
export default Layout
