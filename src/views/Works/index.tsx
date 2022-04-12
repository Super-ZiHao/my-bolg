import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Empty } from 'antd'
import { worksList } from '@/utils/constants'

type Props = {}
const Works: React.FC<Props> = () => {
  const navigate = useNavigate()
  const [nowUrlIndex, setNowUrlIndex] = useState<number>(-1)
  // 是否打开详情
  const [isSelected, setIsSelected] = useState<boolean>(false)
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
    setIsSelected(true)
    navigate(path)
    setNowUrlIndex(index)
  }
  const clearSelected = () => {
    setSelected(-1)
    setIsSelected(false)
  }
  const getOptionStyle = () => {
    if (isSelected) {
      return {
        width: '300px',
        gridTemplateColumns: '1fr',
        gridAutoRows: '150px'
      }
    }
    return {
      width: '100%'
    }
  }
  // 跳转至源码
  const goCode = () => {
    if (!worksList[nowUrlIndex].codeUrl) return
    window.open(worksList[nowUrlIndex].codeUrl)
  }
  return (
    <div className="flex w-full h-full relative">
      <div className="main-card flex justify-between works">
        <div className="works-main overflow-hidden" style={{ width: isSelected ? 'calc(100% - 280px)' : '0%' }}>
          {worksList[nowUrlIndex]?.codeUrl && (
            <div className="get-code" onClick={goCode}>
              查看源码
            </div>
          )}
          <Outlet />
          <div className="unopen" onClick={clearSelected}></div>
        </div>
        <div className="works-option" style={getOptionStyle()}>
          {worksList.map((item, index) => (
            <div
              className={`works-option-item ${index === selected ? 'selected' : ''}`}
              key={index}
              style={{ animation: animationNumber === index ? '跳动 .3s linear' : '' }}
              onClick={() => openSelected(item.path, index)}
            >
              {item.title ? <div className="ff-kt fs-44 color-02 text-center lh-56">{item.title}</div> : <Empty />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Works
