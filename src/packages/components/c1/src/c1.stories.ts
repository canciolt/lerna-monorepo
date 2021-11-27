import { Meta, Story } from '@storybook/vue3'

/* Component */
import { C1 } from '../dist/c1.es'
import '../src/c1.style.scss'

/* Models */
import { C1_MODEL, C1_LOGO_MODEL } from './c1.model'

export default {
  component: C1,
  parameters: {
    layout: 'centered'
  },
  title: 'Components/C1',
  argTypes: {
    logo: {
      options: [C1_LOGO_MODEL.black, C1_LOGO_MODEL.white, C1_LOGO_MODEL.shield],
      control: { type: 'select' }
    },
    href: {
      table: { disable: true }
    },
    title: {
      table: { disable: true }
    },
    componentClass: {
      table: { disable: true }
    },
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
