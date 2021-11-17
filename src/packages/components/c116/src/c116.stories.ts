import { Meta, Story } from '@storybook/vue3'

/* Component */
import C116 from '../src/c116.vue'
import '../src/c116.style.scss'

export default {
  component: C116,
  title: 'Components/C116',
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { C116 },
  setup() {
    return { args }
  },
  template: '<c116 v-bind="args" />',
})

export const Default = Template.bind({})
