import { defineComponent, computed, PropType } from 'vue'
import { Logo } from './c1.model'


export default defineComponent({
  name: 'C1',
  props: {
    componentClass: {
      type: String,
      default: ''
    },
    emit: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: '/'
    },
    title: {
      type: String,
      default: 'Norwegian Cruise Line'
    },
    baseUrl: {
      type: String,
      default: 'images/logos/'
    },
    logo: {
      type: String as PropType<Logo>,
      default: Logo.black
    }
  },
  setup (props) {
    const logos = {
      black: 'logo-ncl-black.svg',
      white: 'logo-ncl-white.svg',
      shield: 'logo-ncl-shield.svg'
    }
    const path = `https://${import.meta.env.HOST}${import.meta.env.STATIC}${props.baseUrl}`
    const logoSrc = computed(() => Object.prototype.hasOwnProperty.call(logos, props.logo)
      ? `${path}${logos[props.logo]}`
      : '')

    return { logoSrc }
  }
})
