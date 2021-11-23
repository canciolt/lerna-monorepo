import { defineComponent } from 'vue'

export default defineComponent({
  name: 'M106',
  props: {
    componentClass: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: '#'
    },
    title: {
      type: String,
      default: ''
    },
    aria: {
      type: String,
      default: ''
    },
  }
})
