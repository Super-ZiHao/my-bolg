import { everyDayListType } from '@/utils/constants/everyDay'
import { Collapse, Empty } from 'antd'

type Props = {
  dataList: everyDayListType[]
  title: string
}

const EveryDayItem: React.FC<Props> = ({ dataList, title }) => {
  const { Panel } = Collapse
  return (
    <div className="everyday-item">
      <div className='h-full' style={{ overflow: 'overlay' }}>
        <h1 className="everyday-title convex-text ff-kt ml-8">{ title }</h1>
        {dataList.length > 0 ? (
          <Collapse className="everyday-main" accordion>
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