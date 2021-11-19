import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: 'E84',
  props: {
    componentClass: {
      type: String,
      default: ''
    },
    linkClass: {
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
    subtitle: {
      type: String,
      default: ''
    },
    isRtl: {
      type: Boolean,
      default: false
    }
  }
})
