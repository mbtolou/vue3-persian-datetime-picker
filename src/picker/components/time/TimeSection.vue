<template>
  <div :class="['vpd-addon-list vpd-time', { 'vpd-disabled': isDisableTime }]">
    <div class="vpd-addon-list-content">
      <time-column
        ref="hour"
        v-model="hourModel"
        class="vpd-time-h"
        :attributes="timeAttributes"
        :formatter="convertToLocaleNumber"
        @filled="focusNext"
      />
      <time-column
        ref="minute"
        v-model="minuteModel"
        class="vpd-time-m"
        :jump="jumpMinute"
        :attributes="timeAttributes"
        :formatter="convertToLocaleNumber"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import TimeColumn from './TimeColumn.vue'

const props = defineProps({
  date: { type: Object, default: () => ({}) },
  time: { type: Object, default: () => ({}) },
  jumpMinute: { type: Number, default: 1 },
  roundMinute: { type: Boolean, default: false },
  isDisableTime: { type: Boolean, default: false },
  getHighlights: { type: Function, default: null },
  isMore: { type: Function, default: null },
  isLower: { type: Function, default: null },
  minDate: { type: [Object, Boolean], default: false },
  maxDate: { type: [Object, Boolean], default: false },
  selectedDates: { type: Array, default: () => [] },
  convertToLocaleNumber: { type: Function, default: (v) => v },
  type: { type: String, default: 'datetime' }
})

const emit = defineEmits(['update:date', 'update:time'])
const hour = ref(null)
const minute = ref(null)

const timeAttributes = computed(() => {
  return props.getHighlights ? props.getHighlights('t', props.time) : {}
})

const hourModel = computed({
  get() {
    return props.time?.format?.('HH') ?? '00'
  },
  set(val) {
    setTime(val, 'hours')
  }
})

const minuteModel = computed({
  get() {
    return props.time?.format?.('mm') ?? '00'
  },
  set(val) {
    setTime(val, 'minutes')
  }
})

function setTime(v, k) {
  if (!props.time?.clone) return
  let time = props.time.clone()
  time.set(k, v)

  if (props.type !== 'time' && props.date?.clone) {
    let date = props.date.clone()
    time.set({ year: date.year(), month: date.month(), date: date.date() })
    date.set({ hour: time.hour(), minute: time.minute() })
    emit('update:date', date)
  }

  if (props.isLower?.(time)) time = props.minDate.clone()
  if (props.isMore?.(time)) time = props.maxDate.clone()

  emit('update:time', time)
}

function focusNext() {
  const el = minute.value?.$el?.querySelector?.('input') || minute.value
  el?.focus?.()
}

watch(
  () => props.time,
  () => {
    if (!props.roundMinute || !props.time?.clone) return
    let time = props.time.clone()
    let jm = props.jumpMinute
    let m = (jm - (time.minute() % jm)) % jm
    time.add({ m })
    if (time.valueOf() !== props.time.valueOf()) {
      emit('update:time', time)
      props.selectedDates.forEach((d) => d.set({ m: time.minute() }))
    }
  },
  { immediate: true }
)
</script>
