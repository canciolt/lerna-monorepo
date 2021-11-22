import { Meta, Story } from '@storybook/vue3'

/* Component */
import C398 from '../src/c398.vue'
import '../src/c398.style.scss'
import { C398_MODEL } from "./c398.model";

const variants = ['-variant-1', '-variant-2']

export default {
  component: C398,
  title: 'Components/C398',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    componentClass: {
      name: 'Class Modifiers',
      options: variants,
      control: 'select',
    },
    e64Data: {
      table: { disable: true }
    },
    c116Data: {
      table: { disable: true }
    },
    c397Data: {
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

const Template: Story<C398_MODEL> = (args) => ({
  components: { C398 },
  setup() {
    return { args }
  },
  template: '<c398 v-bind="args" />',
})

export const Default = Template.bind({})

Default.args = {
  componentClass: '-variant-1',
  e64Data: {
    componentClass: '-variant-11',
    titleClass: 'headline-7 -variant-1',
    bodyClass: 'paragraph-serif-3 -variant-3',
    title: 'Forgot your username or password?',
    bodyText: `<span class="e64_body_text paragraph-serif-3 -variant-3">Fill in your information below and we’ll email you a link to reset your password. <a href="#" title="Login page" aria-label="Login page">Click here</a> to return to the Login page.</span>`
  },
  c116Data: {
    componentClass: '-error',
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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