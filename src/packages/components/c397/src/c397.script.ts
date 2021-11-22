import { defineComponent, PropType } from 'vue'
import E27 from '../../../elements/e27/src/e27.vue'
import { E27_MODEL } from '../../../elements/e27/src/e27.model'

export default defineComponent({
  name: 'C397',
  components: { E27 },
  props: {
    componentClass: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
    e27Data: {
      type: Object as PropType<E27_MODEL>,
      default: () => ({})
    }
  }
})
