import Vue3PersianDatetimePicker from './Vue3PersianDatetimePicker.vue'
import { extend } from './modules/utils.js'

function install(app, options = {}) {
  const opts = extend(
    {
      name: 'DatePicker',
      props: {}
    },
    options
  )

  const component = Vue3PersianDatetimePicker
  if (opts.props && component.props) {
    for (const k in opts.props) {
      if (Object.prototype.hasOwnProperty.call(component.props, k)) {
        component.props[k].default = opts.props[k]
      }
    }
  }
  app.component(opts.name, component)
}

Vue3PersianDatetimePicker.install = install

export default Vue3PersianDatetimePicker
export { install }
