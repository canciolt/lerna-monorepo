import { Meta, Story } from '@storybook/vue3'

/* Component */
import m106 from '../src/m106.vue'
import '../src/m106.style.scss'

export default {
  component: m106,
  title: 'Modules/m106',
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { m106 },
  setup() {
    return { args }
  },
  template: '<m106 v-bind="args" />',
})

export const Default = Template.bind({})
