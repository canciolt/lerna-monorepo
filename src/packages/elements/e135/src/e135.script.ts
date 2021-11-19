import { defineComponent, PropType } from "vue";
import { E135_LINK_MODEL } from "./e135.model";

export default defineComponent({
  name: 'E135',
  props: {
    componentClass: {
      type: String,
      default: ''
    },
    listClass: {
      type: String,
      default: ''
    },
    linkList: {
      type: Array as PropType<E135_LINK_MODEL[]>,
      default: []
    }
  }
})
