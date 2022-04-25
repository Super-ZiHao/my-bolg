import { useRoutes, Navigate } from 'react-router-dom'
import { worksList } from '@/utils/constants'

import Home from '@/views/Home'
import Works from '@/views/Works'
import Study from '@/views/Study'
import Everyday from '@/views/Everyday'
import AboutMe from '@/views/AboutMe'

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
      element: <Study />
    },
    {
      path: '/everyday',
      element: <Everyday />
    },
    {
      path: '/about-me',
      element: <AboutMe />
    }
  ])
  return element
}

export default RouterElement
