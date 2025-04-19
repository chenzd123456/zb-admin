# 组件系统文档

## 1. 组件目录结构
```
src/components/
├── AvatarCropper/     # 头像裁剪组件
├── CodeMirror/        # 代码编辑器组件
├── CountTo/           # 数字动画组件
├── DataScreen/        # 数据大屏组件
├── PageWrapLayout/    # 页面布局组件
├── pipeline/          # 流程组件
├── RightClickMenu/    # 右键菜单组件
├── SearchForm/        # 搜索表单组件
├── SvgIcon/           # SVG图标组件
├── SwitchDark/        # 暗黑模式切换组件
├── Table/             # 表格组件
├── Theme/             # 主题组件
├── u-container-layout/ # 容器布局组件
├── Upload/            # 上传组件
└── WangEdior/         # 富文本编辑器组件
```

## 2. 核心组件说明

### 2.1 SvgIcon组件
```vue
<template>
  <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      return 'svg-icon ' + this.className
    }
  }
}
</script>
```

使用方式:
```vue
<template>
  <svg-icon icon-class="user" class-name="custom-class" />
</template>
```

### 2.2 Table组件
功能特性:
- 分页集成
- 列配置化
- 自定义渲染
- 多选支持

示例配置:
```typescript
const columns = [
  {
    label: '姓名',
    prop: 'name',
    width: 120,
    sortable: true
  },
  {
    label: '操作',
    width: 180,
    render: (h, { row }) => {
      return h('div', [
        h('el-button', {
          props: { type: 'text', size: 'mini' },
          on: { click: () => handleEdit(row) }
        }, '编辑'),
        h('el-button', {
          props: { type: 'text', size: 'mini' },
          on: { click: () => handleDelete(row) }
        }, '删除')
      ])
    }
  }
]
```

### 2.3 SearchForm组件
功能特性:
- 表单配置化
- 动态表单生成
- 验证集成
- 查询重置功能

示例配置:
```typescript
const formItems = [
  {
    type: 'input',
    label: '用户名',
    prop: 'username',
    placeholder: '请输入用户名',
    rules: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
  },
  {
    type: 'select',
    label: '状态',
    prop: 'status',
    options: [
      { label: '启用', value: 1 },
      { label: '禁用', value: 0 }
    ]
  }
]
```

## 3. 组件开发规范

### 3.1 命名规范
- 目录名: PascalCase (如 `SearchForm`)
- 组件名: PascalCase (如 `SvgIcon`)
- 属性名: camelCase (如 `iconClass`)

### 3.2 Props设计
```typescript
interface Props {
  // 必填属性
  modelValue: {
    type: String,
    required: true
  },
  // 可选属性
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium'
  },
  // 复杂类型
  config: {
    type: Object as PropType<TableConfig>,
    default: () => ({})
  }
}
```

### 3.3 事件设计
```typescript
emits: ['update:modelValue', 'change', 'submit'],

methods: {
  handleChange() {
    this.$emit('change', newValue)
  }
}
```

### 3.4 插槽设计
```vue
<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    <div class="card-body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>
```

## 4. 高级组件模式

### 4.1 动态组件
```vue
<template>
  <component :is="currentComponent" />
</template>

<script setup>
import { shallowRef } from 'vue'

const components = {
  view: defineAsyncComponent(() => import('./ViewComponent.vue')),
  edit: defineAsyncComponent(() => import('./EditComponent.vue'))
}

const currentComponent = shallowRef(components.view)
</script>
```

### 4.2 渲染函数
```typescript
render() {
  return h('div', { class: 'container' }, [
    h('h1', '标题'),
    this.$slots.default?.()
  ])
}
```

### 4.3 组合式函数
```typescript
// useTable.ts
export function useTable(apiFn: () => Promise<any>) {
  const loading = ref(false)
  const data = ref([])
  
  const fetchData = async () => {
    loading.value = true
    try {
      data.value = await apiFn()
    } finally {
      loading.value = false
    }
  }
  
  return { loading, data, fetchData }
}

// 使用
const { loading, data, fetchData } = useTable(() => getUserList())
```

## 5. 组件测试

### 5.1 单元测试示例
```typescript
import { mount } from '@vue/test-utils'
import SvgIcon from '@/components/SvgIcon.vue'

describe('SvgIcon', () => {
  it('renders icon correctly', () => {
    const wrapper = mount(SvgIcon, {
      props: { iconClass: 'user' }
    })
    expect(wrapper.find('use').attributes('xlink:href')).toBe('#icon-user')
  })
})
```

### 5.2 测试覆盖率要求
- 核心组件: 80%+
- 业务组件: 60%+
- 工具组件: 90%+

## 6. 性能优化

### 6.1 懒加载
```typescript
const LazyComponent = defineAsyncComponent(() => 
  import('./HeavyComponent.vue')
)
```

### 6.2 虚拟滚动
```vue
<template>
  <RecycleScroller
    :items="largeList"
    :item-size="50"
    key-field="id"
    v-slot="{ item }"
  >
    <div>{{ item.name }}</div>
  </RecycleScroller>
</template>
```

### 6.3 记忆化
```typescript
import { computed } from 'vue'

const sortedList = computed(() => {
  return [...props.list].sort((a, b) => a.value - b.value)
})
```

## 7. 最佳实践

1. **单一职责**: 每个组件只做一件事
2. **可复用性**: 通过props和插槽提供灵活性
3. **可维护性**: 清晰的文档和类型定义
4. **性能意识**: 避免不必要的渲染
5. **无障碍**: 支持键盘导航和ARIA属性