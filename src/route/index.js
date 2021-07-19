import { localStorage } from '../utils'

const components = {}
const pageComponentpaths = {}
const files = require.context('../template', true, /.js$|.scss$/)

files.keys().forEach(key => {
  const componentName = key.split('/')[1]
  const fileName = key.split('/')[2]
  // 引入对应模板的index.js页面文件，排除其他文件
  if (fileName === 'index.js') {
    // console.log(componentName)
    components[componentName] = files(key).default
  } else {
    const compPath = key.split('/').slice(2).join('/')
    if (fileName === 'index.scss' || !compPath) {
      return
    }
    if (!pageComponentpaths[componentName]) {
      pageComponentpaths[componentName] = [compPath]
    } else {
      pageComponentpaths[componentName].push(compPath)
    }
  }
})

// 存储页面组件路径列表
localStorage.setItem('pageComponentpaths', pageComponentpaths)

const config = [
  {
    name: '首页',
    children: [
      { name: '仪表盘', path: '/hiui/templates-preview/home-dashboard' },
      { name: '工作台', path: '/hiui/templates-preview/home-workbench' },
      { name: '门户', path: '/hiui/templates-preview/home-portal' }
    ]
  },
  {
    name: '表单',
    children: [
      {
        name: '单列表单',
        path: '/hiui/templates-preview/form-basic'
      },
      {
        name: '双列表单',
        path: '/hiui/templates-preview/form-double-column'
      },
      {
        name: '分步表单',
        path: '/hiui/templates-preview/form-with-stepper'
      },
      {
        name: '分组表单 + 标签',
        path: '/hiui/templates-preview/form-with-taps'
      },
      {
        name: '分组表单',
        path: '/hiui/templates-preview/form-with-group'
      },
      {
        name: '内嵌表格表单',
        path: '/hiui/templates-preview/form-with-table'
      }
    ]
  },
  {
    name: '表格',
    children: [
      {
        name: '表格-分组(横向)',
        path: '/hiui/templates-preview/table-group-horizontal'
      },
      {
        name: '表格-分组(纵向)',
        path: '/hiui/templates-preview/table-group-vertical'
      },
      {
        name: '表格-分组(纵向2)',
        path: '/hiui/templates-preview/table-group-horizontal-group'
      },
      {
        name: '表格-基础查询',
        path: '/hiui/templates-preview/table-query-basic'
      },
      {
        name: '表格-平铺查询（单选）',
        path: '/hiui/templates-preview/table-tile-single'
      },
      {
        name: '表格-高级管理',
        path: '/hiui/templates-preview/table-manage'
      },
      {
        name: '表格-平铺查询（多选）',
        path: '/hiui/templates-preview/table-tile-multiple'
      },
      {
        name: '表格-树查询（单选）',
        path: '/hiui/templates-preview/table-tree-single-query'
      },
      {
        name: '表格-树查询（多选）',
        path: '/hiui/templates-preview/table-tree-multiple-query'
      },
      {
        name: '表格-高级查询',
        path: '/hiui/templates-preview/table-advan-group-horizontal'
      },
      {
        name: '表格-高级查询（多行选项）',
        path: '/hiui/templates-preview/table-advan-group-more-options'
      },
      {
        name: '表格-高级筛选',
        path: '/hiui/templates-preview/table-advan-filter'
      }
    ]
  },
  {
    name: '列表',
    children: [
      {
        name: '流程卡片',
        path: '/hiui/templates-preview/list-flow-card'
      },
      {
        name: '嵌入式',
        path: '/hiui/templates-preview/list-embeded'
      },
      {
        name: '信息流',
        path: '/hiui/templates-preview/list-info-flow'
      },
      {
        name: '卡片列表',
        path: '/hiui/templates-preview/list-task'
      },
      {
        name: '小卡片',
        path: '/hiui/templates-preview/list-indicator'
      }
    ]
  },
  {
    name: '详情页',
    children: [
      {
        name: '单列',
        path: '/hiui/templates-preview/detail-basic'
      },
      {
        name: '双列',
        path: '/hiui/templates-preview/detail-double-column'
      },
      {
        name: '分组',
        path: '/hiui/templates-preview/detail-group'
      },
      {
        name: '步骤',
        path: '/hiui/templates-preview/detail-stepper'
      },
      {
        name: '关联',
        path: '/hiui/templates-preview/detail-relevance'
      },
      {
        name: '卡片',
        path: '/hiui/templates-preview/detail-card'
      }
    ]
  },
  {
    name: '个人页',
    children: [
      {
        name: '账号中心',
        path: '/hiui/templates-preview/user-center'
      },
      {
        name: '活动信息-混合',
        path: '/hiui/templates-preview/user-dashboard'
      }
    ]
  },
  {
    name: '结果页',
    children: [
      {
        name: '加载中',
        path: '/hiui/templates-preview/normal-loading'
      },
      {
        name: '服务器出错',
        path: '/hiui/templates-preview/result-server-error'
      },
      {
        name: '暂无数据',
        path: '/hiui/templates-preview/result-no-data'
      },
      {
        name: '暂无权限',
        path: '/hiui/templates-preview/result-no-auth'
      },
      {
        name: '网络中断',
        path: '/hiui/templates-preview/result-network-broken'
      },
      {
        name: '成功',
        path: '/hiui/templates-preview/result-success'
      },
      {
        name: '失败',
        path: '/hiui/templates-preview/result-failed'
      },
      {
        name: '服务器出错（米兔版）',
        path: '/hiui/templates-preview/result-server-error-mirabbit'
      },
      {
        name: '暂无数据（米兔版）',
        path: '/hiui/templates-preview/result-no-data-mirabbit'
      },
      {
        name: '暂无权限（米兔版）',
        path: '/hiui/templates-preview/result-no-auth-mirabbit'
      },
      {
        name: '网络中断（米兔版）',
        path: '/hiui/templates-preview/result-network-broken-mirabbit'
      },
      {
        name: '成功（米兔版）',
        path: '/hiui/templates-preview/result-success-mirabbit'
      },
      {
        name: '失败（米兔版）',
        path: '/hiui/templates-preview/result-failed-mirabbit'
      }
    ]
  }
]

const transformConfig = config => {
  config.forEach(c => {
    if (c.path) {
      c.component = components[c.path.split('/')[1]]
    }
    if (c.children) {
      transformConfig(c.children)
    }
  })
  return config
}
export default transformConfig(config)
