import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { ThunderboltOutlined, FolderOpenOutlined } from '@ant-design/icons'
import { titleList, menuList } from '@/utils/constants'
type Props = {

}
const Home: React.FC<Props> = () => {
  const navigate = useNavigate()
  const [nowTitleIndex, setNowTitleIndex] = useState<number>(-1)
  // 循环播放 title 简介
  useEffect(() => {
    setTimeout(() => {
      if (nowTitleIndex + 1 >= titleList.length) return setNowTitleIndex(0);
      setNowTitleIndex(nowTitleIndex + 1)
    }, 800);
  }, [nowTitleIndex])

  const goContact = () => {
    navigate(`/${menuList.find((item) => item.title === '联系')?.path as string}`)
  }
  const goWorks = () => {
    navigate(`/${menuList.find((item) => item.title === '作品集')?.path as string}`)
  }
  return (
    <div className="home">
      <div className="home-card">
        <div className="home-hello fs-20 color-white animate__animated animate__fadeInRight">HELLO!</div>
        <div className="home-title flex items-center fs-44 color-white mt-16 no-wrap animate__animated animate__fadeInRight">
          <span>我是 —— </span>
          <span className="ml-12 fw-bold color-01 inline-block overflow-hidden transition-30">
            {titleList[nowTitleIndex]}
          </span>
        </div>
        <div className="home-profile animate__animated animate__fadeInRight">
          开始造轮子咯
        </div>
        <div className="home-button animate__animated animate__fadeInRight">
          <div className="home-button-item" onClick={goContact}>
            <ThunderboltOutlined />
            <div className="ml-18">了解更多</div>
          </div>
          <div className="home-button-item ml-24" onClick={goWorks}>
            <FolderOpenOutlined />
            <div className="ml-18">作品集</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
