import { everyDayCSSList, everyDayJSList } from '@/utils/constants/everyDay'
import EveryDayItem from './EveryDayItem'

type Props = {}
const Everyday: React.FC<Props> = () => {

  return (
    <div className="w-full h-full everyday">
      <EveryDayItem title='CSS' dataList={everyDayCSSList} />
      <EveryDayItem title="JavaScript" dataList={everyDayJSList} />
    </div>
  )
}

export default Everyday
