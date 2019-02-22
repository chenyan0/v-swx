import VToast from './toast/index'
import VMessage from './message/index'
const components = [VToast, VMessage]

let install = function (Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$vtoast = VToast
  Vue.prototype.$vmessage = VMessage
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
};

export default {
  install
}
