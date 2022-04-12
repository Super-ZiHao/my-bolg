import { useRoutes, Navigate } from 'react-router-dom'

import Home from '@/views/Home'
import Works from '@/views/Works'
import Demo from '@/views/Demo'
import Battery from '@/views/Works/Battery'

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
      children: [
        {
          path: 'battery',
          element: <Battery />
        },
      ]
    },
    {
      path: '/study',
      element: <Demo />
    }
  ])
  return element
}

export default RouterElement
