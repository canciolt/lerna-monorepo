import { Meta, Story } from '@storybook/vue3'

/* Component */
import M106 from '../src/m106.vue'
import '../src/m106.style.scss'

export default {
  component: M106,
  title: 'Modules/M106',
} as Meta

const Template: Story<Record<string, any>> = (args) => ({
  components: { M106 },
  setup() {
    return { args }
  },
  template: '<m106 v-bind="args" />',
})

export const Default = Template.bind({})
