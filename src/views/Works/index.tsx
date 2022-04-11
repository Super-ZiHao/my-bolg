import React, { CSSProperties, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Empty } from 'antd'
import { worksList } from '@/utils/constants'

type Props = {}
const Works: React.FC<Props> = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const navigate = useNavigate();
  const openSelected = (path: string) => {
    setIsSelected(true)
    navigate(path)
  }
  const getOptionStyle = () => {
    if (isSelected) {
      return {
        width: '20%',
        gridTemplateColumns: '1fr',
        gridAutoRows: '200px',
      }
    }
    return {
      width: '100%'
    }
  }
  return (
    <div className="flex w-full h-full relative">
      <div className="main-card flex justify-between works">
        <div className='works-main overflow-hidden' style={{ width: isSelected ? '80%' : '0%' }}>
          <Outlet />
        </div>
        <div className="works-option" style={getOptionStyle()}>
          {worksList.map((item, index) => (
            <div
              className="works-option-item"
              key={index}
              style={{ animation: `X ${0.5 + index / 10}s ease forwards` }}
              onClick={() => openSelected(item.path)}
            >
              <Empty />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Works
