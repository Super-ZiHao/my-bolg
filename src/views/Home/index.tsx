import { useEffect, useState } from 'react'
import { ThunderboltOutlined, FolderOpenOutlined } from '@ant-design/icons'
import { titleList } from '@/utils/constants'
import { useReplaceCurrentModule } from '@/utils/hooks'
type Props = {}
const Home: React.FC<Props> = () => {
  const [nowTitleIndex, setNowTitleIndex] = useState<number>(-1)
  const replaceCurrentModule = useReplaceCurrentModule()

  // 循环播放 title 简介
  useEffect(() => {
    setTimeout(() => {
      if (nowTitleIndex + 1 >= titleList.length) return setNowTitleIndex(0)
      setNowTitleIndex(nowTitleIndex + 1)
    }, 800)
  }, [nowTitleIndex])
  return (
    <div className="home">
      <div className="home-card">
        <div className="home-hello fs-20 color-white animate__animated animate__fadeInRight">HELLO!</div>
        <div className="home-title flex items-center fs-44 color-white mt-16 no-wrap animate__animated animate__fadeInRight">
          <span>我是 —— </span>
          <span className="ml-12 fw-bold color-01 inline-block overflow-hidden transition-30">{titleList[nowTitleIndex]}</span>
        </div>
        <div className="home-profile animate__animated animate__fadeInRight">开始造轮子咯</div>
        <div className="home-button animate__animated animate__fadeInRight">
          <div className="home-button-item" onClick={() => replaceCurrentModule('about-me')}>
            <ThunderboltOutlined />
            <div className="ml-18">了解更多</div>
          </div>
          <div className="home-button-item ml-24" onClick={() => replaceCurrentModule('works')}>
            <FolderOpenOutlined />
            <div className="ml-18">作品集</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
