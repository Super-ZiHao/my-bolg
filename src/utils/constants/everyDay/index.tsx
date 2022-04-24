import { ReactNode } from 'react'
import { everyDayCSSList } from './everyDayCSS'
import { everyDayJSList } from './everyDayJS'
import { everyDayOtherList } from './everyDayOther'

export type everyDayListType = {
  id: number
  title: string | ReactNode
  value: string | ReactNode
}

export default {
  everyDayCSSList,
  everyDayJSList,
  everyDayOtherList
}
