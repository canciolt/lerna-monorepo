import { Meta, Story } from '@storybook/vue3'

/* Component */
import mHeader from '../src/mHeader.vue'
import '../src/mHeader.style.scss'

export default {
  component: mHeader,
  title: 'Modules/mHeader',
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { mHeader },
  setup() {
    return { args }
  },
  template: '<m-header v-bind="args" />',
})

export const Default = Template.bind({})
