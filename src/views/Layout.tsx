import RouterElement from '@/router'
import { Menu } from '@/components'
import { menuList } from '@/utils/constants'
import { AlertOutlined, CarryOutOutlined, HomeOutlined, ExperimentOutlined, PhoneOutlined } from '@ant-design/icons'
import React from 'react'

const icons: { [t: string]: React.ReactNode } = {
  home: <HomeOutlined />,
  works: <CarryOutOutlined />,
  study: <AlertOutlined />,
  experiment: <ExperimentOutlined />,
  contact: <PhoneOutlined />
}

const Layout = () => {
  return (
    <div className="layout">
      <div className="sider" style={{ width: '160px' }}>
        <div className="w-full pt-12 pb-12 text-center color-white fs-24 fw-bold color-01">MyBolg</div>
        <Menu>
          {menuList.map((item) => (
            <Menu.Item path={item.path} key={item.id} icon={icons[item.path]}>
              {item.title}
            </Menu.Item>
          ))}
        </Menu>
      </div>
      <main className='main'>
        <RouterElement />
      </main>
    </div>
  )
}

export default Layout
