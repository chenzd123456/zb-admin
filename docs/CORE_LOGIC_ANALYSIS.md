# 核心业务逻辑分析

## 1. 权限管理系统
- **位置**: `src/store/modules/` + `src/permission.ts`
- **核心流程**:
  1. 用户登录(`src/views/login`)
  2. 获取用户权限信息
  3. 生成动态路由
  4. 初始化权限状态

- **关键实现**:
  ```typescript
  // 权限校验逻辑
  function hasPermission(roles: string[], route: RouteRecordRaw) {
    if (route.meta?.roles) {
      return roles.some(role => route.meta.roles.includes(role))
    }
    return true
  }
  ```

## 2. 数据可视化模块
- **位置**: `src/views/dataScreen` + `src/views/echarts`
- **技术栈**: ECharts + 自定义组件
- **特点**:
  - 响应式布局
  - 数据自动刷新
  - 多图表联动

## 3. 表单处理系统
- **位置**: `src/views/form`
- **核心功能**:
  - 动态表单生成
  - 表单验证(`src/utils/validate.ts`)
  - 数据提交与处理

## 4. 表格功能
- **位置**: `src/views/table` + `src/components/Table`
- **高级功能**:
  - 分页加载
  - 列自定义
  - 数据导出(Excel/PDF)
  - 行内编辑

## 5. 文件处理
- **关键工具**:
  - 文件上传(`src/components/Upload`)
  - Excel导入导出(`src/utils/exprotExcel.ts`)
  - 文件下载(`src/utils/downloadzip.ts`)

## 6. 全局状态管理
- **架构**: Vuex模块化
- **核心模块**:
  - 用户信息(`user.ts`)
  - 权限(`permission.ts`)
  - 应用配置(`app.ts`)