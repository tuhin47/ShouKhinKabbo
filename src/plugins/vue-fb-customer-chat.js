import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: 100529931400034,
  theme_color: '#333333',
  locale: 'en_US',
  logged_in_greeting:
    'শৌখিন কাব্য পেজের পক্ষ থেকে আপনাকে জানাচ্ছি আন্তরিক শুভেচ্ছা',
  logged_out_greeting:
    'শৌখিন কাব্য পেজের পক্ষ থেকে আপনাকে জানাচ্ছি আন্তরিক শুভেচ্ছা',
})
