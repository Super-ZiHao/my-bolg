import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { ThunderboltOutlined, FolderOpenOutlined } from '@ant-design/icons'
import { titleList, menuList } from '@/utils/constants'
import { printPDF } from '@/utils/function'

type Props = {

}
const Home: React.FC<Props> = () => {
  const navigate = useNavigate()
  const [nowTitle, setNowTitle] = useState<string>(titleList[0])
  const nowTitleRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    // setTimeout(() => {
    //   ;(nowTitleRef.current as HTMLSpanElement).style.width = `${(nowTitleRef.current as HTMLSpanElement)?.offsetWidth - 100}px`
    // }, 1000)
  }, [nowTitle])

  const getNowText = () => {}

  const goContact = () => {
    navigate(`/${menuList.find((item) => item.title === '联系')?.path as string}`)
  }
  const goWorks = () => {
    navigate(`/${menuList.find((item) => item.title === '作品集')?.path as string}`)
  }
  return (
    <div className="home">
      <div className="home-card">
        <div className="home-hello fs-20 color-white">HELLO!</div>
        <div className="home-title flex items-center fs-44 color-white mt-16 no-wrap">
          <span>我是 ——</span>
          <span className="ml-12 fw-bold color-01 inline-block overflow-hidden transition-30" ref={nowTitleRef}>
            {nowTitle}
          </span>
        </div>
        <div className="home-profile">
          巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉
        </div>
        <div className="home-button">
          <div className="home-button-item" onClick={goContact}>
            <ThunderboltOutlined />
            <div className="ml-18">了解更多</div>
          </div>
          <div className="home-button-item ml-24" onClick={goWorks}>
            <FolderOpenOutlined />
            <div className="ml-18">作品集</div>
          </div>
          <div className="home-button-item ml-24" onClick={printPDF}>
            <FolderOpenOutlined />
            <div className="ml-18">打印</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
