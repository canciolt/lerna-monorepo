import { Meta, Story } from '@storybook/vue3'

/* Component */
import C396 from '../src/c396.vue'
import '../src/c396.style.scss'

export default {
  component: C396,
  title: 'Components/C396',
  parameters: {
    layout: 'centered'
  }
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { C396 },
  setup() {
    return { args }
  },
  template: '<c396 v-bind="args" />',
})

export const Default = Template.bind({})
