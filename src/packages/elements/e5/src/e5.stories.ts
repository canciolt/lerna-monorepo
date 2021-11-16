import { Meta, Story } from '@storybook/vue3'

/* Component */
import E5 from '../src/e5.vue'
import '../src/e5.style.scss'

export default {
  component: E5,
  title: 'Elements/E5'
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { E5 },
  setup() {
    return { args }
  },
  template: '<e5 v-bind="args" />',
})

export const Default = Template.bind({})
