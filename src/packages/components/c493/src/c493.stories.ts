import { Meta, Story } from '@storybook/vue3'

/* Component */
import C493 from '../src/c493.vue'
import { C493_MODEL, C493_SHOW_MODEL } from './c493.model'
import '../src/c493.style.scss'

export default {
  component: C493,
  title: 'Components/C493',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    showComponent: {
      options: [C493_SHOW_MODEL.C389, C493_SHOW_MODEL.C398, C493_SHOW_MODEL.C396, C493_SHOW_MODEL.C399],
      control: { type: 'select' }
    },
    componentClass: {
      table: { disable: true }
    },
    c389Data: {
      table: { disable: true }
    },
    c398Data: {
      table: { disable: true }
    },
    c396Data: {
      table: { disable: true }
    },
    c399Data: {
      table: { disable: true }
    },
  }
} as Meta

const Template: Story<C493_MODEL> = (args) => ({
  components: { C493 },
  setup() {
    return { args }
  },
  template: '<c493 v-bind="args" />',
})

export const Default = Template.bind({})

Default.args = {
  showComponent: 'c389',
  c389Data: {
    componentClass: '-variant-4',
    headerText: 'Enter Your Account Information',
    c116Data: {
      componentClass: '-error',
      bodyText: 'Incorrect username or password.'
    },
    c387Data: {
      links: [{ href: '#', title: 'Forgot Username or Password?' }]
    }
  },
  c398Data: {
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
  },
  c396Data: {
    componentClass: '-variant-1',
    icon: 'triangle-exclamation.svg',
    title: 'Token not found',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  c399Data: {
    componentClass: '-variant-1',
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
}
