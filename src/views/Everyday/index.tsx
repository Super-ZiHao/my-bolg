import { everyDayCSSList, everyDayJSList } from '@/utils/constants/everyDay'
import { Collapse, Empty } from 'antd'

type Props = {}
const Everyday: React.FC<Props> = () => {
  const { Panel } = Collapse

  return (
    <div className="w-full h-full everyday">
      <div className="everyday-item">
        <div className="h-full" style={{ overflow: 'overlay' }}>
          <h1 className="everyday-title convex-text ff-kt ml-8">CSS</h1>
          <Collapse className="everyday-main" accordion>
            {everyDayCSSList.map((item, index) => (
              <Panel className="item" header={item.title} key={item.id}>    
                {item.value}
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
      <div className="everyday-item">
        <h1 className="everyday-title convex-text ff-kt ml-8">JavaScript</h1>
        {everyDayJSList.length > 0 ? (
          <Collapse className="everyday-main" accordion>
            {everyDayJSList.map((item, index) => (
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

export default Everyday
