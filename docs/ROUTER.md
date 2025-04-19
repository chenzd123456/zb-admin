# 路由系统文档

## 1. 路由配置
位置: `src/routers/`

### 主路由文件
`index.ts` 负责:
- 导入所有模块路由
- 创建路由实例
- 配置路由守卫
- 导出路由对象

### 模块化路由
`modules/` 目录包含:
- 系统管理路由
- 数据展示路由
- 表单页面路由
- 错误页面路由

## 2. 路由结构示例
```typescript
// src/routers/modules/system.ts
const systemRoutes = [
  {
    path: '/system',
    component: Layout,
    meta: { title: '系统管理', icon: 'setting' },
    children: [
      {
        path: 'user',
        component: () => import('@/views/system/user'),
        meta: { title: '用户管理' }
      },
      // 其他子路由...
    ]
  }
]
```

## 3. 路由元信息(meta)
支持的meta字段:
- `title`: 页面标题(显示在面包屑和标签页)
- `icon`: 菜单图标
- `hidden`: 是否隐藏菜单
- `keepAlive`: 是否缓存组件
- `permission`: 所需权限标识

## 4. 权限控制
`src/permission.ts` 实现:
- 登录状态验证
- 路由动态加载
- 权限校验
- 页面跳转控制

## 5. 路由使用规范
1. **命名规范**:
   - 路由name使用PascalCase
   - 路径使用kebab-case

2. **懒加载**:
   ```typescript
   component: () => import('@/views/system/user')
   ```

3. **路由守卫**:
   - 全局守卫定义在`permission.ts`
   - 局部守卫使用组件内`beforeRouteEnter`等

4. **动态路由**:
   ```typescript
   // 添加动态路由
   router.addRoute(parentName, newRoute)
   ```

## 6. 常见问题
1. **页面刷新白屏**:
   - 检查路由组件导入路径
   - 确认动态路由已正确注册

2. **404处理**:
   - 确保通配路由放在最后
   ```typescript
   { path: '/:pathMatch(.*)*', redirect: '/404' }
   ```

3. **路由缓存**:
   - 使用`keep-alive`和`include`组合
   ```vue
   <router-view v-slot="{ Component }">
     <keep-alive :include="cachedViews">
       <component :is="Component" />
     </keep-alive>
   </router-view>