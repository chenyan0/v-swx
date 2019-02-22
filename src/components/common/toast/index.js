import vue from 'vue'
// 这里就是我们刚刚创建的那个静态组件
import toastComponent from './toast.vue'

// 返回一个 扩展实例构造器
const ToastConstructor = vue.extend(toastComponent)
// 第一次显示
let queue = []
// 多次点击只显示一个
let singleToast = true
// 定义弹出组件的函数 接收2个参数, 要显示的文本 和 显示时间
function showToast (options = {}) {
  // 实例化一个 toast.vue
  if (!queue.length || !singleToast) {
    const toastDom = new ToastConstructor({
      el: document.createElement('div'),
      data () {
        return {
          text: typeof options === 'string' ? options : options.text,
          position: options.position || 'middle',
          icon: options.icon,
          show: true
        }
      }
    })

    // 把 实例化的 toast.vue 添加到 body 里
    document.body.appendChild(toastDom.$el)
    queue.push(toastDom)
    singleToast = true
    // 过了 duration 时间后隐藏
    setTimeout(() => { toastDom.show = singleToast = false }, options.duration || 3000)
  }
}

export default showToast
