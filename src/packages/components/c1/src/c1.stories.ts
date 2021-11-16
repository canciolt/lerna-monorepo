import { Meta, Story } from '@storybook/vue3'

/* Component */
import C1 from '../src/c1.vue'
import '../src/c1.style.scss'

/* Models */
import { C1_MODEL, Logo } from './c1.model'

export default {
  component: C1,
  title: 'Components/C1',
  argTypes: {
    logo: {
      options: [Logo.black, Logo.white, Logo.shield],
      control: { type: 'select' }
    },
    emit: {
      defaultValue: false,
      control: { type: 'boolean' }
    },
    href: {
      table: { disable: true },
      control: { type: 'text' }
    },
    baseUrl: {
      table: { disable: true },
      control: { type: 'text' }
    },
    title: {
      table: { disable: true },
      control: { type: 'text' }
    }
  }
} as Meta

const Template: Story<C1_MODEL> = (args) => ({
  components: { C1 },
  setup() {
    return { args }
  },
  template: '<c1 v-bind="args" />',
})

export const Default = Template.bind({})
