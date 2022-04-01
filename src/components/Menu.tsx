import React from 'react'
import { useNavigate } from 'react-router'

type MenuItemProps = {
  className?: string
  icon?: React.ReactNode
  height?: number
  path?: string
}

const MenuItem: React.FC<MenuItemProps> = ({ children, className, icon, height = 40, path }) => {
  const navigate = useNavigate()
  const textMarginLeft = icon ? 12 : 0
  const goPath = () => {
    navigate(path as string)
  }
  return (
    <div className={`${className || ''} ZH-menu-item`} style={{ height: height }}>
      <div className="ZH-menu-item-title" onClick={goPath}>
        {icon && icon}
        <div className="ZH-menu-item-text" style={{ marginLeft: textMarginLeft }}>
          {children || '暂无数据'}
        </div>
      </div>
    </div>
  )
}

type MenuProps = {
  className?: string
}
interface ReactFC<T> extends React.FC<T> {
  Item: React.FC<MenuItemProps>
}

export const Menu: ReactFC<MenuProps> = ({ className, children }) => {
  return <div className={`${className} ZH-menu`}>{children}</div>
}

Menu.Item = MenuItem

export default Menu
