import { Meta, Story } from '@storybook/vue3'
import { C397_MODEL } from "./c397.model";

/* Component */
import C397 from '../src/c397.vue'
import '../src/c397.style.scss'

const variants = ['-variant-1']

export default {
  component: C397,
  title: 'Components/C397',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    componentClass: {
      name: 'Class Modifiers',
      options: variants,
      control: 'select',
    },
    e27Data: {
      table: { disable: true }
    },
    body: {
      table: { disable: true }
    }
  }
} as Meta

const Template: Story<C397_MODEL> = (args) => ({
  components: { C397 },
  setup() {
    return { args }
  },
  template: '<c397 v-bind="args" />',
})

export const Default = Template.bind({})

Default.args = {
  componentClass: '-variant-1',
  body: 'Mon - Fri 9:00am - 8:00pm ET Sat, Sun 9:00am - 5:30pm ET',
  e27Data: {
    links: [
      {
        href: '#',
        title: 'Call 1-866-625-1160',
        ariaLabel: 'Call 1-866-625-1160'
      }
    ],
    text: 'Need help?'
  }
}
