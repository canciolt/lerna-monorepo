import { defineComponent, computed, PropType } from 'vue'
import { C1_LOGO_MODEL } from './c1.model'

export default defineComponent({
  name: 'C1',
  props: {
    componentClass: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: '/'
    },
    title: {
      type: String,
      default: 'Norwegian Cruise Line'
    },
    logo: {
      type: String as PropType<C1_LOGO_MODEL>,
      default: C1_LOGO_MODEL.black
    }
  },
  setup (props) {
    const logos = {
      black: 'logo-ncl-black.svg',
      white: 'logo-ncl-white.svg',
      shield: 'logo-ncl-shield.svg'
    }
    const logosBasePath = 'images/logos/'
    const path = `${import.meta.env.BASE_URL}${logosBasePath}`
    const logoSrc = computed(() => Object.prototype.hasOwnProperty.call(logos, props.logo)
      ? `${path}${logos[props.logo]}`
      : '')

    return { logoSrc }
  }
})
