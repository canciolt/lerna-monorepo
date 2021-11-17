import { Meta, Story } from '@storybook/vue3'

/* Component */
import E84 from '../src/e84.vue'
import '../src/e84.style.scss'

export default {
  component: E84,
  title: 'Elements/E84'
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { E84 },
  setup() {
    return { args }
  },
  template: '<e84 v-bind="args" />',
})

export const Default = Template.bind({})
