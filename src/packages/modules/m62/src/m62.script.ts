import { defineComponent, PropType } from "vue";
import C493 from '../../../components/c493/src/c493.vue'
import { C493_MODEL } from "../../../components/c493/src/c493.model";

export default defineComponent({
  name: 'M62',
  components: { C493 },
  props: {
    componentClass: {
      type: String,
      default: ''
    },
    c493Data: {
      type: Object as PropType<C493_MODEL>,
      default: null
    }
  }
})
