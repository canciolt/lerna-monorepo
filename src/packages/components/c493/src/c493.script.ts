import { defineComponent, PropType } from 'vue'
import C389 from '../../../components/c389/src/c389.vue'
import C396 from '../../../components/c396/src/c396.vue'
import C398 from '../../../components/c398/src/c398.vue'
import C399 from '../../../components/c399/src/c399.vue'
import { C398_MODEL } from '../../c398/src/c398.model'
import { C396_MODEL } from '../../c396/src/c396.model'
import { C399_MODEL } from '../../c399/src/c399.model'
import { C493_SHOW_MODEL } from './c493.model'


export default defineComponent({
  name: 'C493',
  components: { C389, C396, C398, C399 },
  props: {
    componentClass: {
      type: String,
      default: ''
    },
    showComponent: {
      type: String as PropType<C493_SHOW_MODEL>,
      default: C493_SHOW_MODEL.C389
    },
    c389Data: {
      type: Object as PropType<C398_MODEL>,
      default: null
    },
    c398Data: {
      type: Object as PropType<C398_MODEL>,
      default: null
    },
    c396Data: {
      type: Object as PropType<C396_MODEL>,
      default: null
    },
    c399Data: {
      type: Object as PropType<C399_MODEL>,
      default: null
    }
  },
  setup () {
    return { componentTypes: C493_SHOW_MODEL }
  }
})
