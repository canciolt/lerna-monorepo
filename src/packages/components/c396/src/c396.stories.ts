import { Meta, Story } from '@storybook/vue3'

/* Component */
import { C396 } from '../dist/c396.es'
import { C396_MODEL } from './c396.model'
import '../dist/style.css'

const variants = ['-variant-1', '-variant-2', '-variant-3']

export default {
  component: C396,
  title: 'Components/C396',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    componentClass: {
      name: 'Class Modifiers',
      options: variants,
      control: 'select',
    },
    title: {
      table: { disable: true }
    },
    body: {
      table: { disable: true }
    },
    icon: {
      table: { disable: true }
    }
  }
} as Meta

const Template: Story<C396_MODEL> = (args) => ({
  components: { C396 },
  setup() {
    return { args }
  },
  template: '<c396 v-bind="args" />',
})

export const Default = Template.bind({})

Default.args = {
  componentClass: '-variant-1',
  icon: 'triangle-exclamation.svg',
  title: 'Token not found',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}
