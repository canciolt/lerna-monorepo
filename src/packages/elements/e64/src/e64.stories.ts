import { Meta, Story } from '@storybook/vue3'

/* Component */
import E64 from '../src/e64.vue'
import '../src/e64.style.scss'

export default {
  component: E64,
  title: 'Elements/E64'
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { E64 },
  setup() {
    return { args }
  },
  template: '<e64 v-bind="args" />',
})

export const Default = Template.bind({})
