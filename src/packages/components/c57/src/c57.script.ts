import { defineComponent, PropType } from 'vue'
import { C57_LINKS_MODEL } from './c57.model'

export default defineComponent({
  name: 'C57',
  props: {
    componentClass: {
      type: String,
      default: ''
    },
    copyrightText: {
      type: String,
      default: ''
    },
    links: {
      type: Array as PropType<C57_LINKS_MODEL[]>,
      default: () => []
    }
  },
  setup (props) {
    const copyright = props?.copyrightText ? props?.copyrightText : `\xA9 2021 Norwegian Cruise Line Holdings Ltd.`

    return { copyright }
  }
})
