import { Meta, Story } from '@storybook/vue3'

/* Component */
import MFooter from '../src/mFooter.vue'
import '../src/mFooter.style.scss'

export default {
  component: MFooter,
  title: 'Modules/MFooter',
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { MFooter },
  setup() {
    return { args }
  },
  template: '<m-footer v-bind="args" />',
})

export const Default = Template.bind({})
