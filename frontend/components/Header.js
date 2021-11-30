import React, { useState, useEffect } from 'react'
import { Menu, Layout } from 'antd'
import Router from 'next/router'
import Image from 'next/image'
import { useRouter } from 'next/router'
import MainHead from './head'
import  '/styles/Home.module.css'
const { Header } = Layout
const HeaderComponent = () => {
  const router = useRouter()
  const [selectedKeys, setSelectedKeys] = useState(['/lights'])
  useEffect(() => setSelectedKeys(router.pathname), [router.pathname])
  return (
    <Header
      style={{
        position: 'unset',
        zIndex: 1,
        width: '100%',
        background: '#fff',
      }
    }
    >
      <MainHead title={'DigiHome'} />
      <a href='#' rel='noreferrer' target='_blank' style={{}}>
        {/* <Image
          src='/logo/canoo-logo.svg'
          alt='https://www.canoo.com'
          layout='fill'
        /> */}
        <h1 className="logo-title" style={{"font-size": "3rem", "font-weight": "600","text-align":"center","margin-bottom":"0"}}>DigiHome</h1>  
      </a>
      <span className="logo-subtitle" style={{"font-size": "1rem","line-height":"1.2rem","font-weight": "600","text-align":"center","display":"block"}}>Home Automation Made Easy</span>
      <Menu
        theme='light'
        mode='horizontal'
        onClick={(e) => {
          setSelectedKeys([e.key])
          Router.push(e.key)
        }}
        selectedKeys={selectedKeys}
        selectable
      >
        <Menu.Item key='/lights'>Lights</Menu.Item>
        <Menu.Item key='/thermostats'>Thermostats</Menu.Item>
        <Menu.Item
          style={{
            marginLeft: 'calc(100vw - 450px)',
          }}
          key='/log-history'
        >
          Logs
        </Menu.Item>
      </Menu>
    </Header>
  )
}
export default HeaderComponent
