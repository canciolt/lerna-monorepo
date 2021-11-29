import { Meta, Story } from '@storybook/vue3'

/* Component */
import { E84 } from '../dist/e84.es'
import { E84_MODEL } from './e84.model'
import '../dist/style.css'

export default {
  component: E84,
  parameters: {
    layout: 'centered'
  },
  title: 'Elements/E84',
  argTypes: {
    componentClass: {
      table: { disable: true }
    },
    linkClass: {
      table: { disable: true }
    },
    href: {
      table: { disable: true }
    },
    title: {
      table: { disable: true }
    },
    subtitle: {
      table: { disable: true }
    },
    aria: {
      table: { disable: true }
    },
    isRtl: {
      name: 'RTL'
    }
  }
} as Meta

const Template: Story<E84_MODEL> = (args) => ({
  components: { E84 },
  setup() {
    return { args }
  },
  template: '<e84 v-bind="args" />',
})

export const Default = Template.bind({})

Default.args = {
  linkClass: 'label-2',
  title: 'LOG IN',
  subtitle: 'Already have an account?',
  isRtl: false
}
