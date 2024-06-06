import Layout from '@/layout'
import {createBrowserRouter, Navigate} from 'react-router-dom'

export const router = [
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
                Component: lazy(() => import('@/views/home')),
                hideMenu: true,
            },
            {
                path: '/purchase',
                Component: lazy(() => import('@/views/purchase')),
            },
            {
                path: '/supplier',
                Component: lazy(() => import('@/views/supplier')),
            },
            {
                path: '/helpCenter',
                Component: lazy(() => import('@/views/helpCenter')),
            },
            {
                path: '/aboutUs',
                Component: lazy(() => import('@/views/aboutUs')),
            },
        ]
    },
    {
        path: '*',
        element: <Navigate to="/home"/>
    },
]