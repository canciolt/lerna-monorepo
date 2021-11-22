import { defineComponent, PropType, reactive } from 'vue'
import E64 from '../../../elements/e64/src/e64.vue'
import E7 from '../../../elements/e7/src/e7.vue'
import E27 from '../../../elements/e27/src/e27.vue'
import C116 from '../../../components/c116/src/c116.vue'
import C397 from '../../../components/c397/src/c397.vue'
import { E64_MODEL } from '../../../elements/e64/src/e64.model'
import { C116_MODEL } from '../../c116/src/c116.model'
import { C397_MODEL } from 'c397/src/c397.model'
import { C399_VMODEL } from './c399.model'
import { E7_MODEL } from '../../../elements/e7/src/e7.model'

export default defineComponent({
  name: 'C399',
  components: { E64, E7, E27, C116, C397 },
  props: {
    componentClass: {
      type: String,
      default: ''
    },
    buttonTitle: {
      type: String,
      default: 'Submit'
    },
    e64Data: {
      type: Object as PropType<E64_MODEL>,
      default: null
    },
    c116Data: {
      type: Object as PropType<C116_MODEL>,
      default: null
    },
    c397Data: {
      type: Object as PropType<C397_MODEL>,
      default: null
    },
    modelValue: {
      type: Object as PropType<C399_VMODEL>,
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  setup () {
    /* Components Data */
    const e7Data: Record<string, E7_MODEL> = {
      password: {
        label: 'New Password',
        inputPlaceholder: 'New Password',
        description: 'Password must be between 5 and 12 characters with no spaces.'
      },
      confirm_password: {
        label: 'Confirm Password',
        inputPlaceholder: 'Confirm Password'
      }
    }

    /* Reactive v-model  */
    const model: C399_VMODEL = reactive({ password: '', confirm_password: '' })

    return { e7Data, model }
  }
})
