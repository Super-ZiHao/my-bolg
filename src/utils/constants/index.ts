export const titleList: string[] = ['zihao~~', '一个', '正在坚持', '学习', '提升', '的', '程序猿']

/**
 *==========================================================================
 * 关于 ———— Sider 列表
 *==========================================================================
 */
interface menuListType {
  id: number
  title: string
  path: string
}
export const menuList: menuListType[] = [
  {
    id: 0,
    title: '首页',
    path: 'home'
  },
  {
    id: 1,
    title: '作品集',
    path: 'works'
  },
  {
    id: 2,
    title: '学习',
    path: 'study'
  },
  {
    id: 3,
    title: '实验品(未完成)',
    path: 'experiment'
  },
  {
    id: 4,
    title: '联系',
    path: 'contact'
  }
]

/**
 *==========================================================================
 * 关于 ———— 作品集
 *==========================================================================
 */
interface worksType {
  path: string
  title?: string
}
export const worksList: worksType[] = [
  {
    path: 'battery',
    title: '文字充电特效'
  },
]
