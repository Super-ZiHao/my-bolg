import { BolgModularTitleType } from '@/types'

export type initStateType = {
  // 现在的模块
  currentModule: BolgModularTitleType
}
const initState: initStateType = {
  // 现在所在博客模块
  currentModule: '首页'
}
export const rootReducer = (state = initState, action: any) => {
  switch (action.type) {
    case 'replaceModule':
      return { ...state, currentModule: action.value }
    default:
      return { ...state }
  }
}
