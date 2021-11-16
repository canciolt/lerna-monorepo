import { Meta, Story } from '@storybook/vue3'

/* Component */
import C57 from '../src/c57.vue'
import '../src/c57.style.scss'


export default {
  component: C57,
  title: 'Components/C57'
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { C57 },
  setup() {
    return { args }
  },
  template: '<c57 v-bind="args" />',
})

export const Default = Template.bind({})
