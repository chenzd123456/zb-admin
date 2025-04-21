# API 接口规范文档

## 1. 请求封装说明

### 1.1 基础配置
```typescript
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 3000000,
  withCredentials: true
})
```

### 1.2 请求拦截器
自动添加Authorization头：
```typescript
service.interceptors.request.use(config => {
  const token = useUserStore().token
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
})
```

### 1.3 响应拦截器
```typescript
service.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
```

## 2. 接口调用规范

### 2.1 基本格式
```typescript
export function apiName(params) {
  return request({
    url: '/api/path',
    method: 'get|post|put|delete',
    params, // GET参数
    data,   // POST参数
  })
}
```

### 2.2 用户接口示例
```typescript
// 登录接口
export function login(data) {
  return request({
    url: '/vue-element-perfect/user/login',
    method: 'post',
    data,
  })
}
```

## 3. 错误处理

### 3.1 错误码规范
| 错误码 | 说明 |
|--------|------|
| 401    | 未授权 |
| 403    | 禁止访问 |
| 500    | 服务器错误 |

### 3.2 错误处理示例
```typescript
try {
  await login(formData)
} catch (error) {
  ElMessage.error(error.message)
}
```

## 4. 接口开发规范

1. **命名规范**：使用小驼峰命名，动词开头（getUserInfo）
2. **参数规范**：
   - GET参数使用params
   - POST参数使用data
3. **文档要求**：每个接口需添加注释说明
```typescript
/**
 * 用户登录接口
 * @param {Object} data - 登录参数 
 * @param {string} data.username - 用户名
 * @param {string} data.password - 密码
 */
export function login(data) {
  // ...
}
```

## 5. 最佳实践

1. 接口统一管理在src/api目录
2. 按业务模块拆分文件（user.ts, product.ts等）
3. 使用TypeScript定义接口类型
4. 重要接口添加单元测试