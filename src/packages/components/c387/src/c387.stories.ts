import { Meta, Story } from '@storybook/vue3'

/* Component */
import { C387 } from '../dist/c387.es'
import { C387_MODEL, C387_LINKS_MODEL } from './c387.model'
import '../dist/style.css'

const c387Links: C387_LINKS_MODEL[] = [
  { href: '#', title: 'Forgot Username or Password?' }
]

const variants = ['default', '-variant-1']

export default {
  component: C387,
  parameters: {
    layout: 'centered'
  },
  title: 'Components/C387',
  argTypes: {
    componentClass: {
      name: 'Class Modifiers',
      options: variants,
      mapping: { default: '' },
      control: 'select',
    },
    links: {
      table: { disable: true }
    },
    buttonTitle: {
      table: { disable: true }
    },
    modelValue: {
      table: { disable: true }
    }
  }
} as Meta

const Template: Story<C387_MODEL> = (args) => ({
  components: { C387 },
  setup() {
    return { args }
  },
  template: '<c387 v-bind="args" />',
})

export const Default = Template.bind({})

Default.args = {
  componentClass: 'default',
  links: c387Links
}
