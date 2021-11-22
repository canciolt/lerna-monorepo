import { defineComponent, PropType, reactive } from "vue";
import E7 from '../../../elements/e7/src/e7.vue'
import E64 from '../../../elements/e64/src/e64.vue'
import C116 from '../../../components/c116/src/c116.vue'
import C397 from '../../../components/c397/src/c397.vue'
import { E64_MODEL } from "../../../elements/e64/src/e64.model";
import { C116_MODEL } from "../../c116/src/c116.model";
import { C397_MODEL } from "c397/src/c397.model";
import { E7_MODEL } from "../../../elements/e7/src/e7.model";
import { C398_VMODEL } from "./c398.model";

export default defineComponent({
  name: 'C398',
  components: { E7, E64, C397, C116 },
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
      type: Object as PropType<C398_VMODEL>,
      default: {}
    }
  },
  emits: ['update:modelValue'],
  setup () {
    /* Components Data */
    const e7Data: Record<string, E7_MODEL> = {
      first_name: {
        label: 'First Name',
        inputPlaceholder: 'First Name'
      },
      last_name: {
        label: 'Last Name',
        inputPlaceholder: 'Last Name'
      },
      email: {
        label: 'Email',
        inputPlaceholder: 'Email',
        inputType: 'email'
      }
    }

    /* Reactive v-model  */
    const model: C398_VMODEL = reactive({
      first_name: '',
      last_name: '',
      email: ''
    })

    return { e7Data, model }
  }
})
