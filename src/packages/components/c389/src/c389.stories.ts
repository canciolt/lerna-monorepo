import { Meta, Story } from '@storybook/vue3'

/* Component */
import C389 from '../src/c389.vue'
import '../src/c389.style.scss'

export default {
  component: C389,
  parameters: {
    layout: 'centered'
  },
  title: 'Components/C389',
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { C389 },
  setup() {
    return { args }
  },
  template: '<c389 v-bind="args" />',
})

export const Default = Template.bind({})
