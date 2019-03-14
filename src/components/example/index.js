import Custom from '@/components/custom'
import Select from './select/select'
import Dialog from './dialog/dialog'
import Toast from './toast/toast'
import Message from './message/message'
import Button from './button/button'
import Tree from './tree/tree'
import Card from './card/card'
import Page from './page/page'
import Form from './form/form'

export default [
  {
    path: '/custom',
    component: Custom,
    children: [
      { path: 'select', component: Select, meta: {title: 'Select 选择器'} },
      { path: 'dialog', component: Dialog, meta: {title: 'Dialog 对话窗'} },
      { path: 'toast', component: Toast, meta: {title: 'Toast 轻提示'} },
      { path: 'message', component: Message, meta: {title: 'Message 全局提示'} },
      { path: 'button', component: Button, meta: {title: 'Button 按钮'} },
      { path: 'tree', component: Tree, meta: {title: 'Tree 树'} },
      { path: 'card', component: Card, meta: {title: 'Card 卡片'} },
      { path: 'pages', component: Page, meta: {title: 'Page 页码'} },
      { path: 'form', component: Form, meta: {title: 'Form 表单'} },
      { path: '', component: Select }
    ],
    meta: {
      title: '我的组件库',
      index: 3
    }
  }
]
