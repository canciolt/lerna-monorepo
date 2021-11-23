import { defineComponent, PropType } from 'vue'
import C116 from '../../../components/c116/src/c116.vue'
import C387 from '../../../components/c387/src/c387.vue'
import { C116_MODEL } from '../../c116/src/c116.model'
import { C387_MODEL, C387_VMODEL } from '../../c387/src/c387.model'

export default defineComponent({
  name: 'C389',
  components: { C116, C387 },
  props: {
    componentClass: {
      type: String,
      default: ''
    },
    headerText: {
      type: String,
      default: ''
    },
    c116Data: {
      type: Object as PropType<C116_MODEL>,
      default: null
    },
    c387Data: {
      type: Object as PropType<C387_MODEL>,
      default: null
    },
    modelValue: {
      type: Object as PropType<C387_VMODEL>,
      default: () => ({})
    }
  }
})
