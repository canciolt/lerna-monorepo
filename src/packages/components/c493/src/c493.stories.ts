import { Meta, Story } from '@storybook/vue3'

/* Component */
import C493 from '../src/c493.vue'
import '../src/c493.style.scss'

export default {
  component: C493,
  title: 'Components/C493',
  parameters: {
    layout: 'centered'
  }
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { C493 },
  setup() {
    return { args }
  },
  template: '<c493 v-bind="args" />',
})

export const Default = Template.bind({})
