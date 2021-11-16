import { Meta, Story } from '@storybook/vue3'

/* Component */
import C399 from '../src/c399.vue'
import '../src/c399.style.scss'

export default {
  component: C399,
  parameters: {
    layout: 'centered'
  },
  title: 'Components/C399',
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { C399 },
  setup() {
    return { args }
  },
  template: '<c399 v-bind="args" />',
})

export const Default = Template.bind({})
