import React from 'react'
import { Router, browserHistory } from 'react-router'
import { render } from 'react-dom'
import rootRoute from './route'
import Icon from '@hi-ui/hiui/es/icon'
import {NavGroup, Logo, Genuine as Page} from '@hi-ui/classic-theme'
import './app.scss'
const header = (
  <React.Fragment>
    <NavGroup pos="right">
      {/* <NavGroup.Item>
        <Icon name="search" className="header__operation-btns"/>
      </NavGroup.Item>
      <NavGroup.Item>
        <Icon name="plus" className="header__operation-btns"/>
      </NavGroup.Item>
      <NavGroup.Item>
        <Icon name="share" className="header__operation-btns"/>
      </NavGroup.Item>
      <NavGroup.Item>
        <Icon name="more" className="header__operation-btns"/>
      </NavGroup.Item> */}
      <div className="header__btns">
        <Icon name="search" className="header__operation-btns"/>
      
        <Icon name="plus" className="header__operation-btns"/>
      
        <Icon name="share" className="header__operation-btns"/>
      
        <Icon name="more" className="header__operation-btns"/>
      </div>
      
    </NavGroup>
  </React.Fragment>
)
const logo = <Logo
  url="https://xiaomi.github.io/hiui/#/"
  logoUrl="https://xiaomi.github.io/hiui/static/img/logo.png?241e0618fe55d933c280e38954edea05"
  text="HIUI Demo"
  title="HIUI Classic Theme Demo"
  alt="Project Logo"
/>
const sider = {
  items: [
    {
      title: '表格模板',
      icon: <Icon name="usergroup" />,
      children: [
        {
          title: '基础表格',
          to: '/basic'
        },
        {
          title: '分组-横向',
          to: '/group-horizontal'
        },
        {
          title: '分组-纵向',
          to: '/group-vertical'
        },
        {
          title: '平铺-多选',
          to: '/tile-multiple'
        },
        {
          title: '平铺-单选',
          to: '/tile-single'
        },
        {
          title: '树形-多选',
          to: '/tree-multiple'
        },
        {
          title: '树形-单选',
          to: '/tree-single'
        },
        {
          title: '查询',
          to: '/query'
        }
      ]
    }
  ]
}

render((
  <Page
    header={header}
    // footer={footer}
    logo={logo}
    routes={rootRoute}
    sider={sider}
    config={{
      color: 'black'
      // type: 'card'
    }}
  ></Page>
), document.getElementById('app'))