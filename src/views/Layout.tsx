import React, { useEffect } from 'react'
import { AlertOutlined, CarryOutOutlined, HomeOutlined, ExperimentOutlined, PhoneOutlined } from '@ant-design/icons'
import RouterElement from '@/router'
import Menu from '@/components/Menu'
import { menuList } from '@/utils/constants'
import { useCurrentModule, useReplaceCurrentModule } from '@/utils/hooks'
import { useLocation } from 'react-router-dom'

const icons: { [t: string]: React.ReactNode } = {
  home: <HomeOutlined />,
  works: <CarryOutOutlined />,
  study: <ExperimentOutlined />,
  everyday: <AlertOutlined />,
  'about-me': <PhoneOutlined />
}

const Layout = () => {
  const currentModule = useCurrentModule()
  const replaceCurrentModule = useReplaceCurrentModule()
  const location = useLocation()
  useEffect(() => {
    replaceCurrentModule(menuList.find((item) => `/${item.path}` === location.pathname)?.path || 'home');
  }, [])
  return (
    <div className="layout">
      <div className="sider" style={{ width: '160px' }}>
        <div className="w-full pt-12 pb-12 text-center color-white fs-24 fw-bold color-01">MyBolg</div>
        <Menu>
          {menuList.map((item) => (
            <Menu.Item className={`${currentModule === item.title ? 'selected' : ''}`} key={item.id} icon={icons[item.path]} onClick={() => replaceCurrentModule(item.path)}>
              {item.title}
            </Menu.Item>
          ))}
        </Menu>
      </div>
      <main className="main">
        <RouterElement />
      </main>
    </div>
  )
}

export default Layout
