import { Meta, Story } from '@storybook/vue3'

/* Component */
import { M106 } from '../dist/m106.es'
import { M106_MODEL } from './m106.model'
import '../dist/style.css'

export default {
  component: M106,
  title: 'Modules/M106',
  argTypes: {
    componentClass: {
      table: { disable: true }
    },
    href: {
      table: { disable: true }
    },
    aria: {
      table: { disable: true }
    },
    title: {
      table: { disable: true }
    }
  }
} as Meta

const Template: Story<M106_MODEL> = (args) => ({
  components: { M106 },
  setup() {
    return { args }
  },
  template: '<m106 v-bind="args" />',
})

export const Default = Template.bind({})

Default.args = {
  title: 'Enable Accessibility'
}
