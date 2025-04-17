# 路由权限系统核心机制分析

## 1. 动态路由加载详细流程

### 1.1 权限验证核心逻辑
```typescript
// 权限验证方法 (src/utils/routers.ts)
export function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  }
  return false
}
```

### 1.2 路由过滤递归算法
```typescript
// 路由过滤方法 (src/utils/routers.ts)
export function filterAsyncRoutes(routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}
```

### 1.3 动态路由生成过程
```typescript
// 在permission store中 (src/store/modules/permission.ts)
generateRoutes(roles) {
  return new Promise((resolve) => {
    let accessedRoutes
    if (roles && roles.length && !roles.includes('admin')) {
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
    } else {
      accessedRoutes = asyncRoutes || []
    }
    accessedRoutes = accessedRoutes.concat(notFoundRouter)
    this.routes = constantRoutes.concat(accessedRoutes)
    this.addRoutes = accessedRoutes
    resolve(accessedRoutes)
  })
}
```

## 2. 动态路由加载时序图

```mermaid
sequenceDiagram
    participant permission.ts
    participant PermissionStore
    participant RouterUtils
    participant VueRouter
    
    permission.ts->>PermissionStore: generateRoutes(roles)
    PermissionStore->>RouterUtils: filterAsyncRoutes(asyncRoutes, roles)
    RouterUtils->>RouterUtils: 递归过滤路由(hasPermission)
    RouterUtils-->>PermissionStore: 返回过滤后的路由
    PermissionStore->>VueRouter: router.addRoute(accessedRoutes)
    VueRouter-->>permission.ts: 路由添加完成
```

## 3. 关键设计要点

1. **角色权限验证**：
   - 通过路由meta.roles定义所需角色
   - 使用Array.some()验证用户是否具备任一所需角色

2. **路由过滤特点**：
   - 深度优先递归遍历路由树
   - 保留完整的路由结构
   - 浅拷贝路由对象避免污染原路由配置

3. **特殊处理**：
   - admin角色拥有全部权限
   - 自动添加404路由
   - 合并静态路由和动态路由

4. **性能优化**：
   - 路由配置按模块拆分
   - 使用Promise异步处理
   - 路由懒加载

## 4. 完整工作流程

1. 用户登录获取角色信息
2. 调用PermissionStore.generateRoutes
3. 根据角色过滤可访问路由
4. 合并基础路由和过滤后的动态路由
5. 通过router.addRoute动态注册路由
6. 路由跳转时进行权限校验
7. 权限不足时重定向到登录页或403页