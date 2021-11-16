import { defineComponent } from 'vue'
import C1 from '../../../components/c1/src/c1.vue'
import { Logo } from '../../../components/c1/src/c1.model'

export default defineComponent({
  name: 'mHeader',
  components: { C1 },
  props: {},
  setup () {
    return { logoBlack: Logo.black, logoShield: Logo.shield  }
  }
})
