import { configureStore } from '@reduxjs/toolkit' // 引入rtk的配置
import userSlice from '@/store/slice/userSlice' // 业务模块状态：计数器状态
import {  useDispatch, useSelector } from 'react-redux'


export const store = configureStore({
    reducer: {
        user: userSlice,
    },
    // 配置，这里忽略了序列化失败警告
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector
