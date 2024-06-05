import axios from 'axios'
import { ElMessageBox, ElMessage } from 'element-plus'
import sysConfig from '@/config'
import tool from '@/utils/tool'
import router from '@/router'

const loginBack = ref(false)
const service = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASEURL}`,
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 60000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    (config) => {
        config.headers['crossDomain'] = true
        const token = tool.data.get('BID_TOKEN')
        if (token) {
            config.headers['Token'] = sysConfig.TOKEN_PREFIX + token
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 保持重新登录Modal的唯一性
const error = () => {
    loginBack.value = true
    ElMessageBox.alert('登录已失效， 请重新登录', '提示', {
        confirmButtonText: '确定',
        closeOnClickModal: false,
        showClose: false,
        showCancelButton: false,
        type: 'warning'
    })
        .then(() => {
            loginBack.value = false
            tool.data.remove('BIDDING_USER')
            tool.data.remove('BID_TOKEN')
            // router.replace({
            // 	path: '/bidding/index'
            // })
            window.location.href = '/bidding/index'
        })
        .catch((error) => {})
}
// response interceptor
service.interceptors.response.use(
    (response) => {
        const res = response.data
        if (res.code == 401) {
            if (!loginBack.value) {
                error()
            }
            return
        }
        if (res.code !== 200 && res.code !== 0 && res.code != 500 && res.code != 415) {
            if (res.code != 401) {
                ElMessage({
                    message: res.msg || 'Error',
                    type: 'error',
                    duration: 5 * 1000
                })
            }
            return Promise.reject(res)
        } else {
            return res
        }
    },
    (error) => {
        return Promise.reject(error)
    }
)
// 适配器, 用于适配不同的请求方式
export const baseRequest = (url, value = {}, method = 'post', options = {}) => {
    url = sysConfig.API_URL + url
    if (method === 'post') {
        // post 分页
        return service.post(url, value, {
            headers: {
                size: value?.size,
                current: value?.current
            },
            ...options
        })
    } else if (method === 'get') {
        return service.get(url, { params: value, ...options })
    } else if (method === 'formdata') {
        // form-data表单提交的方式
        return service.post(url, qs.stringify(value), {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            ...options
        })
    } else {
        // 其他请求方式，例如：put、delete
        return service({
            url: url,
            data: value,
            method: method,
            ...options
        })
    }
}

export default service
