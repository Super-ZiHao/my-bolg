import { Outlet, useNavigate } from 'react-router-dom'
import { Empty } from 'antd'
import { worksList } from '@/utils/constants'
import { useState } from 'react'

type Props = {}
const Works: React.FC<Props> = () => {
  const [left, setLeft] = useState<string[]>(['calc(-100% - 192px)', '0'])
  const navigate = useNavigate()
  const open = (path: string) => {
    setLeft(['0', 'calc(100% + 192px)'])
    navigate(`/works/${path}`)
  }
  const handleBack = () => {
    setLeft(['calc(-100% - 192px)', '0'])
    setTimeout(() => {
      navigate(-1);
    }, 1000)
  }
  return (
    <div className="flex w-full h-full relative">
      <div className="main-card exhibition" style={{ left: left[0] }}>
        <div className="exhibition-left">
          <Outlet />
        </div>
        <div className="exhibition-right" onClick={handleBack}>
          <div className="exhibition-right-icon" />
        </div>
      </div>
      <div className="main-card works" style={{ left: left[1] }}>
        <div className="works-main">
          {worksList.map((item, index) => (
            <div
              className="works-main-item"
              key={index}
              onClick={() => open(item.path)}
              style={{ animation: `X ${0.5 + index / 10}s ease forwards` }}
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
