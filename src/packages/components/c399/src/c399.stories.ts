import { Meta, Story } from '@storybook/vue3'

/* Component */
import { C399 } from '../dist/c399.es'
import { C399_MODEL } from './c399.model'
import '../dist/style.css'

const variants = ['default', '-variant-1', '-variant-2']

export default {
  component: C399,
  parameters: {
    layout: 'centered'
  },
  title: 'Components/C399',
  argTypes: {
    componentClass: {
      name: 'Class Modifiers',
      options: variants,
      mapping: { default: '' },
      control: 'select',
    },
    e64Data: {
      table: { disable: true }
    },
    c397Data: {
      table: { disable: true }
    },
    c116Data: {
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

const Template: Story<C399_MODEL> = (args) => ({
  components: { C399 },
  setup() {
    return { args }
  },
  template: '<c399 v-bind="args" />',
})

export const Default = Template.bind({})

Default.args = {
  componentClass: 'default',
  e64Data: {
    componentClass: '-variant-11',
    titleClass: 'headline-7 -variant-1',
    bodyClass: 'paragraph-serif-3 -variant-3',
    title: 'Reset your password',
    bodyText: 'Enter a new password below to regain access to your Norwegian account.'
  },
  c116Data: {
    componentClass: '-error',
    bodyText: 'Lorem ipsum dolor sit amet.'
  },
  c397Data: {
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
}
