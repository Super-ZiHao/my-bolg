import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Modal, Empty, Tooltip } from 'antd'
import { worksDivList, worksList } from '@/utils/constants'

type Props = {}
const Works: React.FC<Props> = () => {
  const navigate = useNavigate()
  // 是否打开抽屉
  const [visible, setVisible] = useState<boolean>(false);
  const [nowUrlIndex, setNowUrlIndex] = useState<number>(-1)
  // 目前选中的 index
  const [selected, setSelected] = useState<number>(-1)
  // 卡片划入动画是否结束
  const [isAnimation, setIsAnimation] = useState<boolean>(true)
  // 目前跳动的是第几个
  const [animationNumber, setAnimationNumber] = useState<number>(-1)
  // 动画效果
  useEffect(() => {
    setTimeout(() => {
      setIsAnimation(false)
    }, 500)
  }, [])
  useEffect(() => {
    if (!isAnimation) {
      setTimeout(() => {
        if (animationNumber < worksList.length) setAnimationNumber(animationNumber + 1)
      }, 300)
    }
  }, [animationNumber, isAnimation])

  const openSelected = (path: string, index: number) => {
    setSelected(index)
    navigate(path)
    setNowUrlIndex(index)
    setVisible(true)
  }

  // 跳转至源码
  const goCode = () => {
    if (!worksList[nowUrlIndex].codeUrl) return
    window.open(worksList[nowUrlIndex].codeUrl)
  }
  return (
    <div className="card flex justify-between works animate__animated animate__fadeInRight">
      <Modal
        footer={null}
        onCancel={() => setVisible(false)}
        visible={visible}
      >
        <div className="works-main overflow-hidden">
          {worksList[nowUrlIndex]?.codeUrl && (
            <div className="get-code" onClick={goCode}>
              查看源码
            </div>
          )}
          <Outlet />
        </div>
      </Modal>
      <div className='flex column w-full h-full overflow-auto'>
        <div className='mt-16 mb-16 ml-16 flex column'>
          <h1 className='works-title convex-text ff-kt'>一些有趣的样式</h1>
          <div className="ml-8 works-option" style={{ gridAutoRows: '150px' }}>
            {worksList.map((item, index) => (
              <div
                className={`works-option-item cp significant ${index === selected ? 'selected' : ''}`}
                key={item.title}
                onClick={() => openSelected(item.path, index)}
              >
                {item.title ? <div className="ff-kt fs-44 text-center lh-56">{item.title}</div> : <Empty />}
              </div>
            ))}
          </div>
        </div>
        <div className='mt-16 ml-16 flex column'>
          <h1 className='works-title convex-text ff-kt'>单标签特效集</h1>
          <div className="ml-8 works-option">
            {worksDivList.map((item) => (
              <Tooltip
                color="blue"
                title={item.title}
                key={item.title}
              >
                <div className='works-option-item single' >
                  {item.element}
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
