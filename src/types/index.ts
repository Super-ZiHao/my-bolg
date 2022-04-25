import { RouteObject } from 'react-router'


export type BolgModularTitleType = '首页' | '作品集' | '学习' | '每日一问' | '关于我' | ''
export type BolgModularPathType = 'home' | 'works' | 'study' | 'everyday' | 'about-me'
export interface menuListInterface {
  id: number
  title: BolgModularTitleType
  path: BolgModularPathType
}

export interface worksInterface extends RouteObject {
  path: string
  title?: string
  codeUrl?: string
}
export interface worksDivListInterface {
  element: React.ReactNode,
  title: string
}