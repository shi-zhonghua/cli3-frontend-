// Login
import Service from '@/http'

// 用户信息
export const getUser = (options) => {
    return Service.get('https://www.fastmock.site/mock/871b3e736e653b99374b7713e4011f9f/boss/user/list', options)
}