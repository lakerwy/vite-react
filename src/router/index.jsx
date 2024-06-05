import Layout from '@/layout'
import { createBrowserRouter, Navigate } from 'react-router-dom'

const Router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/home',
                Component: lazy(()=>import('@/views/home')),
                children: []
            },
        ]
    },
    {
        path: '/',
        element: <Navigate to="/home"/>
    },
    {
        path: '*',
        element: <Navigate to="/home"/>
    }
])
export default Router