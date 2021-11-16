import { Meta, Story } from '@storybook/vue3'

/* Component */
import E7 from '../src/e7.vue'
import '../src/e7.style.scss'

export default {
  component: E7,
  title: 'Elements/E7'
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { E7 },
  setup() {
    return { args }
  },
  template: '<e7 v-bind="args" />',
})

export const Default = Template.bind({})
