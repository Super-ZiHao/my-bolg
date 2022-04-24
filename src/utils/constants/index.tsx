import React from 'react'
import { menuListInterface, worksInterface, worksDivListInterface } from '@/types'
import Battery from '@/views/Works/Battery'
import Drop from '@/views/Works/Drop'
import Ripple from '@/views/Works/Ripple'

export const titleList: string[] = ['zihao~~', '一个', '坚持学习', '努力提升自我', '的程序猿', '欢迎', '各位大佬查看', '我的博客']

/**
 *==========================================================================
 * 关于 ———— Sider 列表
 *==========================================================================
 */
export const menuList: menuListInterface[] = [
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
    title: '每日一问',
    path: 'everyday'
  },
  {
    id: 4,
    title: '关于我',
    path: 'about-me'
  }
]

/**
 *==========================================================================
 * 关于 ———— 作品集
 *==========================================================================
 */
export const worksList: worksInterface[] = [
  {
    path: 'battery',
    element: <Battery />,
    title: '文字充电效果',
    codeUrl: 'https://codepen.io/huangzihao3344/pen/YzYjOgQ'
  }
]
export const worksDivList: worksDivListInterface[] = [
  {
    element: <Drop />,
    title: '水珠'
  },
  {
    element: <Ripple />,
    title: '波浪'
  }
]