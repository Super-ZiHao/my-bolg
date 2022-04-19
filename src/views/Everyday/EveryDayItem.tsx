import { CSSProperties } from 'react'
import { everyDayListType } from '@/utils/constants/everyDay'
import useFullscreen from '@/utils/hooks/useFullscreen'
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons'
import { Collapse, Empty } from 'antd'
import { useRef } from 'react'

type Props = {
  dataList: everyDayListType[]
  title: string
  style?: CSSProperties
}

const EveryDayItem: React.FC<Props> = ({ dataList, title, style }) => {
  const FullScreenElementRef = useRef<HTMLDivElement>(null)
  const { isCompatible, isFullScreen, openFullScreen, closeFullScreem } = useFullscreen(FullScreenElementRef)
  const { Panel } = Collapse
  return (
    <div className="everyday-item card animate__animated animate__fadeInRight animate__delay-1s" ref={FullScreenElementRef} style={style}>
      <div className="h-full relative">
        {isCompatible && isFullScreen ? (
          <FullscreenExitOutlined onClick={closeFullScreem} className="absolute color-white fs-28 cp" style={{ right: '8px', top: '8px' }} />
        ) : (
          <FullscreenOutlined onClick={openFullScreen} className="absolute color-white fs-28 cp" style={{ right: '8px', top: '8px' }} />
        )}
        <h1 className="everyday-title convex-text ff-kt">{title}</h1>
        {dataList.length > 0 ? (
          <Collapse className="everyday-main" style={{ overflow: 'overlay', height: 'calc(100% - 45px)' }}>
            {dataList.map((item, index) => (
              <Panel className="item" header={item.title} key={item.id}>
                {item.value}
              </Panel>
            ))}
          </Collapse>
        ) : (
          <Empty
            className="flex column items-center justify-center"
            style={{ backgroundColor: 'transparent', border: 'none', height: '75%' }}
          />
        )}
      </div>
    </div>
  )
}

export default EveryDayItem
