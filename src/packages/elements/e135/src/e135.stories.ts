import { Meta, Story } from '@storybook/vue3'
import { E135_MODEL, E135_LINK_MODEL } from './e135.model'

/* Component */
import { E135 } from '../dist/e135.es'
import '../dist/style.css'

const links: E135_LINK_MODEL[] = [
  { title: 'Yes', href: '#' },
  { title: 'No', href: '#' }
]

const variants = ['default', '-variant-1']

export default {
  component: E135,
  title: 'Elements/E135',
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
    listClass: {
      table: { disable: true }
    },
    linkList: {
      table: { disable: true }
    }
  }
} as Meta

const Template: Story<E135_MODEL> = (args) => ({
  components: { E135 },
  setup () {
    return { args }
  },
  template: '<e135 v-bind="args" />',
})

export const Default = Template.bind({})

Default.args = {
  componentClass: 'default',
  linkList: links
}
