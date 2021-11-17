import { defineComponent } from 'vue'
import m106 from '../../../modules/m106/src/m106.vue'
import C1 from '../../../components/c1/src/c1.vue'
import { Logo } from '../../../components/c1/src/c1.model'

export default defineComponent({
  name: 'MHeader',
  components: { C1, m106 },
  props: {},
  setup () {
    return { logoBlack: Logo.black, logoShield: Logo.shield  }
  }
})
