<template>
  <div class="home">
    <h1>{{ pageTitle }}</h1>
    <div>
      <date-picker v-model="date" />
      {{ date }}
    </div>

    <div style="margin-top:30px">
      <date-picker v-model="time" type="time" />
      {{ time }}
    </div>
  </div>
</template>

<script>
import Vue3PersianDatetimePicker from '@/picker/Vue3PersianDatetimePicker.vue'

export default {
  name: 'Home',
  components: {
    DatePicker: Vue3PersianDatetimePicker
  },
  data() {
    return {
      date: '',
      time: '',
      pageTitle: 'Vue3 Persian Datetime Picker Demo'
    }
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
  font-family: Arial, sans-serif;
}
</style>
