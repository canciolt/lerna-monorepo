import { defineComponent, PropType } from 'vue'
import C57 from '../../../components/c57/src/c57.vue'
import { C57_MODEL } from '../../../components/c57/src/c57.model'

export default defineComponent({
  name: 'MFooter',
  components: { C57 },
  props: {
    componentClass: {
      type: String,
      default: ''
    },
    c57Data: {
      type: Object as PropType<C57_MODEL>,
      default: null
    }
  }
})
