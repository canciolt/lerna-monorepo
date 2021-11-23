import { defineComponent } from 'vue'

export default defineComponent({
  name: 'C396',
  props: {
    componentClass: {
      type: String,
      default: '-variant-1'
    },
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const iconsBasePath = 'images/icons/'
    const path = `https://${import.meta.env.HOST}${import.meta.env.ASSETS}${iconsBasePath}`
    const figureItemSrc = props.icon ? `${path}${props.icon}` : ''

    return { figureItemSrc }
  }
})
