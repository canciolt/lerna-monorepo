import { Meta, Story } from '@storybook/vue3'

/* Component */
import C397 from '../src/c397.vue'
import '../src/c397.style.scss'

export default {
  component: C397,
  title: 'Components/C397',
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { C397 },
  setup() {
    return { args }
  },
  template: '<c397 v-bind="args" />',
})

export const Default = Template.bind({})
