# 核心模块分析

## 1. API模块 (`src/api/`)
### 1.1 功能职责
- 封装所有HTTP请求
- 统一错误处理
- 请求/响应拦截
- 接口定义和类型声明

### 1.2 关键实现
```typescript
// src/api/request.ts
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 添加token等处理
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 统一处理响应数据
    return response.data
  },
  (error) => {
    // 统一错误处理
    return Promise.reject(error)
  }
)
```

## 2. 状态管理 (`src/store/`)
### 2.1 模块划分
- 用户模块(user)
- 权限模块(permission)
- 应用配置(app)
- 标签页(tagsView)

### 2.2 设计特点
- 模块化状态管理
- 持久化存储关键状态
- 与路由系统深度集成

## 3. 工具模块 (`src/utils/`)
### 3.1 核心工具
- 权限验证(auth.ts)
- 剪贴板操作(clipboard.ts)
- Excel导出(exprotExcel.ts)
- 表单验证(validate.ts)
- 水印功能(waterMarker.ts)

### 3.2 设计原则
- 功能单一
- 无副作用
- 类型安全

## 4. 路由系统 (`src/routers/`)
### 4.1 路由结构
- 静态路由
- 动态路由(基于权限)
- 嵌套路由

### 4.2 关键特性
- 路由守卫集成权限控制
- 路由懒加载
- 保持滚动位置

## 5. 组件系统 (`src/components/`)
### 5.1 基础组件
- SvgIcon: SVG图标组件
- Table: 增强表格组件
- Upload: 文件上传组件

### 5.2 业务组件
- AvatarCropper: 头像裁剪
- DataScreen: 数据大屏
- WangEditor: 富文本编辑器