# 路由系统分析

## 路由结构
- 主路由文件: `src/routers/index.ts`
- 模块化路由: `src/routers/modules/`
- 路由类型定义: `src/routers/index.ts`中的RouteRecordRaw

## 核心特性
1. **动态路由加载**
   - 根据用户权限动态生成路由
   - 使用`router.addRoute()`方法动态添加路由

2. **路由守卫**
   - 全局前置守卫(`permission.ts`)
   - 权限校验逻辑
   - 页面标题设置

3. **路由元信息(meta)**
   ```typescript
   interface RouteMeta {
     title: string;       // 页面标题
     icon?: string;       // 菜单图标
     roles?: string[];    // 可访问角色
     keepAlive?: boolean; // 是否缓存
     hidden?: boolean;    // 是否隐藏菜单
   }
   ```

## 模块化路由示例
```typescript
// src/routers/modules/system.ts
{
  path: '/system',
  component: Layout,
  redirect: '/system/user',
  meta: { title: '系统管理', icon: 'system' },
  children: [
    {
      path: 'user',
      component: () => import('@/views/system/user/index.vue'),
      meta: { title: '用户管理' }
    },
    // 其他子路由...
  ]
}
```

## 权限控制流程
1. 用户登录获取权限信息
2. 过滤生成有权限的路由表
3. 动态添加路由
4. 生成菜单