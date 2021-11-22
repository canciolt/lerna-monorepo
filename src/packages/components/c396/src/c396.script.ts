import { defineComponent } from 'vue'

export default defineComponent({
  name: 'C396',
  setup () {
    const iconsBasePath = 'images/icons/'
    const icon = 'triangle-exclamation.svg'
    const path = `http://${import.meta.env.HOST}${import.meta.env.ASSETS}${iconsBasePath}`
    const figureItemSrc = `${path}${icon}`

    return { figureItemSrc }
  }
})
