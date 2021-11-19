import { defineComponent } from 'vue'

export default defineComponent({
  name: 'C116',
  props: {
    componentClass: {
      type: String,
      default: ''
    },
    bodyText: {
      type: String,
      default: ''
    }
  }
})
