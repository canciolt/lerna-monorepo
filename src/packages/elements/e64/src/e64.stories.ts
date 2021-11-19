import { Meta, Story } from '@storybook/vue3'
import { E64_MODEL } from "./e64.model";

/* Component */
import E64 from '../src/e64.vue'
import '../src/e64.style.scss'


const variants = ['default', '-variant-11']

export default {
  component: E64,
  title: 'Elements/E64',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    componentClass: {
      name: 'Class Modifiers',
      options: variants,
      mapping: { default: '' },
      control: 'select',
    },
    titleClass: {
      table: { disable: true }
    },
    bodyClass: {
      table: { disable: true }
    },
    title: {
      table: { disable: true }
    },
    bodyText: {
      table: { disable: true }
    }
  }
} as Meta

const Template: Story<E64_MODEL> = (args) => ({
  components: { E64 },
  setup() {
    return { args }
  },
  template: '<e64 v-bind="args" />',
})

export const Default = Template.bind({})

Default.args = {
  componentClass: '-variant-11',
  titleClass: 'headline-7 -variant-1',
  bodyClass: 'paragraph-serif-3 -variant-3',
  title: 'Reset your password',
  bodyText: 'Enter a new password below to regain access to your Norwegian account.'
}
