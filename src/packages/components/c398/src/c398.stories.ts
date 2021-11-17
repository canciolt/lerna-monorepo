import { Meta, Story } from '@storybook/vue3'

/* Component */
import C398 from '../src/c398.vue'
import '../src/c398.style.scss'

export default {
  component: C398,
  title: 'Components/C398',
  parameters: {
    layout: 'centered'
  }
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { C398 },
  setup() {
    return { args }
  },
  template: '<c398 v-bind="args" />',
})

export const Default = Template.bind({})
