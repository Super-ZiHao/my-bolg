import { everyDayList } from '@/utils/constants/everyDay'
import { Collapse } from 'antd'

type Props = {}
const Everyday: React.FC<Props> = () => {
  const { Panel } = Collapse

  return (
    <div className="w-full h-full">
      <Collapse className="everyday-main">
        {everyDayList.map((item, index) => (
          <Panel className="everyday-item" header={item.title} key={item.id}>{ item.value }</Panel>
        ))}
      </Collapse>
    </div>
  )
}

export default Everyday
