import type { App, DefineComponent } from 'vue'

export type PickerType = 'date' | 'datetime' | 'year' | 'month' | 'time' | 'year-month'
export type PickerView = 'day' | 'month' | 'year' | 'time'

export interface LocaleLang {
  label?: string
  submit?: string
  cancel?: string
  now?: string
  nextMonth?: string
  prevMonth?: string
  year?: string
  month?: string
  day?: string
}

export interface LocaleConfigItem {
  dow?: number
  dir?: 'rtl' | 'ltr'
  displayFormat?: string | ((vm: any) => string)
  lang?: LocaleLang
}

export interface LocaleConfig {
  [locale: string]: LocaleConfigItem
}

export interface Vue3PersianDatetimePickerProps {
  modelValue?: string | number | Date | Array<string | number | Date> | null
  initialValue?: string | number
  inputFormat?: string
  displayFormat?: string
  format?: string
  view?: PickerView
  type?: PickerType
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
  disable?: string[] | string | ((date: any) => boolean) | RegExp
  label?: string
  highlight?: (formatted: string, dateMoment: any) => Record<string, any>
  jumpMinute?: number
  roundMinute?: boolean
  clearable?: boolean
  inline?: boolean
  locale?: string
  localeConfig?: LocaleConfig
  timezone?: boolean | string | ((date: any) => any)
  showNowBtn?: boolean
  convertNumbers?: boolean
  compactTime?: boolean
  range?: boolean
  multiple?: boolean
  popover?: boolean | string
  useRouter?: boolean | string
  simple?: boolean
  inputAttrs?: Record<string, any>
}

export interface PluginOptions {
  name?: string
  props?: Partial<Vue3PersianDatetimePickerProps>
}

declare const Vue3PersianDatetimePicker: DefineComponent<
  Vue3PersianDatetimePickerProps,
  {},
  any
> & {
  install(app: App, options?: PluginOptions): void
}

export default Vue3PersianDatetimePicker

declare module 'vue' {
  export interface GlobalComponents {
    DatePicker: typeof Vue3PersianDatetimePicker
    'date-picker': typeof Vue3PersianDatetimePicker
  }
}
