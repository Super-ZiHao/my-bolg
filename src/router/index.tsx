import { useRoutes, Navigate } from 'react-router-dom'
import { worksList } from '@/utils/constants'

import Home from '@/views/Home'
import Works from '@/views/Works'
import Demo from '@/views/Demo'
import Everyday from '@/views/Everyday'

const RouterElement = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate replace to="/home" />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/works',
      element: <Works />,
      children: worksList
    },
    {
      path: '/study',
      element: <Demo />
    },
    {
      path: '/everyday',
      element: <Everyday />
    }
  ])
  return element
}

export default RouterElement
