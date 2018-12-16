# 组件使用介绍

```jsx
<bars>
    <template slot="left"> 定义左侧按钮
        <a>a</a>
    </template>
    <template slot="right"> 定义右侧按钮
        <a>b</a>
    </template>
    <template slot="filter"> 定义form, 可以使用filter-form
        // ...
    </template>
</bars>
```

```jsx
<filter-form
    :formProps="{
        key: {
            label: '',
            type: 'input|select' // 目前只定义了这个
            options: [ // 定义type为select时的选项，为一个数组
                {
                    label: '',
                    value: ''
                }
            ]
        }
    }"
    @onFilter="filter" // 点击查询和重置的回调函数 
/>

export default {
    // ...
    methods: {
        filter(value) { // 查询的值

        }
    }
}
```

```jsx
<table-data
    :filter-height="filterShow ? 66 : 0"
    :columns="[
        {
            prop: 'time',
            label: '时间'
        }
    ]"
    :data="[]"
/>
```

```jsx
<pagination
    :pageNo=""
    :pageSize=""
    :total=""
    @onPageChange=""
/>
```

四个组件要配合使用，缺一不可