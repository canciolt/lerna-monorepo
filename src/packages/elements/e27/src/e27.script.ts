import { defineComponent, PropType } from 'vue'
import { E27_LINK_MODEL } from './e27.model'

export default defineComponent({
  name: 'E27',
  props: {
    componentClass: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    links: {
      type: Array as PropType<E27_LINK_MODEL[]>,
      default: () => []
    }
  }
})
