import { Meta, Story } from '@storybook/vue3'

/* Component */
import { C389 } from '../dist/c389.es'
import { C389_MODEL } from './c389.model'
import '../dist/style.css'

const variants = [
  'default',
  '-variant-1',
  '-variant-2',
  '-variant-3',
  '-variant-4'
]

export default {
  component: C389,
  parameters: {
    layout: 'centered'
  },
  title: 'Components/C389',
  argTypes: {
    componentClass: {
      name: 'Class Modifiers',
      options: variants,
      mapping: { default: '' },
      control: 'select',
    },
    headerText: {
      table: { disable: true }
    },
    c116Data: {
      table: { disable: true }
    },
    c387Data: {
      table: { disable: true }
    },
    modelValue: {
      table: { disable: true }
    }
  }
} as Meta

const Template: Story<C389_MODEL> = (args) => ({
  components: { C389 },
  setup() {
    return { args }
  },
  template: '<c389 v-bind="args" />'
})

export const Default = Template.bind({})

Default.args = {
  componentClass: 'default',
  headerText: 'Enter Your Account Information',
  c116Data: {
    componentClass: '-error',
    bodyText: 'Incorrect username or password.'
  },
  c387Data: {
    links: [{ href: '#', title: 'Forgot Username or Password?' }]
  }
}
