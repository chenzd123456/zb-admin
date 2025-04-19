# API 设计规范

## 请求封装
```typescript
// src/api/request.ts
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
  // 添加token逻辑
  if (store.getters.token) {
    config.headers['Authorization'] = `Bearer ${store.getters.token}`
  }
  return config
})

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 统一处理响应数据
    return response.data
  },
  error => {
    // 统一错误处理
    return Promise.reject(error)
  }
)
```

## 模块划分
- **用户模块** (src/api/user.ts)
  - 登录/注销
  - 用户信息获取
  - 权限验证

- **错误码规范** (src/api/errorCodeType.ts)
  - 定义标准错误码
  - 错误消息映射

## 最佳实践
1. 所有API请求必须通过service实例
2. 接口返回统一使用Promise封装
3. 错误处理遵循全局拦截器规范
4. 模块化组织API接口
