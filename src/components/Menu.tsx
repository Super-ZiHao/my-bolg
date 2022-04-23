import React from 'react'

type MenuItemProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>
  className?: string
  icon?: React.ReactNode
  height?: number
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, children, className, icon, height = 40 }) => {
  const textMarginLeft = icon ? 12 : 0
  return (
    <div className="ZH-menu-item" style={{ height: height }}>
      <div className={`ZH-menu-item-title ${className || ''}`} onClick={onClick}>
        {icon && icon}
        <div className="ZH-menu-item-text" style={{ marginLeft: textMarginLeft }}>
          {children || '暂无数据'}
        </div>
      </div>
    </div>
  )
}

interface MenuAttribute {
  /**
   * 每一个选项
   */
  Item: React.FC<MenuItemProps>
}
interface Props {
  className?: string
}

const Menu: MenuAttribute & React.FC<Props> = ({ className, children }) => {
  return <div className={`${className} ZH-menu`}>{children}</div>
}

Menu.Item = MenuItem

export default Menu
