# 工具函数文档

## 1. 工具函数目录结构
```
src/utils/
├── auth.ts        # 认证相关工具
├── clipboard.ts   # 剪贴板操作
├── downloadzip.ts # 文件下载
├── element.ts     # ElementUI扩展
├── emojis.ts      # 表情处理
├── exportExcel.ts # Excel导出
├── index.ts       # 工具集入口
├── Print.js       # 打印功能
├── resize.js      # 窗口调整
├── validate.ts    # 表单验证
└── waterMarker.ts # 水印功能
```

## 2. 核心工具函数

### 2.1 认证工具 (auth.ts)
```typescript
/**
 * 获取token
 */
export function getToken(): string | null {
  return localStorage.getItem(TokenKey)
}

/**
 * 设置token
 */
export function setToken(token: string) {
  localStorage.setItem(TokenKey, token)
}
```

### 2.2 剪贴板操作 (clipboard.ts)
```typescript
/**
 * 复制文本到剪贴板
 * @param text 要复制的文本
 */
export function copyText(text: string): Promise<void>
```

### 2.3 Excel导出 (exportExcel.ts)
```typescript
/**
 * 导出Excel文件
 * @param data 表格数据
 * @param header 表头
 * @param filename 文件名
 */
export function exportExcel(data: any[], header: string[], filename: string)
```

## 3. 使用示例

### 3.1 使用认证工具
```typescript
import { getToken, setToken } from '@/utils/auth'

// 获取token
const token = getToken()

// 设置token
setToken('new-token')
```

### 3.2 使用剪贴板功能
```typescript
import { copyText } from '@/utils/clipboard'

await copyText('要复制的文本')
```

## 4. 开发规范

1. **单一职责**：每个工具函数只做一件事
2. **类型安全**：使用TypeScript类型定义
3. **单元测试**：重要工具函数需有单元测试
4. **文档注释**：每个函数需有JSDoc注释

## 5. 最佳实践

1. 通用工具函数放在utils目录
2. 业务相关工具放在对应业务目录
3. 复杂工具函数应提供使用示例
4. 性能敏感的工具函数需有性能说明