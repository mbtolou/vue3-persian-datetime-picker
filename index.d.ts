declare module 'vue3-persian-datetime-picker' {
  import { Component } from 'vue'

  interface Props {
    modelValue?: string | number | Date | Array<any>
    initialValue?: string | number
    inputFormat?: string
    displayFormat?: string
    format?: string
    view?: 'day' | 'month' | 'year' | 'time'
    type?: 'date' | 'datetime' | 'year' | 'month' | 'time' | 'year-month'
    min?: string
    max?: string
    editable?: boolean
    element?: string
    customInput?: string
    name?: string
    inputClass?: string
    placeholder?: string
    altName?: string
    altFormat?: string
    show?: boolean
    color?: string
    autoSubmit?: boolean
    wrapperSubmit?: boolean
    appendTo?: string
    disabled?: boolean
    disable?: Array<string> | string | Function | RegExp
    label?: string
    highlight?: Function
    jumpMinute?: number
    roundMinute?: boolean
    clearable?: boolean
    inline?: boolean
    locale?: string
    localeConfig?: object
    timezone?: boolean | string | Function
    showNowBtn?: boolean
    convertNumbers?: boolean
    compactTime?: boolean
    range?: boolean
    multiple?: boolean
    popover?: boolean | string
    useRouter?: boolean | string
    simple?: boolean
    inputAttrs?: object
  }

  const Vue3PersianDatetimePicker: Component<Props>
  export default Vue3PersianDatetimePicker
}
