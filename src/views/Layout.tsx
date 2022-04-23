import React from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { replaceModule } from '@/store/action'
import { AlertOutlined, CarryOutOutlined, HomeOutlined, ExperimentOutlined, PhoneOutlined } from '@ant-design/icons'
import RouterElement from '@/router'
import Menu from '@/components/Menu'
import { menuList } from '@/utils/constants'
import { useCurrentModule } from '@/utils/hooks'

const icons: { [t: string]: React.ReactNode } = {
  home: <HomeOutlined />,
  works: <CarryOutOutlined />,
  study: <ExperimentOutlined />,
  everyday: <AlertOutlined />,
  'about-me': <PhoneOutlined />
}

const Layout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentModule = useCurrentModule()
  const handleClick = (path: string) => {
    dispatch(replaceModule(menuList.find((item) => item.path === path)?.title, currentModule))
    navigate(path)
  }
  return (
    <div className="layout">
      <div className="sider" style={{ width: '160px' }}>
        <div className="w-full pt-12 pb-12 text-center color-white fs-24 fw-bold color-01">MyBolg</div>
        <Menu>
          {menuList.map((item) => (
            <Menu.Item className={`${currentModule === item.title ? 'selected' : ''}`} key={item.id} icon={icons[item.path]} onClick={() => handleClick(item.path)}>
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
