import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Docs from './Docs'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'docs',
    element: <Docs />,
  },
])
