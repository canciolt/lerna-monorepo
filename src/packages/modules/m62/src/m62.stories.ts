import { Meta, Story } from '@storybook/vue3'

/* Component */
import M62 from '../src/m62.vue'
import '../src/m62.style.scss'

export default {
  component: M62,
  title: 'Modules/M62',
  parameters: {
    layout: 'centered'
  }
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { M62 },
  setup() {
    return { args }
  },
  template: '<m62 v-bind="args" />',
})

export const Default = Template.bind({})
