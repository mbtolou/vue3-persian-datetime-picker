<template>
  <div class="test-page" dir="rtl">
    <header class="header">
      <h1>صفحه تست Vue3 Persian Datetime Picker</h1>
      <p class="subtitle">با کلیک و موس تمام حالت‌ها را تست کنید</p>
    </header>

    <div class="grid">
      <!-- Basic Date -->
      <section class="card">
        <h2>۱. انتخاب تاریخ ساده</h2>
        <date-picker v-model="basicDate" clearable placeholder="تاریخ را انتخاب کنید" />
        <div class="value">مقدار: <code>{{ basicDate || '—' }}</code></div>
      </section>

      <!-- Datetime -->
      <section class="card">
        <h2>۲. تاریخ و ساعت</h2>
        <date-picker
          v-model="datetime"
          type="datetime"
          clearable
          placeholder="تاریخ و ساعت"
        />
        <div class="value">مقدار: <code>{{ datetime || '—' }}</code></div>
      </section>

      <!-- Time only -->
      <section class="card">
        <h2>۳. فقط ساعت</h2>
        <date-picker v-model="timeOnly" type="time" clearable placeholder="ساعت" />
        <div class="value">مقدار: <code>{{ timeOnly || '—' }}</code></div>
      </section>

      <!-- Year -->
      <section class="card">
        <h2>۴. فقط سال</h2>
        <date-picker v-model="yearOnly" type="year" clearable placeholder="سال" />
        <div class="value">مقدار: <code>{{ yearOnly || '—' }}</code></div>
      </section>

      <!-- Month -->
      <section class="card">
        <h2>۵. فقط ماه</h2>
        <date-picker v-model="monthOnly" type="month" clearable placeholder="ماه" />
        <div class="value">مقدار: <code>{{ monthOnly || '—' }}</code></div>
      </section>

      <!-- Range -->
      <section class="card">
        <h2>۶. بازه تاریخ (Range)</h2>
        <date-picker
          v-model="dateRange"
          range
          clearable
          placeholder="از تاریخ تا تاریخ"
        />
        <div class="value">مقدار: <code>{{ dateRange || '—' }}</code></div>
      </section>

      <!-- Multiple -->
      <section class="card">
        <h2>۷. چندتایی (Multiple)</h2>
        <date-picker
          v-model="multipleDates"
          multiple
          clearable
          placeholder="چند تاریخ انتخاب کنید"
        />
        <div class="value">مقدار: <code>{{ multipleDates || '—' }}</code></div>
      </section>

      <!-- Inline -->
      <section class="card full-width">
        <h2>۸. حالت Inline (همیشه باز)</h2>
        <date-picker v-model="inlineDate" inline clearable />
        <div class="value">مقدار: <code>{{ inlineDate || '—' }}</code></div>
      </section>

      <!-- Simple Mode -->
      <section class="card">
        <h2>۹. حالت ساده (Simple Mode)</h2>
        <date-picker
          v-model="simpleDate"
          simple
          clearable
          placeholder="حالت ساده"
        />
        <div class="value">مقدار: <code>{{ simpleDate || '—' }}</code></div>
      </section>

      <!-- Custom Color + Auto Submit -->
      <section class="card">
        <h2>۱۰. رنگ سفارشی + Auto Submit</h2>
        <date-picker
          v-model="customColor"
          color="#e91e63"
          auto-submit
          clearable
          placeholder="با رنگ صورتی"
        />
        <div class="value">مقدار: <code>{{ customColor || '—' }}</code></div>
      </section>

      <!-- Min / Max -->
      <section class="card">
        <h2>۱۱. محدودیت Min / Max</h2>
        <date-picker
          v-model="limitedDate"
          :min="'1400/01/01'"
          :max="'1405/12/29'"
          clearable
          placeholder="بین ۱۴۰۰ تا ۱۴۰۵"
        />
        <div class="value">مقدار: <code>{{ limitedDate || '—' }}</code></div>
      </section>

      <!-- Display Format -->
      <section class="card">
        <h2>۱۲. فرمت نمایش سفارشی</h2>
        <date-picker
          v-model="formattedDate"
          display-format="jD jMMMM jYYYY"
          format="jYYYY/jMM/jDD"
          clearable
          placeholder="فرمت زیبا"
        />
        <div class="value">مقدار: <code>{{ formattedDate || '—' }}</code></div>
      </section>

      <!-- Locale EN -->
      <section class="card">
        <h2>۱۳. تقویم میلادی (en)</h2>
        <date-picker
          v-model="enDate"
          locale="en"
          clearable
          placeholder="Gregorian"
        />
        <div class="value">مقدار: <code>{{ enDate || '—' }}</code></div>
      </section>

      <!-- Compact Time -->
      <section class="card">
        <h2>۱۴. ساعت فشرده (Compact)</h2>
        <date-picker
          v-model="compactTime"
          type="datetime"
          compact-time
          clearable
          placeholder="ساعت فشرده"
        />
        <div class="value">مقدار: <code>{{ compactTime || '—' }}</code></div>
      </section>

      <!-- Disabled -->
      <section class="card">
        <h2>۱۵. غیرفعال (Disabled)</h2>
        <date-picker v-model="disabledDate" disabled placeholder="غیرفعال" />
        <div class="value">مقدار: <code>{{ disabledDate || '—' }}</code></div>
      </section>

      <!-- Editable -->
      <section class="card">
        <h2>۱۶. قابل تایپ (Editable)</h2>
        <date-picker
          v-model="editableDate"
          editable
          clearable
          placeholder="می‌توانید تایپ کنید"
        />
        <div class="value">مقدار: <code>{{ editableDate || '—' }}</code></div>
      </section>
    </div>

    <footer class="footer">
      <button class="reset-btn" @click="resetAll">پاک کردن همه مقادیر</button>
      <p>برای تست کامل روی هر picker کلیک کنید و با موس تاریخ/ساعت را انتخاب کنید.</p>
    </footer>
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
      basicDate: '',
      datetime: '',
      timeOnly: '',
      yearOnly: '',
      monthOnly: '',
      dateRange: '',
      multipleDates: '',
      inlineDate: '',
      simpleDate: '',
      customColor: '',
      limitedDate: '',
      formattedDate: '',
      enDate: '',
      compactTime: '',
      disabledDate: '1403/01/01',
      editableDate: ''
    }
  },
  methods: {
    resetAll() {
      this.basicDate = ''
      this.datetime = ''
      this.timeOnly = ''
      this.yearOnly = ''
      this.monthOnly = ''
      this.dateRange = ''
      this.multipleDates = ''
      this.inlineDate = ''
      this.simpleDate = ''
      this.customColor = ''
      this.limitedDate = ''
      this.formattedDate = ''
      this.enDate = ''
      this.compactTime = ''
      this.editableDate = ''
    }
  }
}
</script>

<style scoped>
.test-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px 60px;
  font-family: 'Vazirmatn', 'Tahoma', sans-serif;
  background: #f5f7fa;
  min-height: 100vh;
  box-sizing: border-box;
}

.header {
  text-align: center;
  margin-bottom: 32px;
}

.header h1 {
  margin: 0 0 8px;
  font-size: 1.8rem;
  color: #1a237e;
}

.subtitle {
  margin: 0;
  color: #546e7a;
  font-size: 0.95rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #e0e0e0;
  transition: box-shadow 0.2s;
}

.card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.card.full-width {
  grid-column: 1 / -1;
}

.card h2 {
  margin: 0 0 16px;
  font-size: 1.05rem;
  color: #37474f;
  border-bottom: 2px solid #e3f2fd;
  padding-bottom: 8px;
}

.value {
  margin-top: 14px;
  font-size: 0.9rem;
  color: #455a64;
  word-break: break-all;
}

.value code {
  background: #eceff1;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: monospace;
  direction: ltr;
  display: inline-block;
}

.footer {
  margin-top: 40px;
  text-align: center;
}

.reset-btn {
  background: #417df4;
  color: #fff;
  border: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s;
}

.reset-btn:hover {
  background: #2962ff;
}

.footer p {
  margin-top: 16px;
  color: #78909c;
  font-size: 0.9rem;
}

/* Make sure picker inputs look nice */
:deep(.vpd-input-group) {
  width: 100%;
}

:deep(.vpd-input-group input) {
  width: 100%;
  box-sizing: border-box;
}
</style>
