import { defineComponent, PropType, reactive, watch, watchEffect } from "vue";
import E7 from '../../../elements/e7/src/e7.vue'
import E5 from '../../../elements/e5/src/e5.vue'
import E84 from '../../../elements/e84/src/e84.vue'
import { C387_LINKS_MODEL, C387_VMODEL } from "./c387.model";
import { E5_MODEL } from "e5/src/e5.model";
import { E84_MODEL } from "../../../elements/e84/src/e84.model";
import { E7_MODEL } from "../../../elements/e7/src/e7.model";

export default defineComponent({
  name: 'C387',
  components: { E7, E5, E84 },
  props: {
    componentClass: {
      type: String,
      default: ''
    },
    buttonTitle: {
      type: String,
      default: 'Log In'
    },
    links: {
      type: Array as PropType<C387_LINKS_MODEL[]>,
      default: []
    },
    modelValue: {
      type: Object as PropType<C387_VMODEL>,
      default: {}
    }
  },
  emits: ['update:modelValue'],
  setup () {
    /* Components Data */
    const e7Data: Record<string, E7_MODEL> = {
      username: {
        label: 'Username',
        inputPlaceholder: 'Username'
      },
      password: {
        label: 'Password',
        inputPlaceholder: 'Password'
      }
    }
    const e5Data: E5_MODEL = {
      controlClass: '-variant-2',
      text: 'Stay logged in',
      isRtl: true
    }
    const e84Data: E84_MODEL = {
      linkClass: 'label-2',
      href: '#',
      title: 'Register',
      subtitle: 'Need a My NCL Account?',
      isRtl: true
    }

    /* Reactive v-model  */
    const model: C387_VMODEL = reactive({ username: '', password: '', checked: true })

    return { e5Data, e84Data, e7Data, model }
  }
})
