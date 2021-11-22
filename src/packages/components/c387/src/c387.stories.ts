import { Meta, Story } from '@storybook/vue3'

/* Component */
import C387 from '../src/c387.vue'
import '../src/c387.style.scss'
import { C387_MODEL, C387_LINKS_MODEL } from "./c387.model";

const c387Links: C387_LINKS_MODEL[] = [
  { href: '#', title: 'Forgot Username or Password?' }
]

export default {
  component: C387,
  parameters: {
    layout: 'centered'
  },
  title: 'Components/C387',
  argTypes: {
    componentClass: {
      table: { disable: true }
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
  links: c387Links
}
