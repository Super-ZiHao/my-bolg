import Highlight from "@/components/Highlight";
import Title from "./components/Title";
import { everyDayListType } from './index'

export const everyDayOtherList: everyDayListType[] = [
  {
    id: 20000,
    title: <Title title="你知道怎么在浏览器上预览打印效果吗？" date="2022 - 04 - 23" />,
    value: <Highlight>{`//  谷歌 || Edge || 火狐 : Ctrl + P
//  IE :  Alt + F 后松开再按 V
`}</Highlight>
  }
]
