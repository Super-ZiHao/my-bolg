import everyDayList from '@/utils/constants/everyDay'
import EveryDayItem from './EveryDayItem'

type Props = {}
const Everyday: React.FC<Props> = () => {
  return (
    <div className="w-full h-full everyday">
      <EveryDayItem
        title="CSS"
        dataList={everyDayList.everyDayCSSList}
        style={
          // @ts-ignore
          { '--animate-delay': '0s' }
        }
      />
      {/* <EveryDayItem
        title="JavaScript"
        dataList={everyDayList.everyDayJSList}
        style={
          // @ts-ignore
          { '--animate-delay': '0.2s' }
        }
      /> */}
      <EveryDayItem
        title="其他"
        dataList={everyDayList.everyDayOtherList}
        style={
          // @ts-ignore
          { '--animate-delay': '0.2s' }
        }
      />
    </div>
  )
}

export default Everyday
