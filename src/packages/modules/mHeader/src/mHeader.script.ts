import { defineComponent, PropType } from 'vue'
import m106 from '../../../modules/m106/src/m106.vue'
import C1 from '../../../components/c1/src/c1.vue'
import { C1_LOGO_MODEL } from '../../../components/c1/src/c1.model'
import { M106_MODEL } from '../../m106/src/m106.model'
import { MHEADER_LINKS_MODEL } from './mHeader.model'

export default defineComponent({
  name: 'MHeader',
  components: { C1, m106 },
  props: {
    componentClass: {
      type: String,
      default: ''
    },
    links: {
      type: Array as PropType<MHEADER_LINKS_MODEL[]>,
      default: () => []
    },
    m106Data: {
      type: Object as PropType<M106_MODEL>,
      default: null
    }
  },
  setup () {
    return { logoBlack: C1_LOGO_MODEL.black, logoShield: C1_LOGO_MODEL.shield  }
  }
})
