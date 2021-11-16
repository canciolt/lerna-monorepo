import { Meta, Story } from '@storybook/vue3'

/* Component */
import E27 from '../src/e27.vue'
import '../src/e27.style.scss'

export default {
  component: E27,
  parameters: {
    layout: 'centered'
  },
  title: 'Elements/E27'
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { E27 },
  setup() {
    return { args }
  },
  template: '<e27 v-bind="args" />',
})

export const Default = Template.bind({})
