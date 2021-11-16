import { Meta, Story } from '@storybook/vue3'

/* Component */
import mFooter from '../src/mFooter.vue'
import '../src/mFooter.style.scss'

export default {
  component: mFooter,
  title: 'Modules/mFooter',
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { mFooter },
  setup() {
    return { args }
  },
  template: '<m-footer v-bind="args" />',
})

export const Default = Template.bind({})
