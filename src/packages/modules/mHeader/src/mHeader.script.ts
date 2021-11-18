import { defineComponent } from 'vue'
import m106 from '../../../modules/m106/src/m106.vue'
import C1 from '../../../components/c1/src/c1.vue'
import { C1_LOGO_MODEL } from '../../../components/c1/src/c1.model'

export default defineComponent({
  name: 'MHeader',
  components: { C1, m106 },
  props: {},
  setup () {
    return { logoBlack: C1_LOGO_MODEL.black, logoShield: C1_LOGO_MODEL.shield  }
  }
})
