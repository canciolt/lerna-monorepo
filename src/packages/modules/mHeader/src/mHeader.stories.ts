import { Meta, Story } from '@storybook/vue3'

/* Component */
import MHeader from '../src/mHeader.vue'
import '../src/mHeader.style.scss'

export default {
  component: MHeader,
  title: 'Modules/MHeader',
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { MHeader },
  setup() {
    return { args }
  },
  template: '<m-header v-bind="args" />',
})

export const Default = Template.bind({})
