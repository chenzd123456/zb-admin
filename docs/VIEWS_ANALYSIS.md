# 视图层分析

## 1. 业务模块概览

### 1.1 系统模块 (`src/views/system/`)
- 用户管理
- 角色管理
- 菜单管理
- 部门管理
- 权限配置

### 1.2 数据展示 (`src/views/echarts/`)
- 图表展示
- 数据可视化
- 大屏展示

### 1.3 表单处理 (`src/views/form/`)
- 基础表单
- 复杂表单
- 表单验证
- 动态表单

### 1.4 表格处理 (`src/views/table/`)
- 基础表格
- 分页表格
- 可编辑表格
- 树形表格

## 2. 核心业务逻辑

### 2.1 登录模块 (`src/views/login/`)
```vue
<!-- LoginForm.vue -->
<template>
  <el-form :model="loginForm" :rules="rules" ref="loginFormRef">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名"/>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="loginForm.password" type="password" placeholder="密码"/>
    </el-form-item>
    <el-button type="primary" @click="handleLogin">登录</el-button>
  </el-form>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/store/modules/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const loginForm = ref({
  username: '',
  password: ''
})

const handleLogin = async () => {
  await userStore.login(loginForm.value)
  router.push('/')
}
</script>
```

### 2.2 权限控制
- 基于角色的访问控制(RBAC)
- 动态路由生成
- 按钮级权限控制

## 3. 特殊功能模块

### 3.1 Excel处理 (`src/views/excel/`)
- 数据导出
- 数据导入
- 模板下载

### 3.2 错误页面 (`src/views/errorPages/`)
- 403 无权限
- 404 页面不存在
- 500 服务器错误

## 4. 组件交互关系
```mermaid
graph TD
    A[登录页面] -->|提交凭证| B(用户Store)
    B -->|获取权限| C(路由系统)
    C -->|生成菜单| D[主布局]
    D -->|渲染| E[业务页面]
    E -->|数据请求| F[API模块]