import { createSlice } from '@reduxjs/toolkit'

// 使用该类型定义初始 state
const initialState = {
    value: 3
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

// 导出actions方便业务组件调用方法
export const { increment, decrement, incrementByAmount } = userSlice.actions
export default userSlice.reducer
