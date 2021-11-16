import { Meta, Story } from '@storybook/vue3'

/* Component */
import C387 from '../src/c387.vue'
import '../src/c387.style.scss'

export default {
  component: C387,
  parameters: {
    layout: 'centered'
  },
  title: 'Components/C387',
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { C387 },
  setup() {
    return { args }
  },
  template: '<c387 v-bind="args" />',
})

export const Default = Template.bind({})
