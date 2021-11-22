import { Meta, Story } from '@storybook/vue3'

/* Component */
import C116 from '../src/c116.vue'
import '../src/c116.style.scss'
import { C116_MODEL } from "./c116.model";

const variants = ['-neutral', '-error', '-important', '-success', '-notify']

export default {
  component: C116,
  title: 'Components/C116',
  decorators: [() => ({ template: '<div style="min-width: 50em"><story /></div>' })],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    componentClass: {
      name: 'Class Modifiers',
      options: variants,
      control: 'select',
    },
    bodyText: {
      table: { disable: true }
    }
  }
} as Meta

const Template: Story<C116_MODEL> = (args) => ({
  components: { C116 },
  setup() {
    return { args }
  },
  template: '<c116 v-bind="args" />',
})

export const Default = Template.bind({})

Default.args = {
  componentClass: '-neutral',
  bodyText: 'Incorrect username or password.'
}
