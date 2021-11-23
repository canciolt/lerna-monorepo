import { defineComponent } from 'vue'

export default defineComponent({
  name: 'E64',
  props: {
    componentClass: {
      type: String,
      default: ''
    },
    titleClass: {
      type: String,
      default: ''
    },
    bodyClass: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    bodyText: {
      type: String,
      default: ''
    }
  }
})
