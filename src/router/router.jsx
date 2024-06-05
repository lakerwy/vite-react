import Layout from '@/layout'
import { createBrowserRouter, Navigate } from 'react-router-dom'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/home"/>
    },
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/home',
                Component: lazy(()=>import('@/views/home')),
            },
            {
                path: '/purchase',
                Component: lazy(()=>import('@/views/purchase/index')),
            },
            {
                path: '/supplier',
                Component: lazy(()=>import('@/views/supplier')),
            },
            {
                path: '/helpCenter',
                Component: lazy(()=>import('@/views/helpCenter')),
            },
            {
                path: '/aboutUs',
                Component: lazy(()=>import('@/views/aboutUs')),
            },
        ]
    },
    {
        path: '*',
        element: <Navigate to="/home"/>
    },
])
export default Router