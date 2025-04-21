# 项目配置文档

## 1. 环境变量配置

### 1.1 开发环境 (.env.development)
```ini
# 本地环境
NODE_ENV = 'development'

# 本地环境接口地址 
VITE_APP_BASE_API = '/api'
```

### 1.2 生产环境 (.env.production)
```ini
# 生产环境
NODE_ENV = 'production'

# 生产环境接口地址
VITE_APP_BASE_API = 'https://api.example.com'
```

## 2. 主题配置

### 2.1 基础颜色 (src/config/index.ts)
```typescript
// 默认主题颜色
export const PRIMARY_COLOR = '#409eff'
```

### 2.2 样式变量 (src/styles/variables.scss)
```scss
// 主题色
$--color-primary: #409EFF;
// 成功色
$--color-success: #67C23A;
// 警告色 
$--color-warning: #E6A23C;
// 危险色
$--color-danger: #F56C6C;
```

## 3. 全局配置

### 3.1 请求超时时间
```typescript
// src/api/request.ts
timeout: 3000000 // 50分钟
```

### 3.2 路由配置
```typescript
// src/router/index.ts
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
```

## 4. 配置最佳实践

1. **环境区分**：不同环境使用不同配置
2. **敏感信息**：不要将敏感信息直接写在代码中
3. **类型安全**：为配置项添加TypeScript类型
4. **文档同步**：配置变更需同步更新文档